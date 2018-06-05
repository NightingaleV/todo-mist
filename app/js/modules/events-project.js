//Sort tasks
$(function tasksSortable() {
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