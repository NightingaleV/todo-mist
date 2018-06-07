<?php
if ( !isset( $_SESSION ) ) {
  session_start();
}
if ( !isset( $db ) ) {
  require( dirname( __FILE__ ) . "/../db-connection.php" );
}

if($_POST['tag']){
  
  $tag = $_POST[ 'tag' ]; 
  $user_id = $_SESSION[ 'id' ];
  
  $stmt = $db->prepare( 'INSERT INTO tags (user_id, tag) VALUES (?,?);' );
  $stmt->bind_param( "is",$user_id,$tag);
  $stmt->execute();
  $error = $db->error;
  $result = $stmt->get_result();
  $stmt->close();
  
  if ( $error ) {
    echo 'duplicated_tag';
  }
  else{
    echo 'tag_added';
  }
}

?>