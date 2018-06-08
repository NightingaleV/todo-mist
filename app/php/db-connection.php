<?php

$host = 'localhost';
$username = 'root';
$password = '';
$db_name = 'todo_mist';
//error_reporting(0);

$db = new mysqli($host,$username,$password,$db_name);
if($db->connect_errno){
  exit('Database Connection Error:'.$db->connect_error);
}