
$(document).on('click', '.btn-todo-sort',function(e){
  event.preventDefault();
  
  $('.todo-list li').sort(sortByPriority).appendTo('.todo-list');
  renderTaskPositions();
  updateTaskPositions();
  
  
});

function sortByPriority(a,b){
  return ($(b).attr('data-task-priority')) <= ($(a).attr('data-task-priority')) ? 1 : -1;
}