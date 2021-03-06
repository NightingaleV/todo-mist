//CREATE PROJECT THROUGHT INLINE TAB
//auto focus input for project
var addProjectCollapse = $('#addProject');
var projectInput = $('.addProject-input');
var projectArrow = $('.add-project-icon.arrow');
var projectPlus = $('.add-project-icon.plus');

addProjectCollapse.on('shown.bs.collapse', function () {
  projectInput.val('');
  projectInput.focus();
  projectArrow.removeClass('d-none');
  projectPlus.addClass('d-none');
});
addProjectCollapse.on('hidden.bs.collapse', function () {
  projectPlus.removeClass('d-none');
  projectArrow.addClass('d-none');
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

  if(projectInput.val()){

      //Grab the form data
      var formProjectData = projectInput.serialize();
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
            addProjectCollapse.removeClass('show');
            projectPlus.removeClass('d-none');
            projectArrow.addClass('d-none');
            renderProjects();
          }
          if (response === 'duplicated_project') {
            console.log('duplicated_project');
            projectInput.popover({
              trigger: 'manual',
              delay: {
                "show": 250,
                "hide": 0
              }
            });
            projectInput.popover('toggle');
            setTimeout(function () {
              projectInput.popover('toggle');
            }, 4500);
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
var addTagCollapse = $('#addTag');
var tagInput = $('.addTag-input');
var tagArrow = $('.add-tag-icon.arrow');
var tagPlus = $('.add-tag-icon.plus');

addTagCollapse.on('shown.bs.collapse', function (e) {
  tagInput.val('');
  tagInput.focus();
  tagPlus.addClass('d-none');
  tagArrow.removeClass('d-none');
});
addTagCollapse.on('hidden.bs.collapse', function () {
  tagPlus.removeClass('d-none');
  tagArrow.addClass('d-none');
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
  
  if(tagInput.val()){
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
            //successful add
            //render the projects
            addTagCollapse.removeClass('show');
            tagPlus.removeClass('d-none');
            tagArrow.addClass('d-none');
            renderTags();
          }
          if (response === 'duplicated_tag') {
            console.log('duplicated_tag');
            tagInput.popover({
              trigger: 'manual',
              delay: {
                "show": 250,
                "hide": 0
              }
            });
            tagInput.popover('toggle');
            setTimeout(function () {
              tagInput.popover('toggle');
            }, 4500);
          }
        },
        error: function () {
          console.log('Fail to connect the server');
        }
      });
    }
}

//CREATE TASK THROUGH INLINE TAB
var addTaskInlineInput = $('.addTaskInline-input');
var addTaskInline = $('#addTaskInline');
//auto focus input for task
addTaskInline.on('shown.bs.collapse', function (e) {
  addTaskInlineInput.val('');
  addTaskInlineInput.focus();
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
      console.log($(this).html())
      $('#projectSelect').append('<option value="' + $(this).text() + '">' + $(this).html() + '</option>');
    });

  //add tags into select box
  $("#tagSelect").empty();
  $(".tag-item")
    .find(".tag-label")
    .each(function () {
      $('#tagSelect').append('<option value="' + $(this).text() + '">#' + $(this).html() + '</option>');
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
            var currentProject = $('.todo-title').text().trim();

            $('#addTaskInline').removeClass('show');
            renderTasks(currentProject);
          }
          if (response === 'duplicated_tasks') {
            console.log('duplicated_tasks');
            addTaskInlineInput.popover({
              trigger: 'manual',
              delay: {
                "show": 250,
                "hide": 0
              }
            });
            addTaskInlineInput.popover('toggle');
            setTimeout(function () {
              addTaskInlineInput.popover('toggle');
            }, 4500);
          }
        },
        error: function () {
          console.log('Failure');
        }
      });
    }
  }
}

//Click on button complete a task
$(document).on('click', '.btn-complete',function(e){
    event.preventDefault();
    var changedItem = $(this).parents('.todo-item');
    var taskToComplete = changedItem.find('.todo-label').text().trim();
    var tasksProjectId = changedItem.attr('data-project');
    console.log(taskToComplete);

    $.post({
        url: 'php/update-modules/complete-task.php',
        data: {
            tasksProject:tasksProjectId,
            task:taskToComplete,
        },
        success: function (response) {
            console.log('Success to contact the server');
            console.log(response);
            changedItem.remove();
        },
        error: function () {
            console.log('Fail to connect the server');
        }
    });
});
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
      renderTasks('Inbox');
      
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


$(document).on('click', '.btn-task-delete',function(e){
  event.preventDefault();
  
  var taskToDelete = $(this).parents('.todo-item').find('.todo-label').text();
  console.log(taskToDelete);
  var currentProject = $('.todo-title').text().trim();
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

$(document).on('click', '.btn-logout', function (e) {
    $.ajax({
        url: 'php/user-modules/user-logout.php',
        type: 'GET',
        data: {
            logout: 1
        },
        success: function (response) {
            console.log(response);
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
      var toProjectId = $(this).attr('data-project-id');
      var droppedTask = $(ui.draggable).find('.todo-label').text();
      var currentProjectId = ui.draggable.attr('data-project');
      console.log('Current project:'+currentProjectId);
      console.log('Dropped task:'+droppedTask);
      console.log('To project:'+toProjectId);

      if(toProjectId !== currentProjectId){

        $.post({
          url: 'php/update-modules/update-task-project.php',
          data: { currentProject:currentProjectId,
                  task:droppedTask,
                  project:toProjectId},
          success: function (response) {
            console.log('Success to contact the server');
            console.log(response);
          },
          error: function () {
            console.log('Fail to connect the server');
          }
        });
        if(urlArray[3].indexOf('tag') >= 0 || urlArray[3].indexOf('filter') >= 0){
          ui.draggable.animate({top:0,left:0},0);
        }else{
          $(ui.draggable).remove();
        }
      }
      else{
        console.log('same project');
        ui.draggable.animate({top:0,left:0},0);
      }
      $(this).removeClass('shadow');
    }
  });
}
//Init for first load of the app page
projectsDroppable();

//HIDE/SHOW controls
function hoverProjectControls(){
  $('.project-item').find('.project-right-controls').hide();
  $('.project-item').hover(
  function () {
    $(this).find('.project-right-controls').fadeIn(200).show(1);
  }, 
  function () {
    $(this).find('.project-right-controls').fadeIn(200).hide(1);
  }
);
}
hoverProjectControls();


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

//HIDE/SHOW controls
function hoverTagControls(){
    $('.tag-item').find('.tag-controls').hide();
    $('.tag-item').hover(
        function () {
            $(this).find('.tag-controls').fadeIn(200).show(1);
        },
        function () {
            $(this).find('.tag-controls').fadeIn(200).hide(1);
        }
    );
}
hoverTagControls();
//Sort tasks
$(function tasksSortable() {
    $('.todo-list').sortable({
        cursor: "grab",
        handle: '.draggable-action',
        start: function () {
        },
        update: function (event, ui) {
            // Zapis indexu do atributu
            renderTaskPositions();
        },
        stop: function (event, ui) {
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
function hoverTaskControls() {
    $('.todo-item').find('.todo-right').hide();
    $('.todo-item').hover(
        function () {
            $(this).find('.todo-right').show(1);
        },
        function () {
            $(this).find('.todo-right').hide(1);
        }
    );
}

hoverTaskControls();


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
      hoverProjectControls();
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
  //Hide inline addtask if viewing filters and tags
  var urlArray = window.location.href.split('/');
  if(urlArray[3].indexOf('tag') >= 0 || urlArray[3].indexOf('filter') >= 0){
    $('.app').addClass('filter-view');
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
        hoverTaskControls();
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
    
    //Add inline if browsing projects
    $('.app').removeClass('filter-view');
  });

//Render index into data task position atributes
function renderTaskPositions(){
  $('.todo-item').each(function(){
    $(this).attr('data-task-position', $(this).index());
  });
}
//Render position attributes after refresh
renderTaskPositions();


//RENDER tasks by tags
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
      hoverTaskControls();
      renderFilterTitle(tag);
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
    //hide inline add task form
    $('.app').addClass('filter-view');
  });

  //RENDER tasks by filters
  function renderTasksByFilter(filter) {
    $.ajax({
      url: 'php/render-modules/render-tasks.php',
      type: 'GET',
      dataType:'html',
      data: {
        filter: filter
      },
      success: function (response) {
        $('.todo-list').empty();
        $('.todo-list').append(response);
        hoverTaskControls();
        renderFilterTitle(filter);
        renderTaskPositions();
        tasksDraggable();
        projectsDroppable();
      }
    });
  }
  //Render tasks when CLICK on projects aside
  $(document).on('click','li.top-filter-item', function () {
    var filterName = $(this).find('span').text();
    console.log(filterName);
    renderTasksByFilter(filterName);
    history.replaceState(null, null, 'app.php?'.concat($.param({filter:filterName})));
    //hide inline add task form
    $('.app').addClass('filter-view');
  });

  //Render Name of current filter
  function renderFilterTitle(filter){
    $('.todo-title').text(filter);
  }



$(document).on('click', '.btn-todo-sort',function(e){
  event.preventDefault();
  
  $('.todo-list li').sort(sortByPriority).appendTo('.todo-list');
  renderTaskPositions();
  updateTaskPositions();
  
  
});

function sortByPriority(a,b){
  return ($(b).attr('data-task-priority')) <= ($(a).attr('data-task-priority')) ? 1 : -1;
}
function updateTaskPositions(){
    
  var dataArray = [];
  
  var currentProject = $('.todo-title').text().trim();
  
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


//Change priority
function changePriority(taskToUpdate,priority,tasksProjectId){

    console.log('Current project:'+tasksProjectId);
    console.log('Task:'+taskToUpdate);
    console.log('New priority:'+priority);
    
    $.post({
        url: 'php/update-modules/update-task-priority.php',
        data: { currentProject:tasksProjectId,
                task:taskToUpdate,
                priority:priority,
                },
        success: function (response) {
          console.log('Success to contact the server');
          console.log(response);
        },
        error: function () {
          console.log('Fail to connect the server');
        }
    });
}

//Change class of item 
function changePriorityClass(changedItem,priority) {
  if(changedItem.hasClass('priority-1')){   
    changedItem.removeClass('priority-1'); 
    changedItem.addClass('priority-'+priority);
  }
  else if (changedItem.hasClass('priority-2')){
    changedItem.removeClass('priority-2'); 
    changedItem.addClass('priority-'+priority);
  }
  else if (changedItem.hasClass('priority-3')){
    changedItem.removeClass('priority-3'); 
    changedItem.addClass('priority-'+priority);
  }
  else{
    changedItem.removeClass('priority-4'); 
    changedItem.addClass('priority-'+priority);
  }
}
//CLick on button change priority
$(document).on('click', '.priority-dropdown-item',function(e){
  event.preventDefault();
  var changedItem = $(this).parents('.todo-item');
  var taskToUpdate = changedItem.find('.todo-label').text();
  var tasksProjectId = changedItem.attr('data-project');
  console.log(taskToUpdate);
  var priority = 1;
  if($(this).hasClass('btn-priority-2')){
    priority = 2;
  }
  else if($(this).hasClass('btn-priority-3')){
    priority = 3;
  }
  else if($(this).hasClass('btn-priority-4')){
    priority = 4;
    priority = 4;
  }
  else{
  console.log(priority); console.log('No');
  }
  //CALL AJAX
  changePriority(taskToUpdate,priority,tasksProjectId);
  //Change class and coloring for task
  changePriorityClass(changedItem,priority);
  changedItem.attr('data-task-priority', priority);
});