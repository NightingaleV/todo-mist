$(document).ready(function () {

  function renderTasks(project) {
    $.ajax({
      url: 'php/todo/render-tasks.php',
      type: 'GET',
      data: {
        project: project
      },
      success: function (response) {
        $('.todo-list').append(response);
      }
    });
  }

  $("li.project-item").on('click', function () {
    var projectName = $(this).children('.project-label').text();
    console.log($(this).children('.project-label').text());
    renderTasks(projectName);
    history.replaceState(null, null, 'app.php?'.concat($.param({project:projectName})));
    
  });



});