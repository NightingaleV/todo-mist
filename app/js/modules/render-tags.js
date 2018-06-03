function renderTags() {
  $.ajax({
    url: 'php/render-modules/render-tags.php',
    type: 'POST',
    dataType: 'html',
    success: function (response) {
      $('.tag-list').empty();
      $('.tag-list').append(response);
    }
  });
}