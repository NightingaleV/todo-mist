//Sort tasks
$(function tasksSortable() {
  $('.todo-list').sortable({
    cursor: "grab",
    handle: '.draggable-action',
    start: function(){},
    update: function (event, ui) {      
      // Zapis indexu do atributu
      renderTaskPositions();  
    },
    stop: function(event, ui){
      updateTaskPositions();
    }
  });
});
//Drag tasks to to droppable projects
function tasksDraggable() {
  $(".todo-item").draggable({
    handle: '.draggable-action',
    connectToSortable: '.todo-list',
    revert: 'invalid',
    scroll: true,
    zIndex: 2500,
    scope: 'tasks',
  });
};
//Init for first load of the page
tasksDraggable();

//HIDE/SHOW controls
function hoverTaskControls(){
  $('.todo-item').find('.todo-right').hide();
  $('.todo-item').hover(
  function () {
    $(this).find('.todo-right').show(1);
  }, 
  function () {
    $(this).find('.todo-right').hide(1);
  }
);
};
hoverTaskControls();

