<?php
 $to = "iletisim@nokta.vip";
 $subject = $_POST['subject'];
 $body = "From, ".$_POST['name']."\n\n"."Email, ".$_POST['email']."\n\n".$_POST['message'];
 if (mail($to, $subject, $body)) {
  $responseArray = array('class' => 'alert alert-success', 'message' => 'Mesaj başarıyla gönderildi.Yakında size geri döneceğiz!');
  } else {
$responseArray = array('class' => 'alert alert-danger', 'message' => 'Form gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.');
     
  }

    $encoded = json_encode($responseArray);

    header('Content-Type: application/json');

    echo $encoded;

 ?>