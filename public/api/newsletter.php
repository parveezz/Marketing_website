<?php
// CORS headers for local testing and cross-origin requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Read JSON data
    $data = json_decode(file_get_contents("php://input"), true);
    
    $email = htmlspecialchars(strip_tags($data['email'] ?? ''));

    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Valid email is required."]);
        exit;
    }

    $file = 'subscribers.txt'; // File to save subscriber emails

    // Create the file if it doesn't exist
    if (!file_exists($file)) {
        file_put_contents($file, "");
    }

    $current = file_get_contents($file);
    
    // Check if email already exists
    if (strpos($current, $email) !== false) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Email already subscribed."]);
        exit;
    }

    // Append email
    $current .= $email . "\n";
    file_put_contents($file, $current);

    // Optional: Send a welcome email to the subscriber
    $subject = "Welcome to the ZIH Newsletter";
    $message = "Thank you for subscribing to our newsletter! We'll keep you updated with the latest insights on marketing and brand growth.";
    $headers = "From: no-reply@yourdomain.com\r\n"; // Replace with your domain email
    
    @mail($email, $subject, $message, $headers);

    http_response_code(200);
    echo json_encode(["status" => "success", "message" => "Subscribed successfully."]);
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed."]);
}
?>
