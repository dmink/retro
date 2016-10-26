<?php

$user_name = $_POST['feedback-name'];
$user_email = $_POST['feedback-email'];
$user_subject = $_POST['feedback-subject'];
$user_message = $_POST['feedback-message'];

$mail_to = "dminked@gmail.com";

$message = 'From: ' . $user_name . "<br>" .
            'E-mail: ' . $user_email . "<br>" .
            'Subject: ' . $user_subject . "<br><br>" .
            'Message: ' . "<br><br>" .
            $user_message;

$headers = 'Content-type: text/html; charset=utf=8' . "\r\n" .
    'From: feedback@dmink.link' . "\r\n" .
    'Reply-To:' . $user_email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

if ( mail($mail_to, $user_subject, $message, $headers) ) {
    echo "Message has been sent";
}

?>