//Change priority
function changePriority(taskToUpdate,priority,tasksProjectId){

    console.log('Current project:'+tasksProjectId);
    console.log('Task:'+taskToUpdate);
    console.log('New priority:'+priority);
    
    $.post({
        url: 'php/update-modules/update-task-priority.php',
        data: { currentProject:tasksProjectId,
                task:taskToUpdate,
                priority:priority,
                },
        success: function (response) {
          console.log('Success to contact the server');
          console.log(response);
        },
        error: function () {
          console.log('Fail to connect the server');
        }
    });
}

//Change class of item 
function changePriorityClass(changedItem,priority) {
  if(changedItem.hasClass('priority-1')){   
    changedItem.removeClass('priority-1'); 
    changedItem.addClass('priority-'+priority);
  }
  else if (changedItem.hasClass('priority-2')){
    changedItem.removeClass('priority-2'); 
    changedItem.addClass('priority-'+priority);
  }
  else if (changedItem.hasClass('priority-3')){
    changedItem.removeClass('priority-3'); 
    changedItem.addClass('priority-'+priority);
  }
  else{
    changedItem.removeClass('priority-4'); 
    changedItem.addClass('priority-'+priority);
  }
}
//CLick on button change priority
$(document).on('click', '.priority-dropdown-item',function(e){
  event.preventDefault();
  var changedItem = $(this).parents('.todo-item');
  var taskToUpdate = changedItem.find('.todo-label').text();
  var tasksProjectId = changedItem.attr('data-project');
  console.log(taskToUpdate);
  var priority = 1;
  if($(this).hasClass('btn-priority-2')){
    priority = 2;
  }
  else if($(this).hasClass('btn-priority-3')){
    priority = 3;
  }
  else if($(this).hasClass('btn-priority-4')){
    priority = 4;
    priority = 4;
  }
  else{
  console.log(priority); console.log('No');
  }
  //CALL AJAX
  changePriority(taskToUpdate,priority,tasksProjectId);
  //Change class and coloring for task
  changePriorityClass(changedItem,priority);
  changedItem.attr('data-task-priority', priority);
});