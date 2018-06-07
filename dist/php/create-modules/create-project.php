<?php
if ( !isset( $_SESSION ) ) {
  session_start();
}
if ( !isset( $db ) ) {
  require( dirname( __FILE__ ) . "/../db-connection.php" );
}

if($_POST['project']){
  
  $project = $_POST[ 'project' ]; 
  $user_id = $_SESSION[ 'id' ];
  
  $stmt = $db->prepare( 'INSERT INTO projects (user_id, project) VALUES (?,?);' );
  $stmt->bind_param( "is",$user_id,$project);
  $stmt->execute();
  $error = $db->error;
  $result = $stmt->get_result();
  $stmt->close();
  
  if ( $error ) {
    echo 'duplicated_project';
  }
  else{
    echo 'project_added';
  }
}

?>