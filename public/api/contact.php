<?php

// ============================================================
// CORS & HEADERS
// ============================================================
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode([
    "status" => "error",
    "message" => "Method not allowed."
  ]);
  exit;
}

// ============================================================
// RATE LIMITING (Max 5 submissions per IP per 15 minutes)
// ============================================================
$client_ip = $_SERVER['HTTP_CF_CONNECTING_IP'] ?? $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rate_dir = sys_get_temp_dir() . '/zhmktg_rate_limit';
if (!is_dir($rate_dir)) {
  @mkdir($rate_dir, 0755, true);
}
$rate_file = $rate_dir . '/' . md5($client_ip) . '.json';
$current_time = time();
$requests = [];

if (file_exists($rate_file)) {
  $raw_rate = @file_get_contents($rate_file);
  $requests = json_decode($raw_rate, true) ?: [];
  // Filter requests within the last 15 minutes (900 seconds)
  $requests = array_filter($requests, function($timestamp) use ($current_time) {
    return ($current_time - $timestamp) < 900;
  });
}

if (count($requests) >= 5) {
  http_response_code(429);
  echo json_encode([
    "status" => "error",
    "message" => "Too many submissions. Please wait a few minutes before trying again."
  ]);
  exit;
}

// ============================================================
// READ & VALIDATE JSON INPUT
// ============================================================
$data = json_decode(file_get_contents("php://input"), true);

// HONEYPOT TRAP: if bot filled hidden honeypot fields, drop silently
if (!empty($data['hp_company']) || !empty($data['website'])) {
  // Return fake success so bots don't adapt
  http_response_code(200);
  echo json_encode([
    "status" => "success",
    "message" => "Message sent successfully!"
  ]);
  exit;
}

// Sanitize inputs
$name = htmlspecialchars(trim($data['name'] ?? ''), ENT_QUOTES, 'UTF-8');
$email = trim($data['email'] ?? '');
$message = htmlspecialchars(trim($data['message'] ?? ''), ENT_QUOTES, 'UTF-8');

if (empty($name) || empty($email) || empty($message)) {
  http_response_code(400);
  echo json_encode([
    "status" => "error",
    "message" => "All fields are required."
  ]);
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode([
    "status" => "error",
    "message" => "Invalid email format."
  ]);
  exit;
}

// Record this successful request timestamp
$requests[] = $current_time;
@file_put_contents($rate_file, json_encode($requests));

// ============================================================
// HOSTINGER SMTP CONFIGURATION
// ============================================================
$smtp_host = "smtp.hostinger.com";
$smtp_port = 465;

$smtp_username = "info@zhmktg.com";
$smtp_passwords = [
  "Zhmtktg@123$",
  "Zhmktg@123$",
  "ZHm@123$"
];
//do not change the recipent mail:
$recipient_email = "zhmktg.in@gmail.com";

// ============================================================
// LOAD PHPMAILER
// ============================================================
require __DIR__ . "/PHPMailer/src/Exception.php";
require __DIR__ . "/PHPMailer/src/PHPMailer.php";
require __DIR__ . "/PHPMailer/src/SMTP.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$safe_name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$safe_email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$safe_message = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));

// ============================================================
// SIMPLE LIGHT EMAIL CONTENT
// ============================================================
$email_content = "
<!DOCTYPE html>
<html>
<body style='font-family: Arial, Helvetica, sans-serif; background-color: #f9fafb; color: #222222; padding: 30px; line-height: 1.6;'>

  <div style='max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e7eb; padding: 24px; border-radius: 8px;'>
    <h2 style='margin-top: 0; color: #111111;'>New Contact Form Submission</h2>

    <p><strong>Name:</strong> {$safe_name}</p>
    <p><strong>Email:</strong> {$safe_email}</p>
    <p><strong>Message:</strong><br>{$safe_message}</p>

    <hr style='border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;' />
    <p style='font-size: 12px; color: #666666; margin-bottom: 0;'>
      ZIH Marketing Consultancy &bull; info@zhmktg.com &bull; +91 91774 82247
    </p>
  </div>

</body>
</html>
";

// ============================================================
// SEND EMAIL VIA HOSTINGER SMTP
// ============================================================
$sent = false;
$last_error = "";

foreach ($smtp_passwords as $pass) {
  try {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = $smtp_host;
    $mail->SMTPAuth = true;
    $mail->Username = $smtp_username;
    $mail->Password = $pass;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = $smtp_port;
    $mail->CharSet = 'UTF-8';

    $mail->setFrom($smtp_username, "ZIH Marketing Consultancy");
    $mail->addAddress($recipient_email);
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = "New Contact Form Submission from " . $name;
    $mail->Body = $email_content;

    $mail->send();
    $sent = true;
    break;
  } catch (Exception $e) {
    $last_error = $mail->ErrorInfo ?: $e->getMessage();
  }
}

if (!$sent) {
  $headers  = "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/html; charset=UTF-8\r\n";
  $headers .= "From: ZIH Marketing Consultancy <info@zhmktg.com>\r\n";
  $headers .= "Reply-To: {$name} <{$email}>\r\n";

  if (@mail($recipient_email, "New Contact Form Submission from " . $name, $email_content, $headers)) {
    $sent = true;
  }
}

if ($sent) {
  http_response_code(200);
  echo json_encode([
    "status" => "success",
    "message" => "Message sent successfully."
  ]);
} else {
  http_response_code(500);
  echo json_encode([
    "status" => "error",
    "message" => "Failed to send message."
  ]);
}
