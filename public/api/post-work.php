<?php

// ============================================================
// CORS & HEADERS
// ============================================================
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$data_file = __DIR__ . '/../data/projects.json';
$upload_dir = __DIR__ . '/../uploads/projects/';

// Ensure directory exists
if (!is_dir(dirname($data_file))) {
    mkdir(dirname($data_file), 0755, true);
}

// Load existing projects
$projects = [];
if (file_exists($data_file)) {
    $raw = file_get_contents($data_file);
    $decoded = json_decode($raw, true);
    if (is_array($decoded)) {
        $projects = $decoded;
    }
}

// Parse request data (supports both JSON body & multipart/form-data)
$content_type = $_SERVER['CONTENT_TYPE'] ?? '';
$input = [];

if (strpos($content_type, 'application/json') !== false) {
    $raw_input = file_get_contents('php://input');
    $input = json_decode($raw_input, true) ?: [];
} else {
    $input = $_POST;
}

// ============================================================
// DELETE: DELETE A PROJECT
// ============================================================
if ($_SERVER['REQUEST_METHOD'] === 'DELETE' || (isset($input['action']) && $input['action'] === 'delete')) {
    $delete_id = trim($_GET['id'] ?? $input['id'] ?? '');
    if (empty($delete_id)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Project ID is required to delete."]);
        exit;
    }
    $initial_count = count($projects);
    $projects = array_values(array_filter($projects, function($p) use ($delete_id) {
        return ($p['id'] ?? '') !== $delete_id;
    }));
    if (count($projects) === $initial_count) {
        http_response_code(404);
        echo json_encode(["status" => "error", "message" => "Project not found."]);
        exit;
    }
    file_put_contents(
        $data_file,
        json_encode($projects, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE),
        LOCK_EX
    );
    echo json_encode(["status" => "success", "message" => "Project deleted successfully."]);
    exit;
}

// ============================================================
// GET: RETURN ALL PROJECTS
// ============================================================
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // If querying by specific ID
    if (isset($_GET['id'])) {
        $search_id = trim($_GET['id']);
        foreach ($projects as $p) {
            if (isset($p['id']) && $p['id'] === $search_id) {
                echo json_encode(["status" => "success", "project" => $p]);
                exit;
            }
        }
        http_response_code(404);
        echo json_encode(["status" => "error", "message" => "Project not found."]);
        exit;
    }

    echo json_encode($projects);
    exit;
}

// ============================================================
// POST: ADD / UPDATE A PROJECT
// ============================================================
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        "status" => "error",
        "message" => "Method not allowed. Use GET, POST, or DELETE."
    ]);
    exit;
}

// ------------------------------------------------------------
// HELPER: SLUG GENERATOR
// ------------------------------------------------------------
function generateSlug($title, $existing_projects) {
    $slug = strtolower(trim($title));
    $slug = preg_replace('/[^a-z0-9]+/i', '-', $slug);
    $slug = trim($slug, '-');
    if (empty($slug)) $slug = 'project-' . time();

    // Check for uniqueness
    $original_slug = $slug;
    $count = 1;
    $ids = array_column($existing_projects, 'id');
    while (in_array($slug, $ids)) {
        $count++;
        $slug = $original_slug . '-' . $count;
    }
    return $slug;
}

// ------------------------------------------------------------
// HELPER: PARSE PARAGRAPHS
// ------------------------------------------------------------
function parseParagraphs($val) {
    if (is_array($val)) return array_values(array_filter(array_map('trim', $val)));
    if (is_string($val)) {
        $lines = preg_split('/\r\n|\r|\n/', $val);
        return array_values(array_filter(array_map('trim', $lines)));
    }
    return [];
}

// ------------------------------------------------------------
// HELPER: FILE UPLOADER
// ------------------------------------------------------------
function handleUpload($file, $upload_dir) {
    if (!isset($file['error']) || $file['error'] !== UPLOAD_ERR_OK) {
        return null;
    }

    if (!is_dir($upload_dir)) {
        mkdir($upload_dir, 0755, true);
    }

    $allowed = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'svg', 'mp4', 'webm', 'mov', 'm4v'];
    $ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));

    if (!in_array($ext, $allowed)) {
        return null;
    }

    $clean_name = uniqid('proj_') . '.' . $ext;
    $dest = rtrim($upload_dir, '/') . '/' . $clean_name;

    if (move_uploaded_file($file['tmp_name'], $dest)) {
        return '/uploads/projects/' . $clean_name;
    }
    return null;
}

// ------------------------------------------------------------
// VALIDATION & ID RESOLUTION
// ------------------------------------------------------------
$title = trim($input['title'] ?? '');
if (empty($title)) {
    http_response_code(400);
    echo json_encode([
        "status" => "error",
        "message" => "Field 'title' is required."
    ]);
    exit;
}

// Generate or sanitize ID
$id = trim($input['id'] ?? '');

// Check if project with same ID already exists
$existing_index = -1;
if (!empty($id)) {
    foreach ($projects as $idx => $p) {
        if (isset($p['id']) && $p['id'] === $id) {
            $existing_index = $idx;
            break;
        }
    }
}

if (empty($id)) {
    $id = generateSlug($title, $projects);
}

// Handle main image: direct URL, existing retain, or file upload
$main_image = trim($input['mainImage'] ?? '');
if (isset($_FILES['mainImage'])) {
    $uploaded = handleUpload($_FILES['mainImage'], $upload_dir);
    if ($uploaded) {
        $main_image = $uploaded;
    }
}
if (empty($main_image) && !empty($input['existingMainImage'])) {
    $main_image = trim($input['existingMainImage']);
}
if (empty($main_image) && $existing_index >= 0 && !empty($projects[$existing_index]['mainImage'])) {
    $main_image = $projects[$existing_index]['mainImage'];
}
if (empty($main_image)) {
    $main_image = "/images/project-fallback.jpg";
}

// Handle carousel images: array of strings, JSON, existing images, or multiple file uploads
$carousel_images = [];
if (!empty($input['existingCarouselImages'])) {
    $decoded = is_string($input['existingCarouselImages']) ? json_decode($input['existingCarouselImages'], true) : $input['existingCarouselImages'];
    if (is_array($decoded)) {
        $carousel_images = array_values(array_filter($decoded));
    }
} elseif (!empty($input['carouselImages'])) {
    if (is_array($input['carouselImages'])) {
        $carousel_images = $input['carouselImages'];
    } elseif (is_string($input['carouselImages'])) {
        $decoded = json_decode($input['carouselImages'], true);
        $carousel_images = is_array($decoded) ? $decoded : parseParagraphs($input['carouselImages']);
    }
} elseif ($existing_index >= 0 && !isset($input['existingCarouselImages']) && !isset($_FILES['carouselImages'])) {
    $carousel_images = $projects[$existing_index]['carouselImages'] ?? [];
}

if (isset($_FILES['carouselImages'])) {
    if (is_array($_FILES['carouselImages']['name'])) {
        $file_count = count($_FILES['carouselImages']['name']);
        for ($i = 0; $i < $file_count; $i++) {
            $single_file = [
                'name' => $_FILES['carouselImages']['name'][$i],
                'type' => $_FILES['carouselImages']['type'][$i],
                'tmp_name' => $_FILES['carouselImages']['tmp_name'][$i],
                'error' => $_FILES['carouselImages']['error'][$i],
                'size' => $_FILES['carouselImages']['size'][$i],
            ];
            $uploaded = handleUpload($single_file, $upload_dir);
            if ($uploaded) {
                $carousel_images[] = $uploaded;
            }
        }
    } else {
        $uploaded = handleUpload($_FILES['carouselImages'], $upload_dir);
        if ($uploaded) {
            $carousel_images[] = $uploaded;
        }
    }
}

// Handle carousel videos: string URLs, JSON array, existing videos, or file uploads
$carousel_videos = [];
if (!empty($input['existingCarouselVideos'])) {
    $decoded = is_string($input['existingCarouselVideos']) ? json_decode($input['existingCarouselVideos'], true) : $input['existingCarouselVideos'];
    if (is_array($decoded)) {
        $carousel_videos = array_values(array_filter($decoded));
    }
} elseif (!empty($input['carouselVideos'])) {
    if (is_array($input['carouselVideos'])) {
        $carousel_videos = $input['carouselVideos'];
    } elseif (is_string($input['carouselVideos'])) {
        $decoded = json_decode($input['carouselVideos'], true);
        $carousel_videos = is_array($decoded) ? $decoded : parseParagraphs($input['carouselVideos']);
    }
} elseif ($existing_index >= 0 && !isset($input['existingCarouselVideos']) && !isset($_FILES['carouselVideos']) && !isset($_FILES['video'])) {
    $carousel_videos = $projects[$existing_index]['carouselVideos'] ?? [];
}

if (isset($_FILES['carouselVideos'])) {
    if (is_array($_FILES['carouselVideos']['name'])) {
        $file_count = count($_FILES['carouselVideos']['name']);
        for ($i = 0; $i < $file_count; $i++) {
            $single_file = [
                'name' => $_FILES['carouselVideos']['name'][$i],
                'type' => $_FILES['carouselVideos']['type'][$i],
                'tmp_name' => $_FILES['carouselVideos']['tmp_name'][$i],
                'error' => $_FILES['carouselVideos']['error'][$i],
                'size' => $_FILES['carouselVideos']['size'][$i],
            ];
            $uploaded = handleUpload($single_file, $upload_dir);
            if ($uploaded) {
                $carousel_videos[] = $uploaded;
            }
        }
    } else {
        $uploaded = handleUpload($_FILES['carouselVideos'], $upload_dir);
        if ($uploaded) {
            $carousel_videos[] = $uploaded;
        }
    }
}

// Also accept a single video upload key 'video'
if (isset($_FILES['video'])) {
    $uploaded = handleUpload($_FILES['video'], $upload_dir);
    if ($uploaded) {
        $carousel_videos[] = $uploaded;
    }
}

// Handle challenges
$challenges = [];
if (!empty($input['challenges'])) {
    if (is_array($input['challenges'])) {
        $challenges = $input['challenges'];
    } elseif (is_string($input['challenges'])) {
        $decoded = json_decode($input['challenges'], true);
        $challenges = is_array($decoded) ? $decoded : [];
    }
}

// Handle testimonial
$testimonial = null;
if (!empty($input['testimonial'])) {
    if (is_array($input['testimonial'])) {
        $testimonial = $input['testimonial'];
    } elseif (is_string($input['testimonial'])) {
        $testimonial = json_decode($input['testimonial'], true);
    }
}

// Build complete project object matching the site schema
$new_project = [
    "id" => $id,
    "title" => $title,
    "cardDescription" => trim($input['cardDescription'] ?? $title),
    "imagePosition" => trim($input['imagePosition'] ?? 'right'),
    "buttonStyle" => trim($input['buttonStyle'] ?? 'blue'),
    "category" => trim($input['category'] ?? 'Events'),
    "subtitle" => trim($input['subtitle'] ?? $title),
    "headline" => trim($input['headline'] ?? $title),
    "topSectionParagraphs" => parseParagraphs($input['topSectionParagraphs'] ?? []),
    "aboutParagraphs" => parseParagraphs($input['aboutParagraphs'] ?? []),
    "challengesSubtitle" => trim($input['challengesSubtitle'] ?? 'Challenges'),
    "challengesTitle" => trim($input['challengesTitle'] ?? 'Challenges & Solutions'),
    "challengesDescription" => trim($input['challengesDescription'] ?? ''),
    "challenges" => $challenges,
    "mainImage" => $main_image,
    "carouselImages" => $carousel_images,
    "carouselVideos" => $carousel_videos,
    "aboutTitle" => trim($input['aboutTitle'] ?? 'About the Project'),
    "videoHighlightsTitle" => trim($input['videoHighlightsTitle'] ?? 'Video Highlights'),
    "videoHighlightsDescription" => trim($input['videoHighlightsDescription'] ?? ''),
    "testimonial" => $testimonial
];

$is_update = ($existing_index >= 0);
if ($is_update) {
    $projects[$existing_index] = array_merge($projects[$existing_index], $new_project);
} else {
    // Add to top of list
    array_unshift($projects, $new_project);
}

// Save back to projects.json
$saved = file_put_contents(
    $data_file,
    json_encode($projects, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE),
    LOCK_EX
);

if ($saved === false) {
    http_response_code(500);
    echo json_encode([
        "status" => "error",
        "message" => "Failed to save project to server file."
    ]);
    exit;
}

http_response_code(200);
echo json_encode([
    "status" => "success",
    "message" => $is_update ? "Project updated successfully." : "Project published successfully.",
    "is_update" => $is_update,
    "project" => $new_project
]);
