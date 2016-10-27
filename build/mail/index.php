<?php

require "phpmailer/PHPMailerAutoload.php";

$mail = new PHPMailer;

//Tell PHPMailer to use SMTP
$mail->isSMTP();

//Set the hostname of the mail server
$mail->Host = 'smtp.gmail.com';

//Whether to use SMTP authentication
$mail->SMTPAuth = true;

//Username to use for SMTP authentication - use full email address for gmail
$mail->Username = "emptrium@gmail.com";

//Password to use for SMTP authentication
$mail->Password = "yourpassword";

?>