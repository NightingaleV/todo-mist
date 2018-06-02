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
          <form method="post" class="row addTask-form">
            <div class="col-8">
              <div class="addTask-task form-group">
                <label class="addTask-task-label" for="taskName">Task:</label>
                <input type="text" name="task" class="form-control" id="taskName" placeholder="...">
              </div>
              <div class="form-row">
                <div class="addTask-project form-group col-8 ">
                  <label class="addTask-project-label" for="projectSelect">Project:</label>
                  <select name="project" name="task" class="form-control" id="projectSelect">
              </select>
                </div>
                <div class="addTask-priority form-group col-4 ">
                  <label class="addTask-priority-label" for="prioritySelect">Priority:</label>
                  <select name="priority" class="form-control" data-show-content="true" id="prioritySelect">
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
                  <select multiple name="tags[]" class="addTask-tag-select form-control" id="tagSelect">
                  </select>
                </div>
              </div>
          </form>
          </div>
        </div>
        <div class="addTask-btn-box modal-footer d-flex justify-content-center">
          <button type="submit" class="btn btn-addTask">Add Task</button>
          <button type="button" class="btn btn-addTask-close" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>