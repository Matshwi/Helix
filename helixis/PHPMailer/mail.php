<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


require 'vendor/autoload.php';

try{

$docname = $_GET['docname'];
$hosname = $_GET['hosname'];
$hosadd = $_GET['hosadd'];
$date = $_GET['date'];

$name = $_GET['name'];
$Umail = $_GET['mail'];

$mail = new PHPMailer(true);

$mail->SMTPDebug = 3;                               // Enable verbose debug output
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com;';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                              // Enable SMTP authentication
$mail->Username = 'helixinfo31@gmail.com';                 // SMTP username
$mail->Password = 'Dr72K!N3';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->setFrom('helixinfo31@gmail.com', 'Helix - Team');
$mail->addAddress($Umail, $name);     // Add a recipient
$mail->addReplyTo('helixinfo31@gmail.com', 'Helix - Team');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');

//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Appointment Set';
$mail->Body    = "Hi" .$name." 

I have you scheduled to meet with doctor " .$docname." at " . $hosname . " located at " . $hosadd . " on " . $date . " Please contact this number 011 234 5678 or info@helix.com if you have any questions before the meeting.

   your timely attendance to this appointment, will be very much Appreciated.

Sincerely,
Helix Team";
$mail->AltBody = 'if you are receiving this email please contact the helix team at 000 000 0000';
$mail->send();

echo "ok";
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
    