//CREATE PROJECT THROUGHT INLINE TAB
//auto focus input for project
$('#addProject').on('shown.bs.collapse', function () {
  $('.addProject-input').val('');
  $('.addProject-input').focus();
  $('.add-project-icon.arrow').removeClass('d-none');
  $('.add-project-icon.plus').addClass('d-none');
});
$('#addProject').on('hidden.bs.collapse', function () {
  $('.add-project-icon.plus').removeClass('d-none');
  $('.add-project-icon.arrow').addClass('d-none');
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
            renderProjects();
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
};
//CREATE PROJECT THROUGHT INLINE TAB
//auto focus input for project
$('#addTag').on('shown.bs.collapse', function (e) {
  $('.addTag-input').val('');
  $('.addTag-input').focus();
  $('.add-tag-icon.plus').addClass('d-none');
  $('.add-tag-icon.arrow').removeClass('d-none'); 
});
$('#addTag').on('hidden.bs.collapse', function () {
  $('.add-tag-icon.plus').removeClass('d-none');
  $('.add-tag-icon.arrow').addClass('d-none');
});
//Inline form - click add button
$(document).on('click', '.addTag-btn', function (e) {
  createTags();
});
//Inline form - on enter
$('.addTag-form').on('submit', function (e) {
  createTags();
});

function createTags(){
  event.preventDefault();
  
  if($('.addTag-input').val()){
      //Grab the form data
      var formTagData = $('.addTag-form').serialize();
      console.log(formTagData);
      console.log('Inline executed');
      
      //Post the inline form
      $.post({
        url: 'php/create-modules/create-tag.php',
        data: formTagData,
        datatype: FormData,
        success: function (response) {
          console.log('Success to contact the server');
          console.log(response);
          if (response === 'tag_added') {
            //succesfull add
            //rerender the projects
            $('#addTag').removeClass('show');
            renderTags();
          }
          if (response === 'duplicated_tag') {
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
    .find(".project-label")
    .each(function () {
      $('#projectSelect').append('<option value="' + $(this).text() + '">' + $(this).text() + '</option>');
    });

  //add tags into select box
  $("#tagSelect").empty();
  $(".tag-item")
    .find(".tag-label")
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
    //Grab the current project to rerender
    
    
    
    if ($('#taskName').val()) {
      var formData = $('.addTask-form').serialize();
      console.log(formData);
      $.post({
        url: 'php/create-modules/create-task.php',
        data: formData,
        datatype: FormData,
        success: function (response) {
          console.log('Success to contact the server');
          console.log(response);
          if (response === 'task_added') {
            //succesfull add
            var modalSelectedProject = $('.addTask-form').find('#projectSelect option:selected').text();
            renderTasks(modalSelectedProject);
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
            var currentProject = $('.todo-title').text();
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
$(document).on('click', '.btn-project-delete',function(e){
  event.preventDefault();
  
  var projectToDelete = $(this).parents('.project-item').find('.project-label').text();
  console.log(projectToDelete);
  
  $.post({
    url: 'php/delete-modules/delete-project.php',
    data: {project:projectToDelete},
    datatype: FormData,
    success: function(response){
      console.log('Success to contact the server');
      console.log(response);
      renderProjects();
      
      //If we are deleting the rendered project
      var currentProject = $('.todo-title').text();
      if(projectToDelete === currentProject){
        renderTasks('Inbox');
        history.replaceState(null, null, 'app.php?project=Inbox');
      }
    },
    error: function(){
      console.log('Failure');
    }
  });
  
});


$(document).on('click', '.btn-tag-delete',function(e){
  event.preventDefault();
  
  var tagToDelete = $(this).parents('.tag-item').find('.tag-label').text();
  console.log(tagToDelete);
  
  $.post({
    url: 'php/delete-modules/delete-tag.php',
    data: {tag:tagToDelete},
    datatype: FormData,
    success: function(response){
      console.log('Success to contact the server');
      console.log(response);
      renderTags();
    },
    error: function(){
      console.log('Failure');
    }
  });
});

//Modal - click on button will request the inserting the task
$(document).on('click', '.btn-task-delete',function(e){
  event.preventDefault();
  
  var taskToDelete = $(this).parents('.todo-item').find('.todo-label').text();
  console.log(taskToDelete);
  var currentProject = $('.todo-title').text();
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
      var droppedTask = $(ui.draggable).find('.todo-label').text();
      var toProject = $(this).find('.project-label').text();
      
      //if the filter is TAG
      if (urlArray[3].indexOf('tag') >= 0){
        var currentTag = $('.todo-title').text();
        $.post({
          url: 'php/update-modules/update-task-project.php',
          data: { currentTag:currentTag,
                  task:droppedTask,
                  project:toProject},
          success: function (response) {
            console.log('Success to contact the server');
            console.log(response);
          },
          error: function () {
            console.log('Fail to connect the server');
          }
        }); 
          
        ui.draggable.animate({top:0,left:0},0);
      }
      else{
        //if the filter is PROJECT
        console.log('Dropped');
        var currentProject = $('.todo-title').text();        
        console.log('Current project:'+currentProject);
        console.log('Dropped task:'+droppedTask);
        console.log('To project:'+toProject);

        if(currentProject !== toProject){
          $.post({
            url: 'php/update-modules/update-task-project.php',
            data: { currentProject:currentProject,
                    task:droppedTask,
                    project:toProject},
            success: function (response) {
              console.log('Success to contact the server');
              console.log(response);
            },
            error: function () {
              console.log('Fail to connect the server');
            }
          });  
          $(ui.draggable).remove();
        }
        else{
          ui.draggable.animate({top:0,left:0},0);
        }
      }
      $(this).removeClass('shadow');
    }
  });
}
//Init for first load of the app page
projectsDroppable();
//Drop task into project
function tagsDroppable() {
  $(".tag-item").droppable({
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
      
      console.log('Dropped');
      var currentProject = $('.todo-title').text();
      var droppedTask = $(ui.draggable).find('.todo-label').text();
      var toTag = $(this).find('.tag-label').text();
      console.log('Current project:'+currentProject);
      console.log('Dropped task:'+droppedTask);
      console.log('To tag:'+toTag);
      
      $.post({
        url: 'php/update-modules/update-task-tag.php',
        data: { currentProject:currentProject,
                task:droppedTask,
                tag:toTag},
        success: function (response) {
          console.log('Success to contact the server');
          console.log(response);
        },
        error: function () {
          console.log('Fail to connect the server');
        }
      }); 
      $(this).removeClass('shadow');
      ui.draggable.animate({top:0,left:0},0);

    }
  });
}
//Init for first load of the app page
tagsDroppable();
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
function renderProjects() {
  $.ajax({
    url: 'php/render-modules/render-projects.php',
    type: 'POST',
    dataType: 'html',
    success: function (response) {
      $('.project-list').empty();
      $('.project-list').append(response);
      renderProjectPositions();
      projectsDroppable();
    }
  });
}

//Render index into data task position atributes
function renderProjectPositions(){
  $('.project-item').each(function(){
    $(this).attr('data-project-position', $(this).index());
  });
}
renderProjectPositions();


function renderTags() {
  $.ajax({
    url: 'php/render-modules/render-tags.php',
    type: 'POST',
    dataType: 'html',
    success: function (response) {
      $('.tag-list').empty();
      $('.tag-list').append(response);
    }
  });
}

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
        renderTaskPositions();
        tasksDraggable();
      }
    });
  }
  
  //Render Name of current project
  function renderProjectTitle(project){
    $('.todo-title').text(project);
  }
  //Create hidden input for add task inline box
  function addHiddenInput(project){
    $('.addTaskInline-project').val(project);
  }

  //Render tasks when CLICK on projects aside
  $(document).on('click','li.project-item, li.inbox-item', function () {
    var projectName = $(this).find('span').text();
    console.log(projectName);
    renderTasks(projectName);
    history.replaceState(null, null, 'app.php?'.concat($.param({project:projectName})));
  });

//Render index into data task position atributes
function renderTaskPositions(){
  $('.todo-item').each(function(){
    $(this).attr('data-task-position', $(this).index());
  });
}
//Render position intributes after refresh
renderTaskPositions();


//RENDER tasks by filters
function renderTasksByTag(tag) {
  $.ajax({
    url: 'php/render-modules/render-tasks.php',
    type: 'GET',
    dataType:'html',
    data: {
      tag: tag
    },
    success: function (response) {
      $('.todo-list').empty();
      $('.todo-list').append(response);
      renderFilterTitle(tag);
      addHiddenInput(tag);
      renderTaskPositions();
      tasksDraggable();
      projectsDroppable();
    }
  });
}
//Render tasks when CLICK on projects aside
  $(document).on('click','li.tag-item', function () {
    var tagName = $(this).find('span').text();
    console.log(tagName);
    renderTasksByTag(tagName);
    history.replaceState(null, null, 'app.php?'.concat($.param({tag:tagName})));
  });

//Render Name of current filter
function renderFilterTitle(filter){
  $('.todo-title').text(filter);
}

function updateTaskPositions(){
    
  var dataArray = [];
  
  var currentProject = $('.todo-title').text();
  
  $('.todo-item').each(function(){
    var task = {};
    task[$(this).find('.todo-label').text()] = $(this).attr('data-task-position');
    
    dataArray.push(task);
  });

  var json_positions = JSON.stringify(dataArray);
  console.log(json_positions);
  
  $.post({
        url: 'php/update-modules/update-task-positions.php',
        data: { positions:json_positions,
                project:currentProject},
        success: function (response) {
          console.log('Success to contact the server');
          console.log(response);
        },
        error: function () {
          console.log('Fail to connect the server');
        }
      });
  
}

function updateProjectPositions(){
    
  var dataArray = new Array();
  
  $('.project-item').each(function(){
    var project = {};
    project[$(this).find('.project-label').text()] = $(this).attr('data-project-position');
    dataArray.push(project);
  });

  var json_positions = JSON.stringify(dataArray);
  console.log(json_positions);
  
  $.post({
        url: 'php/update-modules/update-project-positions.php',
        data: { positions:json_positions},
        success: function (response) {
          console.log('Success to contact the server');
          console.log(response);
        },
        error: function () {
          console.log('Fail to connect the server');
        }
      });
  
}

