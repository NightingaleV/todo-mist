<div class="todo-title-wrapper">
  <h2 class="todo-title"><?php if(isset($_GET['project'])){echo $_GET['project'];}?></h2>
  <div class="top-right-controls">
    <div class="todo-edit">
      <button class="btn todo-edit-btn" type="button"><i class="project-edit-icon material-icons">edit</i></button>
    </div>
    <div class="todo-sort">
      <button class="btn todo-sort-button" type="button"><i class="todo-sort-icon material-icons">sort</i></button>
    </div>
  </div>
</div>