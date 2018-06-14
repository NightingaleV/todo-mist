<div class="todo-title-wrapper">
  <h2 class="todo-title">
    <?php 
    if(isset($_GET['project'])){echo $_GET['project'];};
    if(isset($_GET['tag'])){echo $_GET['tag'];}
    if(isset($_GET['filter'])){echo $_GET['filter'];}
    ?>
  </h2>
  <div class="top-right-controls">
    <div class="todo-edit">
      <button class="btn btn-todo-edit" type="button"><i class="edit-icon material-icons">edit</i></button>
    </div>
    <div class="todo-sort">
      <button class="btn btn-todo-sort" type="button"><i class="sort-icon material-icons">sort</i></button>
    </div>
  </div>
</div>