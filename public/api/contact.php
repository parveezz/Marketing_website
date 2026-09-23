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
    
    $name = htmlspecialchars(strip_tags($data['name'] ?? ''));
    $email = htmlspecialchars(strip_tags($data['email'] ?? ''));
    $message = htmlspecialchars(strip_tags($data['message'] ?? ''));

    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "All fields are required."]);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Invalid email format."]);
        exit;
    }

    // --- IMPORTANT: CHANGE THIS EMAIL TO YOUR HOSTINGER EMAIL ---
    $to = "hello@zihconsultancy.com"; 
    $subject = "New Contact Form Submission from $name";
    
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";
    
    // Set headers
    $headers = "From: no-reply@yourdomain.com\r\n"; // Must be an email hosted on your Hostinger account to avoid spam filters
    $headers .= "Reply-To: $email\r\n";

    // Hostinger supports the native PHP mail() function natively as long as the 'From' header is from your own domain.
    if (mail($to, $subject, $email_content, $headers)) {
        http_response_code(200);
        echo json_encode(["status" => "success", "message" => "Message sent successfully."]);
    } else {
        http_response_code(500);
        echo json_encode(["status" => "error", "message" => "Failed to send message. Please try again later."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed."]);
}
?>
