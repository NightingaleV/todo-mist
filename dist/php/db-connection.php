<?php

$host = 'sql300.epizy.com';
$username = 'epiz_22208819';
$password = 'RAvbyx0iLWts';
$db_name = 'epiz_22208819_todo_mist';
//error_reporting(0);

$db = new mysqli($host,$username,$password,$db_name);
if($db->connect_errno){
  exit('Database Connection Error:'.$db->connect_error);
}
