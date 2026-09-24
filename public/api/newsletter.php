<?php

// ============================================================
// CORS
// ============================================================

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(200);
  exit;
}


// ============================================================
// ALLOW ONLY POST
// ============================================================

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
// SAVE SUBSCRIBER
// ============================================================

$file = __DIR__ . "/subscribers.txt";

if (!file_exists($file)) {
  file_put_contents($file, "");
}


// ============================================================
// CHECK DUPLICATE EMAIL
// ============================================================

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


// ============================================================
// ADD EMAIL TO FILE
// ============================================================

file_put_contents(
  $file,
  $email . PHP_EOL,
  FILE_APPEND | LOCK_EX
);


// ============================================================
// HOSTINGER SMTP CONFIGURATION
// ============================================================

// CHANGE THIS to your Hostinger email address
$smtp_username = "no-reply@zihconsultancy.com";

// CHANGE THIS to your Hostinger email password
$smtp_password = "YOUR_HOSTINGER_EMAIL_PASSWORD";

// Hostinger SMTP server
$smtp_host = "smtp.hostinger.com";

$smtp_port = 465;


// CHANGE THIS if you want notifications sent to another email
$admin_email = "hello@zihconsultancy.com";


// ============================================================
// PHPMailer
// ============================================================

require __DIR__ . "/PHPMailer/src/Exception.php";
require __DIR__ . "/PHPMailer/src/PHPMailer.php";
require __DIR__ . "/PHPMailer/src/SMTP.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


// ============================================================
// WELCOME EMAIL
// ============================================================

$message = "

<html>
<body>

<h2>Welcome to ZIH Consultancy</h2>

<p>Thank you for subscribing to our newsletter!</p>

<p>
We're thrilled to have you with us.
You'll now receive our latest insights,
strategies, and updates.
</p>

<p><strong>- The ZIH Team</strong></p>

</body>
</html>

";


// ============================================================
// SEND EMAIL
// ============================================================

try {

  $mail = new PHPMailer(true);

  $mail->isSMTP();
  $mail->Host = $smtp_host;
  $mail->SMTPAuth = true;
  $mail->Username = $smtp_username;
  $mail->Password = $smtp_password;
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
  $mail->Port = $smtp_port;

  // Send welcome email
  $mail->setFrom($smtp_username, "ZIH Consultancy");
  $mail->addAddress($email);
  $mail->isHTML(true);
  $mail->Subject = "Welcome to the ZIH Newsletter";
  $mail->Body = $message;

  $mail->send();


  // Send notification to admin
  $mail->clearAddresses();

  $mail->addAddress($admin_email);

  $mail->isHTML(false);

  $mail->Subject = "New Newsletter Subscriber";

  $mail->Body =
    "New newsletter subscriber:\n\n" .
    "Email: " . $email;

  $mail->send();


  // ========================================================
  // SUCCESS
  // ========================================================

  http_response_code(200);

  echo json_encode([
    "status" => "success",
    "message" => "Subscribed successfully."
  ]);
} catch (Exception $e) {

  // Subscription is already saved even if email fails
  http_response_code(200);

  echo json_encode([
    "status" => "success",
    "message" => "Subscribed successfully."
  ]);
}
