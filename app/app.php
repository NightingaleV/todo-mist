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

  <!--Custom Metas-->
  <meta name='HandheldFriendly' content='True'>
  <title>Todomist - Todo App</title>

  <!--Bootstrap CSS-->
  <link href="https://fonts.googleapis.com/css?family=Raleway:200,400,600,700" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
  <link rel="stylesheet" href="css/main.css">
</head>

<body>
  <nav class="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">TodoMist</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto justify-content-center">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Find..." aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  <div class="container">
    <div class="row">
      <aside class="sidebar col-7 col-sm-4">
        <div>
          <ul class="top-filter-list">
            <li class="top-filter-item"><span class="top-filter-label">Inbox</span></li>
            <li class="top-filter-item"><span class="top-filter-label">Today</span></li>
            <li class="top-filter-item"><span class="top-filter-label">Next 7 days</span></li>
          </ul>
        </div>
        <ul class="projects-list">
          <li class="project-item"><span class="project-label">Inbox</span>
          </li>
          <li class="project-item"><span class="project-label">Programming</span>
          </li>
          <li class="project-item"><span class="project-label">School</span>
          </li>
          <li class="project-item"><span class="project-label">Work</span>
          </li>
          <li class="project-item"><span class="project-label">Relaxing</span>
          </li>
          <li class="project-item"><span class="project-label">Education</span>
          </li>
        </ul>
      </aside>
      <main class="content col-12 col-sm-8">
        <div class="current-project">
          <h2 class="current-project-label">Inbox</h2>
          <div class="top-right-controls"></div>
        </div>
        <div class="todo">
          <ul class="todo-list">
          <li class="todo-item"><span class="todo-label">Return the book</span>
          </li>
          <li class="todo-item"><span class="todo-label">Buy a Led strips</span>
          </li>
          <li class="todo-item"><span class="todo-label">Write an email to boss</span>
          </li>
          <li class="todo-item"><span class="todo-label"></span>Call a dad</li>
          <li class="todo-item"><span class="todo-label"></span>Check the ETH price</li>
        </ul>
        </div>
        <div class="add-bar">
          <a href="" class="action-add-item">Add Task</a>
        </div>
      </main>
    </div>
  </div>
</body>
<!--Bootstrap JS-->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
<!-- Place this tag in your head or just before your close body tag. -->
<script async defer src="https://buttons.github.io/buttons.js"></script>
<script src="js/main.js"></script>
</html>