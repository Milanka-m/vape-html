<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;

  require 'phpmailer/src/Exception.php';
  require 'phpmailer/src/PHPMailer.php';

  $mail = new PHPMailer(true);
  $mail->CharSet = 'UTF-8';
  $mail->setLanguage('ru', 'phpmailer/language/');
  $mail->IsHTML(true);

  // От кого
  $mail->setFrom('mail@yandex.ru', 'VapeSkillfond');
  // Кому
  $mail->addAddress('dev@skillfond.ru');
  // Тема
  $mail->Subject = 'Сообщение от посетителя VapeSkillfond';

  $body.= '<p>Имя: '.$_POST['name'].'</p>';
  $body.= '<p>Почта: '.$_POST['email'].'</p>';
  $body.= '<p>Сообщение: '.$_POST['message'].'</p>';

  $mail->Body = $body;

  if (!$mail->send()) {
    $message = 'Ошибка';
  } else {
    $message = 'Данные отправлены';
  }

  $response = ['message' => $message];

  header('Content-Type: application/json');
  echo json_encode($response);
  // echo json_encode('message');
?>