<?php 
if(!isset($_SESSION)){session_start();}
if(!isset($db)){
  require(dirname(__FILE__)."/../db-connection.php");
}

if(isset($_SESSION['id'])){
  $response = '';
  
  //Import for future buttons
  $left_controls = file_get_contents(dirname(__FILE__)."/../../templates/app-controls/todo-left-controls.php",TRUE);
  $right_controls = file_get_contents(dirname(__FILE__)."/../../templates/app-controls/todo-right-controls.php",TRUE);
  
  $stmt = $db->prepare("SELECT tag, user_id FROM tags WHERE user_id = ?");
  $stmt->bind_param("i", $_SESSION['id']);
  $stmt->execute();
  $result = $stmt->get_result();
  
  while($rows = $result->fetch_assoc()){ 
    $response .= '<li class="tag-item list-group-item">';
    $response .=  '#<span class="tag-label">'.$rows['tag'].'</span>';
    $response .= '</li>';
  }
  $stmt->close();
  
  echo $response;
}

?>