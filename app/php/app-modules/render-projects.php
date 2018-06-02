<?php 
if(!isset($_SESSION)){session_start();}
if(!isset($db)){
  require(dirname(__FILE__)."/../db-connection.php");
}

if(isset($_SESSION['id'])){
  $response = '';
  
  //Import for future buttons
  $left_controls = file_get_contents(dirname(__FILE__)."/../../templates/task-controls/todo-left-controls.php",TRUE);
  $right_controls = file_get_contents(dirname(__FILE__)."/../../templates/task-controls/todo-right-controls.php",TRUE);
  
  $stmt = $db->prepare("SELECT projects.project, projects.project_position FROM projects WHERE projects.user_id = ? AND NOT project = 'Inbox'");
  $stmt->bind_param("i", $_SESSION['id']);
  $stmt->execute();
  $result = $stmt->get_result();
  
  while($rows = $result->fetch_assoc()){ 
    $response .= '<li class="project-item list-group-item" data-project-position="'.$rows['project_position'].'">';
    $response .=  '<span class="project-label">'.$rows['project'].'</span>';
    $response .=    '</li>';
  }
  echo $response;
}

?>