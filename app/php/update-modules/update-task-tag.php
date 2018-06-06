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
$task = $_POST['task'];
$tag = $_POST['tag'];

$stmt = $db->prepare( 'INSERT INTO task_tags_bridge (task_id, tag_id) VALUES ((SELECT tasks.id FROM projects INNER JOIN tasks ON tasks.project_id=projects.id WHERE projects.user_id = ? AND projects.project LIKE ? AND tasks.task LIKE ?),(SELECT id FROM tags WHERE tag LIKE ? AND user_id = ?))' );
$stmt->bind_param( "isssi",$user_id,$current_project,$task,$tag,$user_id);
$stmt->execute();
$error = $db->error;
$result = $stmt->get_result();
$stmt->close();
echo $error;
echo 'row inserted,';

?>