<?php 
if(!isset($_SESSION)){session_start();}
if(!isset($db)){
  require(dirname(__FILE__)."/../db-connection.php");
}

if(isset($_SESSION['id'])){
  $response = '';
  
  //Import for future buttons
  $tag_controls = file_get_contents(dirname(__FILE__)."/../../templates/app-controls/tag-controls.php",TRUE);
  
  $stmt = $db->prepare("SELECT tag, user_id FROM tags WHERE user_id = ?");
  $stmt->bind_param("i", $_SESSION['id']);
  $stmt->execute();
  $result = $stmt->get_result();
  
  while($rows = $result->fetch_assoc()){ 
    $response .= '<li class="tag-item list-group-item">';
    $response .=  '#<span class="tag-label">'.$rows['tag'].'</span>';
    $response .= $tag_controls;
    $response .= '</li>';
  }
  $stmt->close();
  
  echo $response;
}

?>