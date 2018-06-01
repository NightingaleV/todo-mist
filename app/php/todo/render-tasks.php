<?php 
if(!isset($_SESSION)){session_start();} 

require(dirname(__FILE__)."/../db-connection.php");


if(isset($_GET['project'])){
  $response = '';
  $left_controls = file_get_contents(dirname(__FILE__)."/../../templates/task-controls/todo-left-controls.php",TRUE);
  $right_controls = file_get_contents(dirname(__FILE__)."/../../templates/task-controls/todo-right-controls.php",TRUE);
  
  $result = $db->query("SELECT projects.project, tasks.task, tasks.position, tasks.priority FROM projects INNER JOIN tasks ON tasks.project_id=projects.id WHERE projects.user_id = '".$_SESSION['id']."' AND projects.project LIKE '".$_GET['project']."'");
  
  while($rows = $result->fetch_assoc()){
    
    $response .= '<li class="todo-item">';
    $response .=  '<div class="todo-left-wrapper">';
    $response .=    $left_controls;
    $response .=    '<div class="todo-task">';
    $response .=    '<span class="todo-label">' . $rows[ 'task' ] . '</span>';
    $response .=    '</div>';
    $response .=  '</div>';
    $response .=    $right_controls;
    $response .=  '</li>';  
  }
  echo $response;
}

?>