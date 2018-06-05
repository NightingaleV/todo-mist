$(function () {
  $('.todo-list').sortable({
    cursor: "grab",
    handle: '.draggable-action',
  });
});

//Drag tasks to to droppable projects
$(function tasksDraggable() {
  $(".todo-item").draggable({
    handle: '.draggable-action',
    connectToSortable: '.todo-list',
    revert: 'invalid',
    scroll: true,
    scope: 'tasks',
  });
});
//Drop task into project
$(function projectsDroppable() {
  $(".project-item").droppable({
    accept: '.todo-item',
    scope: 'tasks',
    tolerance: 'pointer',
    drop: function (event, ui) {
      console.log('Dropped');
      $(ui.draggable).remove();
      //Project Index
      console.log($(this).index());
      //Task Index
      console.log(ui.draggable.index());
    }
  });
});

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
})




