<nav class="app-navbar navbar sticky-top navbar-expand-md navbar-dark">
  <div class="container nav-container">
  <div class="col-4">
    <a class="navbar-brand" href="#">TodoMist</a>
  </div>
  <div class="nav-buttons col-8 d-flex">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> 
      <span class="navbar-toggler-icon"></span> 
    </button>

      <div class="add-bar">
        <button type="button" class="btn btn-add-task btn-danger" data-toggle="modal" data-target="#addTask"><i class="add-bar-icon material-icons">add</i>Add new task</button>
      </div>
      <div class="logout-bar">
        <a href="../php/user-modules/user-logout.php?logout=1" class="btn btn-logout">Logout</a>
      </div>
  </div>
  </div>
</nav>