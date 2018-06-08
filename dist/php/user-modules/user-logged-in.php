<?php

session_start();
//Login through cookies
if (array_key_exists('id', $_COOKIE) && $_COOKIE['id'] != '') {
    $_SESSION['id'] = $_COOKIE['id'];
    $_SESSION['username'] = $_COOKIE['username'];
}
//User logout
if (array_key_exists('logout', $_GET)) {
    unset($_SESSION);
    setcookie('id', '', time() - 60 * 60);
    setcookie('username', '', time() - 60 * 60);
    header("Location: ../index.php");
}
//If not logged -> redirect
if(!isset($_SESSION['id'])){
    header("Location: ../index.php");
}