<?php
/**
 * Created by PhpStorm.
 * User: vitez
 * Date: 06/06/2018
 * Time: 23:40
 */
if (!isset($_SESSION)) {
    session_start();
}
if (!isset($db)) {
    require(dirname(__FILE__) . "/../db-connection.php");
}
session_start();
session_unset();
session_destroy();

if (isset($_COOKIE['id'])) {
    unset($_COOKIE['id']);
    unset($_COOKIE['username']);
    setcookie('id', null, -1, '/');
    setcookie('username', null, -1, '/');
} else {

}
setcookie ("id", "", time() - 3600);

print_r($_COOKIE['id'] != '');
print_r($_COOKIE['id']);
print_r($_COOKIE);
print_r($_SESSION);
header( 'Location: ../../index.php' );
