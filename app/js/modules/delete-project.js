//Modal - click on button will request the inserting the task
$(document).on('click', '.btn-project-delete',function(e){
  event.preventDefault();
  
  var projectToDelete = $(this).parents('.project-item').find('.project-label').text();
  console.log(projectToDelete);
  
  $.post({
    url: 'php/delete-modules/delete-project.php',
    data: {project:projectToDelete},
    datatype: FormData,
    success: function(response){
      console.log('Success to contact the server');
      console.log(response);
      renderProjects();
      renderTasks('Inbox');
      
      //If we are deleting the rendered project
      var currentProject = $('.todo-title').text();
      if(projectToDelete === currentProject){
        renderTasks('Inbox');
        history.replaceState(null, null, 'app.php?project=Inbox');
      }
    },
    error: function(){
      console.log('Failure');
    }
  });
  
});
