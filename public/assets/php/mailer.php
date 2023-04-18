<?php

$recipient = "You_Email@example.com"; // Note: Please replace this email with your recipient's email

$nameForm = $_POST['nameForm'];
$emailForm = $_POST['emailForm'];
$phoneForm = $_POST['phoneForm'];
$subjectForm = $_POST['subjectForm'];
$messageForm = $_POST['messageForm'];

$mailheader = "From:".$nameForm."<".$emailForm.">\r\n";


$htmlContent = "Full Name: ".$nameForm."\n\n";
$htmlContent .= "Email Address: ".$emailForm."\n\n";
$htmlContent .= "Phone Number: ".$phoneForm."\n\n";
$htmlContent .= "Subject: ".$subjectForm."\n\n";
$htmlContent .= "Message: ".$messageForm."\n\n\n\n\n\n";

$htmlContent .= "-------------------------------------------\n";
$htmlContent .= "Note: this email is sent from your website!";

// sleep(5000);
mail($recipient, $subjectForm, $htmlContent, $mailheader) or die("Error!");


echo'Email Sent';

?>