<?php

  $datas = json_decode(file_get_contents('php://input'));

  $content = ob_start();

    require_once './controllers/' . $datas->target . '.php';

  $content = ob_get_clean();

  echo json_encode([
    'title' => 'Mon ajax trop cool | ' . $datas->target,
    'content' => $content
  ]);


?>