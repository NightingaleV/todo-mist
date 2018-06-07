<?php
if ( !isset( $_SESSION ) ) {
  session_start();
}
if ( !isset( $db ) ) {
  require( dirname( __FILE__ ) . "/../db-connection.php" );
}

if ($_POST[ 'tag' ] ) {

  $user_id = $_SESSION[ 'id' ];
  $tag_to_delete = $_POST[ 'tag' ];
  
  //Delete relations between tag and tasks
  $stmt = $db->prepare( 'DELETE FROM task_tags_bridge WHERE tag_id = (SELECT id FROM tags WHERE 
  user_id = ? AND 
  tag LIKE ?)' );
  $stmt->bind_param( "is", $user_id, $tag_to_delete);
  $stmt->execute();
  $result = $stmt->get_result();
  $stmt->close();
  echo 'ROWs in bridge Deleted';
  

  //Delete tag
  $stmt = $db->prepare( 'DELETE FROM tags WHERE user_id = ? AND tag LIKE ?');
  $stmt->bind_param( "is", $user_id, $tag_to_delete);
  $stmt->execute();
  $result = $stmt->get_result();
  $stmt->close();
  echo 'ROWs in tags Deleted';
}

?>