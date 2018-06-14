//CREATE PROJECT THROUGHT INLINE TAB
//auto focus input for project
var addTagCollapse = $('#addTag');
var tagInput = $('.addTag-input');
var tagArrow = $('.add-tag-icon.arrow');
var tagPlus = $('.add-tag-icon.plus');

addTagCollapse.on('shown.bs.collapse', function (e) {
  tagInput.val('');
  tagInput.focus();
  tagPlus.addClass('d-none');
  tagArrow.removeClass('d-none');
});
addTagCollapse.on('hidden.bs.collapse', function () {
  tagPlus.removeClass('d-none');
  tagArrow.addClass('d-none');
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
  
  if(tagInput.val()){
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
            //successful add
            //render the projects
            addTagCollapse.removeClass('show');
            tagPlus.removeClass('d-none');
            tagArrow.addClass('d-none');
            renderTags();
          }
          if (response === 'duplicated_tag') {
            console.log('duplicated_tag');
            tagInput.popover({
              trigger: 'manual',
              delay: {
                "show": 250,
                "hide": 0
              }
            });
            tagInput.popover('toggle');
            setTimeout(function () {
              tagInput.popover('toggle');
            }, 4500);
          }
        },
        error: function () {
          console.log('Fail to connect the server');
        }
      });
    }
}