<?php

require "phpmailer/PHPMailerAutoload.php";

$mail = new PHPMailer;

//$mail->SMTPDebug = 2;
//$mail->Debugoutput = 'html';

$mail->isSMTP();
$mail->Host = 'mail.ukraine.com.ua';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->SMTPAuth = true;
$mail->Username = "mail@dmink.link";
$mail->Password = "Vxl69Mv2TlA9";

$mail->setFrom('mail@dmink.link', 'Dmink Link');
$mail->addAddress('emptrium@gmail.com', 'Dmitry Kostrubiak');

$mail->Subject = 'dmink.link - feedback form';

//$mail->msgHTML(file_get_contents('letter.html'), dirname(__FILE__));
$mail->isHTML(true);
$mail->Body = '<p>This is the first message from PHPMailer...</p><p>Yaahoooo!!1</p>';
$mail->AltBody = 'This is the alternative message from PHPMailer...';

if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message has been sent successfully. Thank you!";
}

?>