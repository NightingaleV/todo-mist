<?php
if(!isset($_SESSION)){session_start();} 
if(!isset($db)){require(dirname(__FILE__)."/../db-connection.php");}

if(isset($_POST['currentProject'])){
    $user_id = $_SESSION['id'];
    $current_project = $_POST['currentProject'];
    $task = $_POST['task'];
    $priority = $_POST['priority'];

    $stmt = $db->prepare( 'UPDATE tasks 
SET priority = ? WHERE task LIKE ? AND project_id = ?' );
    $stmt->bind_param( "isi",
        $priority,
        $task,
        $current_project);
    $stmt->execute();
    $error = $db->error;
    $result = $stmt->get_result();
    $stmt->close();
    echo 'row updated,';
}
