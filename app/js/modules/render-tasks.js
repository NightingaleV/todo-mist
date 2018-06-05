
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


