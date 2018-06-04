<?php
if ( !isset( $_SESSION ) ) {
  session_start();
}
if ( !isset( $db ) ) {
  require( dirname( __FILE__ ) . "/../db-connection.php" );
}

if ($_POST[ 'project' ] ) {

  $user_id = $_SESSION[ 'id' ];
  $project_to_delete = $_POST[ 'project' ];
  
  //Delete tags connection for tasks related to project
  $stmt = $db->prepare( 'DELETE FROM task_tags_bridge WHERE task_id = (SELECT tasks.id FROM projects INNER JOIN tasks ON tasks.project_id=projects.id WHERE 
  projects.user_id = ? AND 
  projects.project LIKE ?)' );
  $stmt->bind_param( "is", $user_id, $project_to_delete);
  $stmt->execute();
  $result = $stmt->get_result();
  $stmt->close();
  echo 'ROWs in bridge Deleted';
  
  //Delete tasks related to project
  $stmt = $db->prepare( 'DELETE FROM tasks WHERE project_id = (SELECT id FROM projects WHERE 
  user_id = ? AND 
  project LIKE ?)' );
  $stmt->bind_param( "is", $user_id, $project_to_delete);
  $stmt->execute();
  $result = $stmt->get_result();
  $stmt->close();
  echo 'ROWs in tasks Deleted';
  

  //Delete project
  $stmt = $db->prepare( 'DELETE FROM projects WHERE user_id = ? AND project LIKE ?');
  $stmt->bind_param( "is", $user_id, $project_to_delete);
  $stmt->execute();
  $result = $stmt->get_result();
  $stmt->close();
  echo 'ROWs in tasks Deleted';
}


?>