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

