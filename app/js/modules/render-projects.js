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

