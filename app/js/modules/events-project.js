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
      var toProjectId = $(this).attr('data-project-id');
      var droppedTask = $(ui.draggable).find('.todo-label').text();
      var currentProjectId = ui.draggable.attr('data-project');
      console.log('Current project:'+currentProjectId);
      console.log('Dropped task:'+droppedTask);
      console.log('To project:'+toProjectId);

      if(toProjectId !== currentProjectId){

        $.post({
          url: 'php/update-modules/update-task-project.php',
          data: { currentProject:currentProjectId,
                  task:droppedTask,
                  project:toProjectId},
          success: function (response) {
            console.log('Success to contact the server');
            console.log(response);
          },
          error: function () {
            console.log('Fail to connect the server');
          }
        });
        if(urlArray[3].indexOf('tag') >= 0 || urlArray[3].indexOf('filter') >= 0){
          ui.draggable.animate({top:0,left:0},0);
        }else{
          $(ui.draggable).remove();
        }
      }
      else{
        console.log('same project');
        ui.draggable.animate({top:0,left:0},0);
      }
      $(this).removeClass('shadow');
    }
  });
}
//Init for first load of the app page
projectsDroppable();

//HIDE/SHOW controls
function hoverProjectControls(){
  $('.project-item').find('.project-right-controls').hide();
  $('.project-item').hover(
  function () {
    $(this).find('.project-right-controls').fadeIn(200).show(1);
  }, 
  function () {
    $(this).find('.project-right-controls').fadeIn(200).hide(1);
  }
);
}
hoverProjectControls();

