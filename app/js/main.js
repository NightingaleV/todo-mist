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





$(document).ready(function(){
//Changing class on navbar while scrolling down
$(window).scroll(function() {     
    var scroll = $(window).scrollTop(); 
     //console.log(scroll);
    if (scroll >= 50) { 
        //console.log('a'); 
        $(".navbar").addClass("navbar-change"); 
    } else { 
        //console.log('a'); 
        $(".navbar").removeClass("navbar-change"); 
    } 
});
});
$(document).ready(function () {

  //Get data from server
  function renderTasks(project) {
    $.ajax({
      url: 'php/render-modules/render-tasks.php',
      type: 'GET',
      dataType:'html',
      data: {
        project: project
      },
      success: function (response) {
        $('.todo-list').append(response);
        renderProjectTitle(project);
        addHiddenInput(project);
      }
    });
  }
  
  //Render Name of current project
  function renderProjectTitle(project){
    $('.project-title').text(project);
  }
  //Create hidden input for add task inline box
  function addHiddenInput(project){
    $('.addTaskInline-project').val(project);
  }

  //Render tasks when CLICK on projects aside
  $("li.project-item, li.inbox-item").on('click', function () {
    var projectName = $(this).children('span').text();
    console.log(projectName);
    renderTasks(projectName);
    history.replaceState(null, null, 'app.php?'.concat($.param({project:projectName})));
  });



});