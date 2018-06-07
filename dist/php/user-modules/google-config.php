<?php

require_once(dirname(__FILE__)."/../../google_php_api/vendor/autoload.php");

// Fill CLIENT ID, CLIENT SECRET ID, REDIRECT URI from Google Developer Console
$client_id = '617469180697-gd02c4il2ir2sbkh3e6q2r7jvjckithr.apps.googleusercontent.com';
$client_secret = '89npY4dWz8XYlbLFOD3rvcFK';
$redirect_uri = 'http://localhost:81/php/user-modules/google-callback.php';
$simple_api_key = '<Your-API-Key>';

$gClient = new Google_Client();
$gClient->setClientId($client_id);
$gClient->setClientSecret($client_secret);
$gClient->setApplicationName("TodoMist");
$gClient->setRedirectUri($redirect_uri);
$gClient->addScope("https://www.googleapis.com/auth/userinfo.email");

//https://www.googleapis.com/auth/plus.login

?>
