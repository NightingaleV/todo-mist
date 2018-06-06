<?php 
if(!isset($_SESSION)){session_start();} 
if(!isset($db)){
  require(dirname(__FILE__)."/../db-connection.php");
}

$user_id = $_SESSION['id'];

if(isset($_GET['project'])){
  
  $project = $_GET['project'];
  $response = '';
  $left_controls = file_get_contents(dirname(__FILE__)."/../../templates/app-controls/todo-left-controls.php",TRUE);
  $right_controls = file_get_contents(dirname(__FILE__)."/../../templates/app-controls/todo-right-controls.php",TRUE);
  
  $stmt = $db->prepare("SELECT tasks.task, tasks.project_id, tasks.task_position, tasks.priority FROM projects INNER JOIN tasks ON tasks.project_id=projects.id WHERE projects.user_id = ? AND projects.project LIKE ? ORDER BY tasks.task_position ASC;");
  $stmt->bind_param("is", $user_id, $project);
  $stmt->execute();
  $result = $stmt->get_result();
    
  while($rows = $result->fetch_assoc()){
    
    $response .= '<li class="todo-item priority-'.$rows['priority'].'" data-task-position="'.$rows['task_position'].'" data-task-priority="'.$rows['priority'].'" data-project="'.$rows['project_id'].'">';
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

if(isset($_GET['tag'])){
  
  $tag = $_GET['tag'];
  $response = '';
  $left_controls = file_get_contents(dirname(__FILE__)."/../../templates/app-controls/todo-left-controls.php",TRUE);
  $right_controls = file_get_contents(dirname(__FILE__)."/../../templates/app-controls/todo-right-controls.php",TRUE);
  
  $stmt = $db->prepare("SELECT tasks.task, tasks.project_id, tasks.task_position, tasks.priority FROM tasks 
  LEFT JOIN task_tags_bridge ON tasks.id=task_tags_bridge.task_id
  LEFT JOIN tags ON tags.id=task_tags_bridge.tag_id WHERE tags.user_id = ? AND tags.tag LIKE ? ORDER BY tasks.priority DESC;");
  $stmt->bind_param("is", $user_id, $tag);
  $stmt->execute();
  $result = $stmt->get_result();
    
  while($rows = $result->fetch_assoc()){
    
    $response .= '<li class="todo-item priority-'.$rows['priority'].'" data-task-position="'.$rows['task_position'].'" data-task-priority="'.$rows['priority'].'" data-project="'.$rows['project_id'].'">';
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