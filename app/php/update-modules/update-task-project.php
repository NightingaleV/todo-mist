<?php
if ( !isset( $_SESSION ) ) {
  session_start();
}
if ( !isset( $db ) ) {
  require( dirname( __FILE__ ) . "/../db-connection.php" );
}

print_r($_POST);

$user_id = $_SESSION['id'];
$task = $_POST['task'];

if(isset($_POST['currentProject'])){
  
  $current_project = $_POST['currentProject'];
  $new_project = $_POST['project'];
  $stmt = $db->prepare( 'UPDATE tasks 
SET project_id = ? WHERE task LIKE ? AND project_id = ?' );
  $stmt->bind_param( "isi",$new_project, $task, $current_project);
  $stmt->execute();
  $error = $db->error;
  $result = $stmt->get_result();
  $stmt->close();
  echo $error;
  echo 'Filter-project:row  updated,';
}
if(isset($_POST['currentTag'])){
  echo 'block of tag executed,';
  $current_tag = $_POST['currentTag'];
  $stmt = $db->prepare( 'UPDATE tasks 
  SET project_id = (SELECT id FROM projects WHERE user_id = ? AND project LIKE ?) WHERE task LIKE ? AND id IN (SELECT task_id FROM task_tags_bridge LEFT JOIN tags ON task_tags_bridge.tag_id=tags.id WHERE tags.user_id = ? AND tags.tag LIKE ?)' );
  $stmt->bind_param( "issis",
                    $user_id, 
                    $project, 
                    $task,
                    $user_id,
                    $current_tag);
  $stmt->execute();
  $error = $db->error;
  $result = $stmt->get_result();
  $stmt->close();
  echo $error;
  echo 'Filter-tag:row tag updated,';
}
