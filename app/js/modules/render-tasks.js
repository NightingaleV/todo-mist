$(document).ready(function () {

  function renderTasks(project) {
    $.ajax({
      url: 'php/app-modules/render-tasks.php',
      type: 'GET',
      data: {
        project: project
      },
      success: function (response) {
        $('.todo-list').append(response);
        renderProjectTitle(project);
      }
    });
  }
  
  function renderProjectTitle(project){
    $('.project-title').text(project);
  }

  $("li.project-item, li.inbox-item").on('click', function () {
    var projectName = $(this).children('span').text();
    console.log($(this).children('.project-label').text());
    renderTasks(projectName);
    history.replaceState(null, null, 'app.php?'.concat($.param({project:projectName})));
  });



});