<?php

if (!isset($db)) {
    require(dirname(__FILE__) . "/../db-connection.php");
}
if (!isset($_SESSION)) {
    session_start();
}

require_once 'google-config.php';

if(isset($_GET['code'])){
    $token = $gClient->fetchAccessTokenWithAuthCode($_GET['code']);
    $_SESSION['access_token'] = $token;
}
if (isset($_SESSION['access_token'])){
    $gClient->setAccessToken($_SESSION['access_token']);
} else {
    header('Location: login.php');
    exit();
}

$oAuth = new Google_Service_Oauth2($gClient);
$userData = $oAuth->userinfo_v2_me->get();

$user_id = $userData['id'];
$user_email = $userData['email'];
$user_name = explode('@', $user_email);

//$_SESSION['id'] = $userData['id'];
//$_SESSION['username'] = $userData['email'];

$stmt = $db->prepare("SELECT * FROM users WHERE email = ? AND password LIKE ? LIMIT 1");
$stmt->bind_param("ss",$user_email, $user_id);
$stmt->execute();
$result = $stmt->get_result();
$row = $result->fetch_assoc();
$num_of_rows = $result->num_rows;
$stmt->close();

$root = dirname($_SERVER['SERVER_NAME']);
if($num_of_rows < 1){
    $stmt = $db->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("ssi", $user_name[0],$user_email, $user_id);
    $stmt->execute();
    $user_database_id = $stmt->insert_id;
    $stmt->close();
    $db->query("INSERT INTO projects (project,user_id) VALUES ('Inbox',". $user_database_id.")");
    $_SESSION['id'] = $user_database_id;
    $_SESSION['username'] = $user_email;
    header("Location: ../../app.php?project=Inbox");
}else{
    $_SESSION['id'] = $row['id'];
    $_SESSION['username'] = $row['username'];
    header("Location: ../../app.php?project=Inbox");
}

print_r($userData['id']);
print_r($userData['email']);

//header('Location: index.php');