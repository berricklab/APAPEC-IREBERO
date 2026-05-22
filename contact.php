<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = "school@example.com";
$subject = "School Contact Form";

$body = "Name: $name\n";
$body .= "Email: $email\n\n";
$body .= "Message:\n$message";

mail($to,$subject,$body);

echo "Message sent successfully";

?>
