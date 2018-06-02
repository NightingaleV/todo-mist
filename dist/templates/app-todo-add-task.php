<!-- Add task INLINE Button -->
<div class="action-add-bar">
  <a class="action-add-item" data-toggle="collapse" href="#addTaskInline" role="button" aria-expanded="false" aria-controls="addTaskInline"><i class="material-icons">add</i>Add task</a>
</div>

<!-- Add task MODAL Button -->
<div class="add-bar">
  <button type="button" class="btn btn-add-task btn-success" data-toggle="modal" data-target="#addTask">Launch demo modal
  </button>
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

<!-- Add task Modal -->
<div class="modal fade bd-example-modal-lg" id="addTask" tabindex="-1" role="dialog" aria-labelledby="addTask" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title addTask-title">Add Task</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="container-fluid">
          <form class="row">
            <div class="col-8">
              <div class="addTask-task form-group">
                <label class="addTask-task-label" for="taskName">Task:</label>
                <input type="text" class="form-control" id="taskName" placeholder="...">
              </div>
              <div class="form-row">
                <div class="addTask-project form-group col-8 ">
                  <label class="addTask-project-label" for="projectSelect">Project:</label>
                  <select name="task" class="form-control" id="projectSelect">
              </select>
                </div>
                <div class="addTask-priority form-group col-4 ">
                  <label class="addTask-priority-label" for="prioritySelect">Priority:</label>
                  <select class="form-control" data-show-content="true" id="prioritySelect">
                    <option value="1">Priority 1</option>
                    <option value="2">Priority 2</option>
                    <option value="3">Priority 3</option>
                    <option value="4" selected>Priority 4</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="addTask-tag form-group">
                <div class="addTask-tag form-group">
                  <label class="addTask-tag-label" for="tagSelect">Example multiple select</label>
                  <select multiple class="addTask-tag-select form-control" id="tagSelect">
                  </select>
                </div>
              </div>
          </form>
          </div>
        </div>
        <div class="addTask-btn-box modal-footer d-flex justify-content-center">
          <button type="button" class="btn btn-addTask-add">Add Task</button>
          <button type="button" class="btn btn-addTask-close" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>