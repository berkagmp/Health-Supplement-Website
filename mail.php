<?php
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$msg = $_REQUEST['msg'];

try{
  $headers = 'From: '.$email. "\r\n";

  $msg = wordwrap($msg,70);

  // send email
  mail("support@keyora.co.nz", "ContactUs", $msg , "From:" . $email);
  echo "The mail has been sent successfully";
}catch(Exception $e) {
  echo 'Message: ' .$e->getMessage();
}
?>
