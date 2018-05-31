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
        <div class="current-project">
          <h2 class="current-project-label">Inbox</h2>
          <div class="top-right-controls">
            <div class="project-edit">
              <button class="btn project-edit-btn" type="button"><i class="project-edit-icon material-icons">edit</i></button>
            </div>
            <div class="todo-sort">
              <button class="btn todo-sort-button" type="button"><i class="todo-sort-icon material-icons">sort</i></button>
            </div>
          </div>
        </div>
        <div class="todo">
          <ul class="todo-list list-group list-group-flush">
            <?php include('templates/todo-list/todo-task.php') ?>
          </ul>
          <div class="add-bar"> <a href="" class="action-add-item">Add Task</a> </div>
        </div>
      </main>
    </div>
  </div>
</body>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script>
<script src="js/main.js"></script>
</html>