<?php

// CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit;
}


// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {

  http_response_code(405);

  echo json_encode([
    "status" => "error",
    "message" => "Method not allowed."
  ]);

  exit;
}


// Read JSON data
$data = json_decode(file_get_contents("php://input"), true);

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$message = trim($data['message'] ?? '');


// Validate required fields
if (empty($name) || empty($email) || empty($message)) {

  http_response_code(400);

  echo json_encode([
    "status" => "error",
    "message" => "All fields are required."
  ]);

  exit;
}


// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

  http_response_code(400);

  echo json_encode([
    "status" => "error",
    "message" => "Invalid email format."
  ]);

  exit;
}


// ============================================================
// HOSTINGER SMTP CONFIGURATION
// ============================================================

// Your Hostinger email address
// 🔴 CHANGE THIS
$smtp_username = "no-reply@zihconsultancy.com";

// Password of your Hostinger email account
// 🔴 CHANGE THIS
$smtp_password = "YOUR_HOSTINGER_EMAIL_PASSWORD";

// Hostinger SMTP server
$smtp_host = "smtp.hostinger.com";

$smtp_port = 465;


// Email where contact form messages will be received
// 🔴 CHANGE THIS ONLY IF REQUIRED
$recipient_email = "hello@zihconsultancy.com";


// ============================================================
// PHPMailer
// ============================================================

require __DIR__ . "/PHPMailer/src/Exception.php";
require __DIR__ . "/PHPMailer/src/PHPMailer.php";
require __DIR__ . "/PHPMailer/src/SMTP.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


// ============================================================
// EMAIL CONTENT
// ============================================================

$email_content = "

<html>

<body style='font-family: Arial, Helvetica, sans-serif;'>

<h2>New Contact Form Submission</h2>

<p><strong>Name:</strong> " . htmlspecialchars($name) . "</p>

<p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>

<p><strong>Message:</strong></p>

<p>" . nl2br(htmlspecialchars($message)) . "</p>

<hr>

<p style='font-size:12px;color:#888;'>
Sent from the ZIH Consultancy website contact form.
</p>

</body>

</html>

";


// ============================================================
// SEND EMAIL
// ============================================================

try {

  $mail = new PHPMailer(true);

  // Hostinger SMTP
  $mail->isSMTP();

  $mail->Host = $smtp_host;

  $mail->SMTPAuth = true;

  $mail->Username = $smtp_username;

  $mail->Password = $smtp_password;

  $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;

  $mail->Port = $smtp_port;


  // Sender
  $mail->setFrom(
    $smtp_username,
    "ZIH Consultancy Website"
  );


  // Receiver
  $mail->addAddress($recipient_email);


  // When you reply to the email,
  // it will reply directly to the person who submitted the form.
  $mail->addReplyTo(
    $email,
    $name
  );


  // Email settings
  $mail->isHTML(true);

  $mail->Subject =
    "New Contact Form Submission from " . $name;

  $mail->Body = $email_content;


  // Send
  $mail->send();


  // Success response
  http_response_code(200);

  echo json_encode([
    "status" => "success",
    "message" => "Message sent successfully."
  ]);
} catch (Exception $e) {

  // Email failed
  http_response_code(500);

  echo json_encode([
    "status" => "error",
    "message" => "Failed to send message."
  ]);
}
