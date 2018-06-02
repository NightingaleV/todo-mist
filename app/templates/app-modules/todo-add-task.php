<!-- Add task INLINE Button -->
<div class="action-add-bar">
  <a class="action-add-item" data-toggle="collapse" href="#addTaskInline" role="button" aria-expanded="false" aria-controls="addTaskInline"><i class="material-icons">add</i>Add task</a>
</div>

<div class="collapse multi-collapse" id="addTaskInline">
  <div class="card card-body">
    <form class="addTaskInline-form">
      <div class="addTaskInline-container input-group row">
        <div class="addTaskInline-btn-box col-1 input-group-prepend">
          <button class="addTaskInline-btn  btn btn-danger" type="button">
            <i class="material-icons">add</i>
          </button>
        </div>
        <input type="text" class="addTaskInline-input form-control col-8" placeholder="..." aria-label="New task" aria-describedby="basic-addon2">
        <select class="addTaskInline-priority form-control input-group-append col-3" data-show-content="true" id="prioritySelect">
          <option value="1">Priority 1</option>
          <option value="2">Priority 2</option>
          <option value="3">Priority 3</option>
          <option value="4" selected>Priority 4</option>
        </select>
        <input type="hidden" class="addTaskInline-priority" name="priority" value="4">
        <input type="hidden" class="addTaskInline-project" name="currentproject" value="<?php echo $_GET['project'] ?>">
      </div>
    </form>
  </div>
</div>