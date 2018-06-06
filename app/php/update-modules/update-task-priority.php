<?php
if(!isset($_SESSION)){session_start();} 
if(!isset($db)){require(dirname(__FILE__)."/../db-connection.php");}

$user_id = $_SESSION['id'];

if(isset($_POST['currentProject'])){
  $current_project = $_POST['currentProject'];
  $task = $_POST['task'];
  $priority = $_POST['priority'];
 
  $stmt = $db->prepare( 'UPDATE tasks 
  SET priority = ? WHERE task LIKE ? AND project_id = (SELECT id FROM projects WHERE user_id = ? AND project LIKE ?)' );
  $stmt->bind_param( "isiis",
                    $priority,
                    $task,
                    $user_id, 
                    $current_project);
  $stmt->execute();
  $error = $db->error;
  $result = $stmt->get_result();
  $stmt->close();
  echo 'row updated,';
}
if(isset($_POST['currentTag'])){
  $current_tag = $_POST['currentTag'];
  $task = $_POST['task'];
  $priority = $_POST['priority'];
  $tasks_project = $_POST['tasksProject'];
 
  $stmt = $db->prepare( 'UPDATE tasks 
  SET priority = ? WHERE task LIKE ? AND project_id = ? AND id IN (SELECT task_id FROM task_tags_bridge LEFT JOIN tags ON task_tags_bridge.tag_id=tags.id WHERE tags.user_id = ? AND tags.tag LIKE ?)' );
  $stmt->bind_param( "isiis",
                    $priority,
                    $task,
                    $tasks_project,
                    $user_id, 
                    $current_tag);
  $stmt->execute();
  $error = $db->error;
  $result = $stmt->get_result();
  $stmt->close();
  echo 'row updated,';
}

?>

