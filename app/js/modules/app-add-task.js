//addTaskPane
$('#addTaskInlinePane').on('show.bs.collapse', function(e){
  $('.add-task-inline').append('<input type="hidden" name="currentproject" value="'+$('.project-title').text()+'">');
});

//Modal render projects
$('#addTask').on('show.bs.modal', function (e) {
  $('#projectSelect').empty().append('<option selected>Inbox</option>');
  
  $('.project-label').each(function(){
    $('#projectSelect').append('<option>'+$(this).text()+'</option>');
  });
});