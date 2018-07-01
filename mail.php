<?php
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$msg = $_REQUEST['msg'];
$message = "";

try{
  $headers = 'From: '.$email;
  $message = "Name: " . $name . "\r\n\r\n" .wordwrap($msg,70);

  // send email
  mail("support@keyora.co.nz", "ContactUs" , $message , "From:" . $email);
  echo "The mail has been sent successfully";
}catch(Exception $e) {
  echo 'Message: ' .$e->getMessage();
}
?>
