<?php 
if(!isset($_SESSION)){session_start();}
if(!isset($db)){
  require(dirname(__FILE__)."/../db-connection.php");
}

if(isset($_POST)){
  
  $stmt = $db->prepare('INSERT INTO tasks (project_id, task, priority) VALUES ((SELECT id FROM projects WHERE project = ?),?,?);
');
  $stmt->bind_param("si", $_POST['project'], $_POST['task'], $_POST['priority']);
  $stmt->execute();
  $result = $stmt->get_result();
  $stmt->close();
  
};

print_r($_POST);

?>