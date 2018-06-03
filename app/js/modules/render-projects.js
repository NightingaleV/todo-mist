function renderProjects() {
  $.ajax({
    url: 'php/render-modules/render-projects.php',
    type: 'POST',
    dataType: 'html',
    success: function (response) {
      $('.project-list').empty();
      $('.project-list').append(response);
    }
  });
}