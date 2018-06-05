<?php
if ( !isset( $_SESSION ) ) {
  session_start();
}
if ( !isset( $db ) ) {
  require( dirname( __FILE__ ) . "/../db-connection.php" );
}

$project = $_POST['project'];
print_r($project);
$positions = json_decode($_POST['positions'], true );
print_r($positions);
$user_id = $_SESSION['id'];

foreach ($positions as $key => $value) { 
  foreach ($value as $task => $position) { 
  echo $position;
  $stmt = $db->prepare( 'UPDATE tasks SET task_position = ? WHERE project_id = (SELECT id FROM projects WHERE projects.user_id = ? AND project LIKE ?) AND task LIKE ?' );
  $stmt->bind_param( "iiss",$position, $user_id, $project, $task);
  $stmt->execute();
  $error = $db->error;
  $result = $stmt->get_result();
  $stmt->close();
  }
}

?>