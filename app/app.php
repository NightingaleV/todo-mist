<?php session_start();
require("php/db-connection.php");
?>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="Your more responsible friend. Keep your self organized and get your job done with Todomist.">
  <meta name="keywords" content="todomist">
  <meta name='author' content='Vitezslav Slavik'>
  <link rel="author" href="https://plus.google.com/108919977341036009978"/>
  <link rel="canonical" href="http://todomist.com"/>
  <meta name='HandheldFriendly' content='True'>
  <title>Todomist - Todo App</title>
  <link href="https://fonts.googleapis.com/css?family=Raleway:200,400,600,700" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
  <link rel="stylesheet" href="css/main.css">
</head>

<body class="app">
  <?php include('templates/app-navbar.php') ?>
  <div class="container">
    <div class="row">
      <?php include('templates/app-sidebar.php') ?>
      <main class="content col-12 col-sm-8">
        <?php include('templates/app-project-title.php') ?>
        <div class="todo-wrapper">
          <ul class="todo-list list-group list-group-flush">
            <?php include('php/app-modules/render-tasks.php') ?>
          </ul>
          <div class="add-bar"> <a href="" class="action-add-item">Add Task</a> </div>
        </div>
      </main>
    </div>
  </div>
</body>
<?php include('templates/app-js-scripts.php') ?>
</html>