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
            //successful add
            //render the projects
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