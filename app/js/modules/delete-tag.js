
$(document).on('click', '.btn-tag-delete',function(e){
  event.preventDefault();
  
  var tagToDelete = $(this).parents('.tag-item').find('.tag-label').text();
  console.log(tagToDelete);
  
  $.post({
    url: 'php/delete-modules/delete-tag.php',
    data: {tag:tagToDelete},
    datatype: FormData,
    success: function(response){
      console.log('Success to contact the server');
      console.log(response);
      renderTags();
    },
    error: function(){
      console.log('Failure');
    }
  });
});
