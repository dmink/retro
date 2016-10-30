<?php

require "phpmailer/PHPMailerAutoload.php";
$mail = new PHPMailer;

$user_name = $_POST['feedbackName'];
$user_email = $_POST['feedbackEmail'];
$user_message = $_POST['feedbackMessage'];

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
$mail->addReplyTo($user_email, '');

$mail->Subject = 'Feedback form - new message';

$mail->isHTML(true);
$mail->Body = '<p>' . '<strong>' . 'From: ' . '</strong>' . $user_name . '<br>' .
            '<strong>' . 'E-mail: ' . '</strong>' . $user_email . '</p>' .
            '<p>' . '<strong>' . 'Message: ' . '</strong>' . '</p>' .
            '<p>' . $user_message . '</p>';

$mail->AltBody = 'From: ' . $user_name  . ' ' .
                'E-mail: ' . $user_email . ' ' .
                'Message: ' . ' ' .
                $user_message;

if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message has been sent successfully. Thank you.";
}

?>