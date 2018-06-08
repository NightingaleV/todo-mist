<?php
require("php/db-connection.php");
require("php/user-modules/user-logged-in.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
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
  <div class="app-content container">
    <div class="row">
      <?php include('templates/app-sidebar.php') ?>
      <main class="content col-12 col-sm-8">
        <?php include('templates/app-modules/todo-title.php') ?>
        <div class="todo-wrapper">
          <ul class="todo-list list-group list-group-flush">
            <?php include('php/render-modules/render-tasks.php') ?>
          </ul>
          <?php include('templates/app-modules/todo-add-task.php') ?>
        </div>
        <?php include('templates/app-modules/modal-create-task.php') ?>
      </main>
    </div>
  </div>
</body>
<?php include('templates/app-js-scripts.php') ?>
</html>