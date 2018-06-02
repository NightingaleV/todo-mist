<nav class="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#">TodoMist</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> 
      <span class="navbar-toggler-icon"></span> 
    </button>
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto justify-content-center">
        <li class="nav-item active"> <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> </li>
        <li class="nav-item"> <a class="nav-link" href="#">Link</a> </li>
        <li class="nav-item"> <a class="nav-link disabled" href="#">Disabled</a> </li>
      </ul>
    </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">      
      <!-- Add task MODAL Button -->
      <div class="add-bar">
        <button type="button" class="btn btn-add-task btn-outline-success" data-toggle="modal" data-target="#addTask">
          <i class="add-bar-icon material-icons">add</i>Add new task
        </button>
      </div>
    </div>
  </div>
</nav>