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
  <nav class="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
    <div class="container"> <a class="navbar-brand" href="#">TodoMist</a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto justify-content-center">
          <li class="nav-item active"> <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> </li>
          <li class="nav-item"> <a class="nav-link" href="#">Link</a> </li>
          <li class="nav-item"> <a class="nav-link disabled" href="#">Disabled</a> </li>
        </ul>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="form-inline my-2 my-lg-0"> <input class="form-control mr-sm-2" type="search" placeholder="Find..." aria-label="Search"> <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> </form>
      </div>
    </div>
  </nav>
  <div class="container">
    <div class="row">
      <aside class="sidebar d-none d-sm-block col-7 col-sm-3">
        <div class="top-filter">
          <ul class="top-filter-list">
            <li class="top-filter-item"><span class="top-filter-label">Inbox</span> </li>
            <li class="top-filter-item"><span class="top-filter-label">Today</span> </li>
            <li class="top-filter-item"><span class="top-filter-label">Next 7 days</span> </li>
          </ul>
        </div>
        <div class="projects">
          <ul class="projects-list">
            <li class="project-item"><span class="project-label">Programming</span> </li>
            <li class="project-item"><span class="project-label">School</span> </li>
            <li class="project-item"><span class="project-label">Work</span> </li>
            <li class="project-item"><span class="project-label">Relaxing</span> </li>
            <li class="project-item"><span class="project-label">Education</span> </li>
          </ul>
        </div>
      </aside>
      <main class="content col-12 col-sm-8">
        <div class="current-project">
          <h2 class="current-project-label">Inbox</h2>
          <div class="top-right-controls">
            <div class="project-edit-name">
              <i class="material-icons">edit</i>
            </div>
            <div class="todo-sort"><i class="material-icons">sort</i>
            </div>
          </div>
        </div>
        <div class="todo">
          <ul class="todo-list list-group list-group-flush">
            <li class="todo-item">
              <div class="todo-left">
                <div class="draggable-action invisible-space"> <i class="drag-icon material-icons">drag_indicator</i> </div>
                <div class="complete-action">
                  <button class="btn btn-complete"> 
                    <i class="material-icons complete-icon">panorama_fish_eye</i> 
                  </button>
                </div>
                <span class="todo-label">Destroy the ring</span>
              </div>
              <div class="todo-right">
                <div class="todo-controls">
                  <div class="btn-group" role="group">
                    <button class="btn btn-warning btn-priority dropdown-toggle " type="button" data-toggle="dropdown" aria-expanded="false"> <i class="material-icons priority-icon">whatshot</i> </button>
                    <div class="priority-dropdown dropdown-menu" aria-labelledby="btn-priority">
                      <a class="dropdown-item" href="#">
                        <i class="priority-dropdown-icon material-icons">whatshot</i>
                      <span>priority 2</span>     
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="priority-dropdown-icon material-icons">whatshot</i><span>priority 1</span>
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="priority-dropdown-icon material-icons">whatshot</i>
                        <span>priority 3</span>
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="priority-dropdown-icon material-icons">whatshot</i>
                        <span>priority 4</span>
                      </a>
                    </div>
                  </div>
                  <button class="btn btn-schedule"> <i class="material-icons schedule-icon">schedule</i> </button>
                  <button class="btn btn-delete"> <i class="material-icons delete-icon">delete</i> </button>
                </div>
              </div>
            </li>
            <li class="todo-item">
              <div class="todo-left">
                <div class="draggable-action invisible-space"> <i class="drag-icon material-icons">drag_indicator</i> </div>
                <div class="complete-action">
                  <button class="btn btn-complete"> 
                    <i class="material-icons complete-icon">panorama_fish_eye</i> 
                  </button>
                </div>
                <span class="todo-label">Defeat a Sauron</span>
              </div>
              <div class="todo-right">
                <div class="todo-controls">
                  <div class="btn-group" role="group">
                    <button class="btn btn-warning btn-priority dropdown-toggle " type="button" data-toggle="dropdown" aria-expanded="false"> <i class="material-icons priority-icon">whatshot</i> </button>
                    <div class="priority-dropdown dropdown-menu" aria-labelledby="btn-priority">
                      <a class="dropdown-item" href="#">
                        <i class="priority-dropdown-icon material-icons">whatshot</i>
                      <span>priority 2</span>     
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="priority-dropdown-icon material-icons">whatshot</i><span>priority 1</span>
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="priority-dropdown-icon material-icons">whatshot</i>
                        <span>priority 3</span>
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="priority-dropdown-icon material-icons">whatshot</i>
                        <span>priority 4</span>
                      </a>
                    </div>
                  </div>
                  <button class="btn btn-schedule"> <i class="material-icons schedule-icon">schedule</i> </button>
                  <button class="btn btn-delete"> <i class="material-icons delete-icon">delete</i> </button>
                </div>
              </div>
            </li>
            <li class="todo-item">
              <div class="todo-left">
                <div class="draggable-action invisible-space"> <i class="drag-icon material-icons">drag_indicator</i> </div>
                <div class="complete-action">
                  <button class="btn btn-complete"> 
                    <i class="material-icons complete-icon">panorama_fish_eye</i> 
                  </button>
                </div>
                <span class="todo-label">Write a book</span>
              </div>
              <div class="todo-right">
                <div class="todo-controls">
                  <div class="btn-group" role="group">
                    <button class="btn btn-warning btn-priority dropdown-toggle " type="button" data-toggle="dropdown" aria-expanded="false"> <i class="material-icons priority-icon">whatshot</i> </button>
                    <div class="priority-dropdown dropdown-menu" aria-labelledby="btn-priority">
                      <a class="dropdown-item" href="#">
                        <i class="priority-dropdown-icon material-icons">whatshot</i>
                      <span>priority 2</span>     
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="priority-dropdown-icon material-icons">whatshot</i><span>priority 1</span>
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="priority-dropdown-icon material-icons">whatshot</i>
                        <span>priority 3</span>
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="priority-dropdown-icon material-icons">whatshot</i>
                        <span>priority 4</span>
                      </a>
                    </div>
                  </div>
                  <button class="btn btn-schedule"> <i class="material-icons schedule-icon">schedule</i> </button>
                  <button class="btn btn-delete"> <i class="material-icons delete-icon">delete</i> </button>
                </div>
              </div>
            </li>
            <li class="todo-item">
              <div class="todo-left">
                <div class="draggable-action invisible-space"> <i class="drag-icon material-icons">drag_indicator</i> </div>
                <div class="complete-action">
                  <button class="btn btn-complete"> 
                    <i class="material-icons complete-icon">panorama_fish_eye</i> 
                  </button>
                </div>
                <span class="todo-label">Learn some magic tricks with spiky hat </span>
              </div>
              <div class="todo-right">
                <div class="todo-controls">
                  <div class="btn-group" role="group">
                    <button class="btn btn-warning btn-priority dropdown-toggle " type="button" data-toggle="dropdown" aria-expanded="false"> <i class="material-icons priority-icon">whatshot</i> </button>
                    <div class="priority-dropdown dropdown-menu" aria-labelledby="btn-priority">
                      <a class="dropdown-item" href="#">
                        <i class="priority-dropdown-icon material-icons">whatshot</i>
                      <span>priority 2</span>     
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="priority-dropdown-icon material-icons">whatshot</i><span>priority 1</span>
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="priority-dropdown-icon material-icons">whatshot</i>
                        <span>priority 3</span>
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="priority-dropdown-icon material-icons">whatshot</i>
                        <span>priority 4</span>
                      </a>
                    </div>
                  </div>
                  <button class="btn btn-schedule"> <i class="material-icons schedule-icon">schedule</i> </button>
                  <button class="btn btn-delete"> <i class="material-icons delete-icon">delete</i> </button>
                </div>
              </div>
            </li>
            <li class="todo-item">
              <div class="todo-left">
                <div class="draggable-action invisible-space"> <i class="drag-icon material-icons">drag_indicator</i> </div>
                <div class="complete-action">
                  <button class="btn btn-complete"> 
                    <i class="material-icons complete-icon">panorama_fish_eye</i> 
                  </button>
                </div>
                <p class="todo-label">Buy some Halflings' Leaf from local deal..ehm farmer</p>
              </div>
              <div class="todo-right">
                <div class="todo-controls">
                  <div class="btn-group" role="group">
                    <button class="btn btn-warning btn-priority dropdown-toggle " type="button" data-toggle="dropdown" aria-expanded="false"> <i class="material-icons priority-icon">whatshot</i> </button>
                    <div class="priority-dropdown dropdown-menu" aria-labelledby="btn-priority">
                      <a class="dropdown-item" href="#">
                        <i class="priority-dropdown-icon material-icons">whatshot</i>
                      <span>priority 2</span>     
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="priority-dropdown-icon material-icons">whatshot</i><span>priority 1</span>
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="priority-dropdown-icon material-icons">whatshot</i>
                        <span>priority 3</span>
                      </a>
                      <a class="dropdown-item" href="#">
                        <i class="priority-dropdown-icon material-icons">whatshot</i>
                        <span>priority 4</span>
                      </a>
                    </div>
                  </div>
                  <button class="btn btn-schedule"> <i class="material-icons schedule-icon">schedule</i> </button>
                  <button class="btn btn-delete"> <i class="material-icons delete-icon">delete</i> </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="add-bar"> <a href="" class="action-add-item">Add Task</a> </div>
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