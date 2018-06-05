<?php
if ( !isset( $_SESSION ) ) {
  session_start();
}
if ( !isset( $db ) ) {
  require( dirname( __FILE__ ) . "/../db-connection.php" );
}

$positions = json_decode($_POST['positions'], true );
$user_id = $_SESSION['id'];

foreach ($positions as $key => $value) { 
  foreach ($value as $project => $position) { 
  $stmt = $db->prepare( 'UPDATE projects SET project_position = ? WHERE user_id = ? AND project LIKE ?' );
  $stmt->bind_param( "iis",$position, $user_id, $project);
  $stmt->execute();
  $error = $db->error;
  $result = $stmt->get_result();
  $stmt->close();
  echo 'row updated,';
  echo $error;
  }
}

?>