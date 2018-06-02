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
$(document).ready(function () {

  //Get data from server
  function renderTasks(project) {
    $.ajax({
      url: 'php/app-modules/render-tasks.php',
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