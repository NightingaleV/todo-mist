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
      var urlArray = window.location.href.split('/');
      var droppedTask = $(ui.draggable).find('.todo-label').text();
      var toProject = $(this).find('.project-label').text();
      
      //if the filter is TAG
      if (urlArray[3].indexOf('tag') >= 0){
        var currentTag = $('.todo-title').text();
        $.post({
          url: 'php/update-modules/update-task-project.php',
          data: { currentTag:currentTag,
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
          
        ui.draggable.animate({top:0,left:0},0);
      }
      else{
        //if the filter is PROJECT
        console.log('Dropped');
        var currentProject = $('.todo-title').text();        
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
        }
        else{
          ui.draggable.animate({top:0,left:0},0);
        }
      }
      $(this).removeClass('shadow');
    }
  });
}
//Init for first load of the app page
projectsDroppable();