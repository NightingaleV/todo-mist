<?php 
if(!isset($_SESSION)){session_start();} 
if(!isset($db)){
  require(dirname(__FILE__)."/../db-connection.php");
}


if(isset($_GET['project'])){
  $response = '';
  $left_controls = file_get_contents(dirname(__FILE__)."/../../templates/app-controls/todo-left-controls.php",TRUE);
  $right_controls = file_get_contents(dirname(__FILE__)."/../../templates/app-controls/todo-right-controls.php",TRUE);
  
  $stmt = $db->prepare("SELECT tasks.task, tasks.task_position, tasks.priority FROM projects INNER JOIN tasks ON tasks.project_id=projects.id WHERE projects.user_id = ? AND projects.project LIKE ? ORDER BY tasks.task_position ASC;");
  $stmt->bind_param("is", $_SESSION['id'], $_GET['project']);
  $stmt->execute();
  $result = $stmt->get_result();
    
  while($rows = $result->fetch_assoc()){
    
    $response .= '<li class="todo-item priority-'.$rows['priority'].'" data-task-position="'.$rows['task_position'].'" data-task-priority="'.$rows['priority'].'">';
    $response .=  '<div class="todo-left-wrapper">';
    $response .=    $left_controls;
    $response .=    '<div class="todo-task">';
    $response .=    '<span class="todo-label">' . $rows[ 'task' ] . '</span>';
    $response .=    '</div>';
    $response .=  '</div>';
    $response .=    $right_controls;
    $response .=  '</li>';  
  }

  $stmt->close();
  
  echo $response;
}

?>