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
    over: function(event, ui){
      $(this).addClass('shadow');
    },
    out: function(event, ui){
      $(this).removeClass('shadow');
    },
    drop: function (event, ui) {
      
      console.log('Dropped');
      var currentProject = $('.todo-title').text();
      var droppedTask = $(ui.draggable).find('.todo-label').text();
      var toProject = $(this).find('.project-label').text();
      console.log('Current project:'+currentProject);
      console.log('Dropped task:'+droppedTask);
      console.log('To project:'+toProject);
      
      if(currentProject !== toProject){
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
      }else{
        console.log('They are same:');
        ui.draggable.animate({top:0,left:0},0);
      }
      

    }
  });
}
//Init for first load of the app page
projectsDroppable();