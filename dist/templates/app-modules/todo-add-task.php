<!--MODAL FOR adding the task-->
<div class="collapse multi-collapse" id="addTaskInline">
  <div class="card card-body">
    <form method="post" class="addTaskInline-form" autocomplete="off">
      <div class="addTaskInline-container input-group row">
        <div class="addTaskInline-btn-box col-1 input-group-prepend">
          <button class="addTaskInline-btn  btn btn-danger" type="submit">
            <i class="addTaskInline-icon material-icons">add</i>
          </button>
        </div>
        <input name="task" type="text" class="addTaskInline-input form-control col-8" placeholder="My new task is ..." aria-label="New task" aria-describedby="basic-addon2">
        <select name="priority" class="addTaskInline-priority form-control input-group-append col-3" data-show-content="true" id="prioritySelect">
          <option value="1">Priority 1</option>
          <option value="2">Priority 2</option>
          <option value="3">Priority 3</option>
          <option value="4" selected>Priority 4</option>
        </select>
        <input name="project" type="hidden" class="addTaskInline-project" name="currentproject" value="<?php echo $_GET['project'] ?>">
      </div>
    </form>
  </div>
</div>
<!-- Add task INLINE Button -->
<div class="action-add-bar">
  <a class="action-add-item" data-toggle="collapse" href="#addTaskInline" role="button" aria-expanded="false" aria-controls="addTaskInline"><i class="action-add-icon material-icons">add</i>Add task</a>
</div>