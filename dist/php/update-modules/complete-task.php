<?php

if (!isset($_SESSION)) {
    session_start();
}
if (!isset($db)) {
    require(dirname(__FILE__) . "/../db-connection.php");
}

$user_id = $_SESSION['id'];
print_r($_POST);
if (isset($_POST['task'])) {
    $tasks_project = $_POST['tasksProject'];
    $task = $_POST['task'];

    $stmt = $db->prepare(
        'UPDATE tasks SET completed = 1 WHERE task LIKE ? AND project_id = ?');
    $stmt->bind_param("si",
        $task,$tasks_project);
    $stmt->execute();
    $error = $db->error;
    $result = $stmt->get_result();
    $stmt->close();
    echo $error;
    echo 'row updated,';
}

