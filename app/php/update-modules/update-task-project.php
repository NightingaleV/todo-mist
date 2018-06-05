<?php
if ( !isset( $_SESSION ) ) {
  session_start();
}
if ( !isset( $db ) ) {
  require( dirname( __FILE__ ) . "/../db-connection.php" );
}

print_r($_POST);

$user_id = $_SESSION['id'];
$current_project = $_POST['currentProject'];
$project = $_POST['project'];
$task = $_POST['task'];

$stmt = $db->prepare( 'UPDATE tasks 
SET project_id = (SELECT id FROM projects WHERE user_id = ? AND project LIKE ?) WHERE task LIKE ? AND project_id = (SELECT id FROM projects WHERE user_id = ? AND project LIKE ?)' );
$stmt->bind_param( "issis",
                  $user_id, 
                  $project, 
                  $task,
                  $user_id,
                  $current_project);
$stmt->execute();
$error = $db->error;
$result = $stmt->get_result();
$stmt->close();
echo 'row updated,';

?>