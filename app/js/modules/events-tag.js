//Drop task into project
function tagsDroppable() {
  $(".tag-item").droppable({
    accept: '.todo-item',
    tolerance: 'pointer',
    scope: 'tasks',
    over: function(event, ui){
      $(this).addClass('shadow');
    },
    out: function(event, ui){
      $(this).removeClass('shadow');
    },
    drop: function (event, ui) {
      
      console.log('Dropped');
      var currentProject = $('.todo-title').text();
      var droppedTask = $(ui.draggable).find('.todo-label').text();
      var toTag = $(this).find('.tag-label').text();
      console.log('Current project:'+currentProject);
      console.log('Dropped task:'+droppedTask);
      console.log('To tag:'+toTag);
      
      $.post({
        url: 'php/update-modules/update-task-tag.php',
        data: { currentProject:currentProject,
                task:droppedTask,
                tag:toTag},
        success: function (response) {
          console.log('Success to contact the server');
          console.log(response);
        },
        error: function () {
          console.log('Fail to connect the server');
        }
      }); 
      $(this).removeClass('shadow');
      ui.draggable.animate({top:0,left:0},0);

    }
  });
}
//Init for first load of the app page
tagsDroppable();

//HIDE/SHOW controls
function hoverTagControls(){
    $('.tag-item').find('.tag-controls').hide();
    $('.tag-item').hover(
        function () {
            $(this).find('.tag-controls').fadeIn(200).show(1);
        },
        function () {
            $(this).find('.tag-controls').fadeIn(200).hide(1);
        }
    );
}
hoverTagControls();