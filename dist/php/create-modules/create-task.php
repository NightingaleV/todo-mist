<?php
if ( !isset( $_SESSION ) ) {
  session_start();
}
if ( !isset( $db ) ) {
  require( dirname( __FILE__ ) . "/../db-connection.php" );
}

if ( $_POST[ 'task' ] ) {

  $stmt = $db->prepare( 'INSERT INTO tasks (project_id, task, priority) VALUES ((SELECT id FROM projects WHERE project = ? AND user_id = ?),?,?);
' );
  $stmt->bind_param( "sisi", $_POST[ 'project' ], $_SESSION[ 'id' ], $_POST[ 'task' ], $_POST[ 'priority' ] );
  $stmt->execute();
  $error = $db->error;
  $result = $stmt->get_result();
  $stmt->close();

  if ( $error ) {
    echo 'duplicated_tasks';
  } 
  else {
    if ( isset( $_POST[ 'tags' ] ) && is_array( $_POST[ 'tags' ] ) ) {
      foreach ( $_POST as $post_variable ) {
        if ( is_array( $post_variable ) ) {
          foreach ( $post_variable as $array_item ) {
            $stmt = $db->prepare( 'INSERT INTO task_tags_bridge (task_id, tag_id) VALUES ((SELECT MAX(tasks.id) FROM projects INNER JOIN tasks ON tasks.project_id=projects.id WHERE projects.user_id = ? AND projects.project LIKE ? AND tasks.task LIKE ?),(SELECT id FROM tags WHERE tag = ? AND user_id = ?))
' );
            $stmt->bind_param( "isssi", $_SESSION[ 'id' ], $_POST[ 'project' ], $_POST[ 'task' ], $array_item, $_SESSION[ 'id' ] );
            $stmt->execute();
            $result = $stmt->get_result();
            $stmt->close();
          }
        }
      }
    }
    echo 'task_added';
  }



}

?>