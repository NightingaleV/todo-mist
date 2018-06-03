<?php

if ( !isset( $_SESSION ) ) {
  session_start();
}
if ( !isset( $db ) ) {
  require( dirname( __FILE__ ) . "/../db-connection.php" );
}

if ( $_POST[ 'task' ] && $_POST[ 'project' ] ) {

  $user_id = $_SESSION[ 'id' ];
  $project_active = $_POST[ 'project' ];
  $task_name = $_POST[ 'task' ];
  
  //Delete tasks+tags from bridge table
  $stmt = $db->prepare( 'DELETE FROM task_tags_bridge WHERE task_id = (SELECT tasks.id FROM projects INNER JOIN tasks ON tasks.project_id=projects.id WHERE 
  projects.user_id = ? AND 
  projects.project LIKE ? AND 
  tasks.task LIKE ?)' );
  $stmt->bind_param( "iss", $user_id, $project_active , $task_name);
  $stmt->execute();
  $result = $stmt->get_result();
  $stmt->close();
  echo 'ROW in bridge Deleted';

  //Delete task from database
  $stmt = $db->prepare('DELETE FROM tasks WHERE task LIKE ?
AND project_id = (SELECT id FROM projects
WHERE projects.user_id = ? AND 
      projects.project LIKE ?);
' );
  $stmt->bind_param( "sis", $task_name, $user_id, $project_active);
  $stmt->execute();
  $result = $stmt->get_result();
  $stmt->close();
  echo 'ROW in tasks Deleted';
}


?>