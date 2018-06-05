//Sort projects
$(function projectsSortable() {
  $('.project-list').sortable({
    cursor: "grab",
    handle: '.draggable-action',
    start: function(){},
    update: function (event, ui) {      
      // Zapis indexu do atributu
      renderProjectPositions();   
    },
    stop: function(event, ui){
      updateProjectPositions();
    }
  });
});

//Drop task into project
function projectsDroppable() {
  $(".project-item, li.inbox-item").droppable({
    accept: '.todo-item',
    tolerance: 'pointer',
    scope: 'tasks',
    drop: function (event, ui) {
      console.log('Dropped');
      
      var currentProject = $('.todo-title').text();
      var droppedTask = $(ui.draggable).find('.todo-label').text();
      var toProject = $(this).find('.project-label').text();
      
      console.log('Current project:'+currentProject);
      console.log('Dropped task:'+droppedTask);
      
      $.post({
        url: 'php/update-modules/update-task-project.php',
        data: { currentProject:currentProject,
                task:droppedTask,
              project:toProject},
        success: function (response) {
          console.log('Success to contact the server');
          console.log(response);
        },
        error: function () {
          console.log('Fail to connect the server');
        }
      });  
      
      $(ui.draggable).remove();
      //Project name
      console.log($(this).find('.project-label').text());
    }
  });
}
//Init for first load of the app page
projectsDroppable();