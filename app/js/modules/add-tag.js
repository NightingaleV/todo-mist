//CREATE PROJECT THROUGHT INLINE TAB
//auto focus input for project
$('#addTag').on('shown.bs.collapse', function (e) {
  $('.addTag-input').val('');
  $('.addTag-input').focus();
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
  
  if($('.addTag-input').val()){
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
            //succesfull add
            //rerender the projects
            $('#addTag').removeClass('show');
            renderTags();
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