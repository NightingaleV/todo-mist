<?php
if (!isset($_SESSION)) {
    session_start();
}
if (!isset($db)) {
    require(dirname(__FILE__) . "/../db-connection.php");
}

$user_id = $_SESSION['id'];

$left_controls = file_get_contents(dirname(__FILE__) . "/../../templates/app-controls/todo-left-controls.php", TRUE);
$left_disabled_controls = file_get_contents(dirname(__FILE__) . "/../../templates/app-controls/todo-left-disabled.php", TRUE);
$right_controls = file_get_contents(dirname(__FILE__) . "/../../templates/app-controls/todo-right-controls.php", TRUE);

if (isset($_GET['project'])) {

    $project = $_GET['project'];
    $response = '';
    $stmt = $db->prepare(
        "SELECT tasks.task, tasks.project_id, tasks.task_position, tasks.priority 
FROM projects INNER JOIN tasks ON tasks.project_id=projects.id 
WHERE projects.user_id = ? AND tasks.completed = 0 AND projects.project LIKE ? ORDER BY tasks.task_position ASC;");
    $stmt->bind_param("is", $user_id, $project);
    $stmt->execute();
    $result = $stmt->get_result();

    while ($rows = $result->fetch_assoc()) {

        $task = htmlentities($rows['task'], ENT_QUOTES, 'UTF-8');
        $priority = $rows['priority'];
        $task_position = $rows['task_position'];
        $project_id = $rows['project_id'];
        $response .= '<li class="todo-item priority-' . $priority . '" data-task-position="' . $task_position . '" data-task-priority="' . $priority . '" data-project="' . $project_id . '">';
        $response .= '<div class="todo-left-wrapper">';
        $response .= $left_controls;
        $response .= '<div class="todo-task">';
        $response .= '<span class="todo-label">' . $task . '</span>';
        $response .= '</div>';
        $response .= '</div>';
        $response .= $right_controls;
        $response .= '</li>';
    }

    $stmt->close();

    echo $response;
}

if (isset($_GET['tag'])) {

    $tag = $_GET['tag'];
    $response = '';

    $stmt = $db->prepare("SELECT tasks.task, tasks.project_id, tasks.task_position, tasks.priority FROM tasks 
  LEFT JOIN task_tags_bridge ON tasks.id=task_tags_bridge.task_id
  LEFT JOIN tags ON tags.id=task_tags_bridge.tag_id WHERE tags.user_id = ? AND tags.tag LIKE ? ORDER BY tasks.priority ASC;");
    $stmt->bind_param("is", $user_id, $tag);
    $stmt->execute();
    $result = $stmt->get_result();

    while ($rows = $result->fetch_assoc()) {
        $task = htmlentities($rows['task'], ENT_QUOTES, 'UTF-8');
        $priority = $rows['priority'];
        $task_position = $rows['task_position'];
        $project_id = $rows['project_id'];

        $response .= '<li class="todo-item priority-' . $priority . '" data-task-position="' . $task_position . '" data-task-priority="' . $priority . '" data-project="' . $project_id . '">';
        $response .= '<div class="todo-left-wrapper">';
        $response .= $left_controls;
        $response .= '<div class="todo-task">';
        $response .= '<span class="todo-label">' . $task . '</span>';
        $response .= '</div>';
        $response .= '</div>';
        $response .= $right_controls;
        $response .= '</li>';
    }

    $stmt->close();
    echo $response;
}
if (isset($_GET['filter'])) {

    $filter = $_GET['filter'];
    $response = '';
    if($filter == 'Completed'){
        $stmt = $db->prepare("SELECT tasks.task, tasks.project_id, tasks.task_position, tasks.priority FROM tasks INNER JOIN projects ON tasks.project_id = projects.id
    WHERE projects.user_id = ? AND tasks.completed = 1 ORDER BY tasks.priority ASC;");
        $stmt->bind_param("i", $user_id);
        $stmt->execute();
        $result = $stmt->get_result();

        while ($rows = $result->fetch_assoc()) {
            $task = htmlentities($rows['task'], ENT_QUOTES, 'UTF-8');
            $priority = $rows['priority'];
            $task_position = $rows['task_position'];
            $project_id = $rows['project_id'];

            $response .= '<li class="todo-item priority-' . $priority . '" data-task-position="' . $task_position . '" data-task-priority="' . $priority . '" data-project="' . $project_id . '">';
            $response .= '<div class="todo-left-wrapper">';
            $response .= $left_disabled_controls;
            $response .= '<div class="todo-task">';
            $response .= '<span class="todo-label">' . $task . '</span>';
            $response .= '</div>';
            $response .= '</div>';
            $response .= '</li>';
        }
        $stmt->close();
        echo $response;
    }
    if($filter == 'Important'){
        $stmt = $db->prepare("SELECT tasks.task, tasks.project_id, tasks.task_position, tasks.priority FROM tasks INNER JOIN projects ON tasks.project_id = projects.id
    WHERE projects.user_id = ? AND (tasks.priority = 1 OR tasks.priority = 2) AND tasks.completed = 0 ORDER BY tasks.priority ASC;");
        $stmt->bind_param("i", $user_id);
        $stmt->execute();
        $result = $stmt->get_result();

        while ($rows = $result->fetch_assoc()) {
            $task = htmlentities($rows['task'], ENT_QUOTES, 'UTF-8');
            $priority = $rows['priority'];
            $task_position = $rows['task_position'];
            $project_id = $rows['project_id'];

            $response .= '<li class="todo-item priority-' . $priority . '" data-task-position="' . $task_position . '" data-task-priority="' . $priority . '" data-project="' . $project_id . '">';
            $response .= '<div class="todo-left-wrapper">';
            $response .= $left_controls;
            $response .= '<div class="todo-task">';
            $response .= '<span class="todo-label">' . $task . '</span>';
            $response .= '</div>';
            $response .= '</div>';
            $response .= $right_controls;
            $response .= '</li>';
        }
        $stmt->close();
        echo $response;
    }




}
