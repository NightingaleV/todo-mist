//CREATE PROJECT THROUGHT INLINE TAB
//auto focus input for project
$('#addTag').on('shown.bs.collapse', function (e) {
  $('.addTag-input').val('');
  $('.addTag-input').focus();
});
//Inline form - click add button
$(document).on('click', '.addTag-btn', function (e) {
  createProject();
});
//Inline form - on enter
$('.addTag-form').on('submit', function (e) {
  createProject();
});

function createProject(){
  event.preventDefault();
  
  if($('.addTag-input').val()){
      //Grab the form data
      var formProjectData = $('.addTag-form').serialize();
      console.log(formProjectData);
      console.log('Inline executed');
      
      //Post the inline form
      $.post({
        url: 'php/create-modules/create-tag.php',
        data: formProjectData,
        datatype: FormData,
        success: function (response) {
          console.log('Success to contact the server');
          console.log(response);
          if (response === 'tag_added') {
            //succesfull add
            //rerender the projects
            $('#addTag').removeClass('show');
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