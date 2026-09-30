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
// GET EMAIL FROM REQUEST
// ============================================================
$data = json_decode(file_get_contents("php://input"), true);
$email = strtolower(trim($data['email'] ?? ''));

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode([
    "status" => "error",
    "message" => "Valid email is required."
  ]);
  exit;
}

// ============================================================
// SAVE SUBSCRIBER & CHECK DUPLICATES
// ============================================================
$file = __DIR__ . "/subscribers.txt";

if (!file_exists($file)) {
  file_put_contents($file, "");
}

$subscribers = file(
  $file,
  FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES
);

foreach ($subscribers as $subscriber) {
  if (strtolower(trim($subscriber)) === $email) {
    http_response_code(400);
    echo json_encode([
      "status" => "error",
      "message" => "Email already subscribed."
    ]);
    exit;
  }
}

file_put_contents(
  $file,
  $email . PHP_EOL,
  FILE_APPEND | LOCK_EX
);

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

$admin_email = "info@zhmktg.com";

// ============================================================
// LOAD PHPMAILER
// ============================================================
require __DIR__ . "/PHPMailer/src/Exception.php";
require __DIR__ . "/PHPMailer/src/PHPMailer.php";
require __DIR__ . "/PHPMailer/src/SMTP.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$safe_email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');

// ============================================================
// SIMPLE LIGHT EMAIL TEMPLATES
// ============================================================
$welcome_email_body = "
<!DOCTYPE html>
<html>
<body style='font-family: Arial, Helvetica, sans-serif; background-color: #f9fafb; color: #222222; padding: 30px; line-height: 1.6;'>

  <div style='max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e7eb; padding: 24px; border-radius: 8px;'>
    <h2 style='margin-top: 0; color: #111111;'>Welcome to ZIH Marketing Consultancy</h2>

    <p>Thank you for subscribing to our market insights!</p>
    <p><strong>Subscribed Email:</strong> {$safe_email}</p>
    <p>You will now receive our latest marketing insights, strategies, and updates.</p>

    <hr style='border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;' />
    <p style='font-size: 12px; color: #666666; margin-bottom: 0;'>
      ZIH Marketing Consultancy &bull; info@zhmktg.com &bull; +91 91774 82247
    </p>
  </div>

</body>
</html>
";

$admin_email_body = "
<!DOCTYPE html>
<html>
<body style='font-family: Arial, Helvetica, sans-serif; background-color: #f9fafb; color: #222222; padding: 30px; line-height: 1.6;'>

  <div style='max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e7eb; padding: 24px; border-radius: 8px;'>
    <h2 style='margin-top: 0; color: #111111;'>New Market Insights Subscriber</h2>

    <p><strong>Email:</strong> {$safe_email}</p>

    <hr style='border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;' />
    <p style='font-size: 12px; color: #666666; margin-bottom: 0;'>
      ZIH Marketing Consultancy &bull; info@zhmktg.com
    </p>
  </div>

</body>
</html>
";

// ============================================================
// SEND EMAILS VIA HOSTINGER SMTP
// ============================================================
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

    // 1. Send welcome email to subscriber
    $mail->setFrom($smtp_username, "ZIH Marketing Consultancy");
    $mail->addAddress($email);
    $mail->isHTML(true);
    $mail->Subject = "Welcome to ZIH Market Insights";
    $mail->Body = $welcome_email_body;
    $mail->send();

    // 2. Send notification to admin (info@zhmktg.com)
    $mail->clearAddresses();
    $mail->addAddress($admin_email);
    $mail->Subject = "New Market Insights Subscriber";
    $mail->Body = $admin_email_body;
    $mail->send();

    break;
  } catch (Exception $e) {
    // Continue fallback if needed
  }
}

http_response_code(200);
echo json_encode([
  "status" => "success",
  "message" => "Subscribed successfully!"
]);
