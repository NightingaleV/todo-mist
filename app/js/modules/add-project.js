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