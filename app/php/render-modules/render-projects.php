<?php 
if(!isset($_SESSION)){session_start();}
if(!isset($db)){
  require(dirname(__FILE__)."/../db-connection.php");
}

if(isset($_SESSION['id'])){
  $response = '';
  
  //Import for project buttons
  $project_left_controls = file_get_contents(dirname(__FILE__)."/../../templates/app-controls/project-left-controls.php",TRUE);
  $project_right_controls = file_get_contents(dirname(__FILE__)."/../../templates/app-controls/project-right-controls.php",TRUE);
  
  
  $stmt = $db->prepare("SELECT projects.id, projects.project, projects.project_position FROM projects WHERE projects.user_id = ? AND NOT project = 'Inbox' ORDER BY project_position ASC");
  $stmt->bind_param("i", $_SESSION['id']);
  $stmt->execute();
  $result = $stmt->get_result();
  
  while($rows = $result->fetch_assoc()){ 
    $response .= '<li class="project-item list-group-item" data-project-position="'.$rows['project_position'].'" data-project-id="'.$rows['id'].'">';
    $response .= '<div class="project-left-wrapper">';
    $response .= $project_left_controls;
    $response .=  '<span class="project-label">'.$rows['project'].'</span></div>';
    $response .= $project_right_controls;
    $response .=    '</li>';
  }
  $stmt->close();
  
  echo $response;
}

?>