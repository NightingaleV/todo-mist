//addTask - add a hidden input for current project
$('#addTaskInline').on('show.bs.collapse', function(e){
  $('.addTaskInline-container').append('<input type="hidden" name="currentproject" value="'+$('.project-title').text()+'">');
});

//Modal - render data
$('#addTask').on('show.bs.modal', function (e) {
  //add projects into select box
  $('#projectSelect').empty().append('<option selected>Inbox</option>');  
  $('.project-item')
    .children(".project-label")
    .each(function(){
    $('#projectSelect').append('<option value="'+$(this).text()+'">'+$(this).text()+'</option>');
  });
  
  //add tags into select box
  $("#tagSelect").empty();
  $(".tag-item")
  .children(".tag-label")
  .each(function(){
    $('#tagSelect').append('<option value="'+$(this).text()+'">#'+$(this).text()+'</option>');
  });
});



$('.btn-addTask').on('click',function(e){
  
  event.preventDefault();
  var formData = $('.addTask-form').serialize();
  console.log(formData);
  
  $.post({
    url: 'php/create-modules/create-task.php',
    data: formData,
    datatype: FormData,
    success: function(response){
      console.log('Success');
      console.log(response);
    },
    error: function(){
      console.log('Failure');
    }
  });
});




