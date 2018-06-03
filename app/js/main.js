//CREATE PROJECT THROUGHT INLINE TAB
//auto focus input for project
$('#addProject').on('shown.bs.collapse', function (e) {
  $('.addProject-input').val('');
  $('.addProject-input').focus();
});
//Inline form - click add button
$(document).on('click', '.addProject-btn', function (e) {
  createProject();
});
//Inline form - on enter
$('.addProject-form').on('submit', function (e) {
  createProject();
});

function createProject(){
  event.preventDefault();
  
  if($('.addProject-input').val()){
      //Grab the form data
      var formProjectData = $('.addProject-form').serialize();
      console.log(formProjectData);
      console.log('Inline executed');
      
      //Post the inline form
      $.post({
        url: 'php/create-modules/create-project.php',
        data: formProjectData,
        datatype: FormData,
        success: function (response) {
          console.log('Success to contact the server');
          console.log(response);
          if (response === 'project_added') {
            //succesfull add
            //rerender the projects
            $('#addProject').removeClass('show');
          }
          if (response === 'duplicated_project') {
            console.log('it isnot');
          }
        },
        error: function () {
          console.log('Fail to connect the server');
        }
      });
    }
}
//CREATE PROJECT THROUGHT INLINE TAB
//auto focus input for project
$('#addProject').on('shown.bs.collapse', function (e) {
  $('.addProject-input').val('');
  $('.addProject-input').focus();
});
//Inline form - click add button
$(document).on('click', '.addProject-btn', function (e) {
  createProject();
});
//Inline form - on enter
$('.addProject-form').on('submit', function (e) {
  createProject();
});

function createProject(){
  event.preventDefault();
  
  if($('.addProject-input').val()){
      //Grab the form data
      var formProjectData = $('.addProject-form').serialize();
      console.log(formProjectData);
      console.log('Inline executed');
      
      //Post the inline form
      $.post({
        url: 'php/create-modules/create-project.php',
        data: formProjectData,
        datatype: FormData,
        success: function (response) {
          console.log('Success to contact the server');
          console.log(response);
          if (response === 'project_added') {
            //succesfull add
            //rerender the projects
            $('#addProject').removeClass('show');
          }
          if (response === 'duplicated_project') {
            console.log('it isnot');
          }
        },
        error: function () {
          console.log('Fail to connect the server');
        }
      });
    }
}

//CREATE TASK THROUGHT INLINE TAB
//auto focus input for task
$('#addTaskInline').on('shown.bs.collapse', function (e) {
  $('.addTaskInline-input').val('');
  $('.addTaskInline-input').focus();
});
//Inline form - click add button
$(document).on('click', '.addTaskInline-btn', function (e) {
  createTask('inline');
});
//Inline form - on enter
$('.addTaskInline-form').on('submit', function (e) {
  createTask('inline');
});


//CREATE TASK THROUGHT MODAL
//Modal - render data
$('#addTask').on('show.bs.modal', function (e) {
  //Clear the task input for fresh writing
  $('#taskName').val('');

  //add projects into select box
  $('#projectSelect').empty().append('<option value="Inbox" selected>Inbox</option>');
  $('.project-item')
    .children(".project-label")
    .each(function () {
      $('#projectSelect').append('<option value="' + $(this).text() + '">' + $(this).text() + '</option>');
    });

  //add tags into select box
  $("#tagSelect").empty();
  $(".tag-item")
    .children(".tag-label")
    .each(function () {
      $('#tagSelect').append('<option value="' + $(this).text() + '">#' + $(this).text() + '</option>');
    });

});

//Modal - focus input
$('#addTask').on('shown.bs.modal', function (e) {
  //auto focus input for task
  $('#taskName').focus();

});

//Modal - click add button
$(document).on('click', '.btn-addTask', function (e) {
  createTask('modal');
});
//Modal - on enter
$('.addTask-form').on('submit', function (e) {
  createTask('modal');
});

//Modal - Task validation
$('#taskName').on('keyup blur', function () {
  if (!$(this).val()) {
    $(this).siblings('.invalid-tooltip').addClass('d-block');
  } else {
    $(this).siblings('.invalid-tooltip').removeClass('d-block').addClass('d-none');
  }
});

//Ajax for creating new task
function createTask(sourceOfAction) {
  event.preventDefault();
  
  //Request is coming from modal or inline input
  if (sourceOfAction === 'modal') {
    if ($('#taskName').val()) {
      var formData = $('.addTask-form').serialize();
      console.log(formData);
      
      //Grab the current project to rerender
      var currentProject = $('.addTask-form').find('#projectSelect option:selected').text();

      $.post({
        url: 'php/create-modules/create-task.php',
        data: formData,
        datatype: FormData,
        success: function (response) {
          console.log('Success to contact the server');
          console.log(response);
          if (response === 'task_added') {
            //succesfull add
            renderTasks(currentProject);
          }
          if (response === 'duplicated_tasks') {
            console.log('it isnot');
            $('#taskName').popover({
              trigger: 'manual',
              delay: {
                "show": 250,
                "hide": 0
              }
            });
            $('#taskName').popover('toggle');
            setTimeout(function () {
              $('#taskName').popover('toggle');
            }, 4500);

          }
        },
        error: function () {
          console.log('Failure');
        }
      });
    }
  } else if (sourceOfAction === 'inline') {
    if($('.addTaskInline-input').val()){
      //Grab the form data
      var formInlineData = $('.addTaskInline-form').serialize();
      console.log(formInlineData);
      console.log('Inline executed');
      
      //Grab the current project to rerender
      var currentProject = $('.project-title').text();
      
      //Post the inline form
      $.post({
        url: 'php/create-modules/create-task.php',
        data: formInlineData,
        datatype: FormData,
        success: function (response) {
          console.log('Success to contact the server');
          console.log(response);
          if (response === 'task_added') {
            //succesfull add
            renderTasks(currentProject);
            $('#addTaskInline').removeClass('show');
          }
          if (response === 'duplicated_tasks') {
            console.log('it isnot');
          }
        },
        error: function () {
          console.log('Failure');
        }
      });
    }
  }
}

//Modal - click on button will request the inserting the task
$(document).on('click', '.btn-task-delete',function(e){
  event.preventDefault();
  
  var taskToDelete = $(this).parents('.todo-item').find('.todo-label').text();
  console.log(taskToDelete);
  var currentProject = $('.project-title').text();
  console.log(currentProject);
  
  $.post({
    url: 'php/delete-modules/delete-task.php',
    data: {project:currentProject, task:taskToDelete},
    datatype: FormData,
    success: function(response){
      console.log('Success to contact the server');
      console.log(response);
      renderTasks(currentProject);
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
        $('.todo-list').empty();
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

