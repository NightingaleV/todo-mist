//Modal - click on button will request the inserting the task
$(document).on('click', '.btn-task-delete',function(e){
  event.preventDefault();
  
  var taskToDelete = $(this).parents('.todo-item').find('.todo-label').text();
  console.log(taskToDelete);
  var currentProject = $('.todo-title').text();
  console.log(currentProject);
  
  $.post({
    url: 'php/delete-modules/delete-task.php',
    data: {project:currentProject, task:taskToDelete},
    datatype: FormData,
    success: function(response){
      console.log('Success to contact the server');
      console.log(response);
      renderTasks(currentProject);
    },
    error: function(){
      console.log('Failure');
    }
  });
});
