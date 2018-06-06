function updateTaskPositions(){
    
  var dataArray = [];
  
  var currentProject = $('.todo-title').text().trim();
  
  $('.todo-item').each(function(){
    var task = {};
    task[$(this).find('.todo-label').text()] = $(this).attr('data-task-position');
    
    dataArray.push(task);
  });

  var json_positions = JSON.stringify(dataArray);
  console.log(json_positions);
  
  $.post({
        url: 'php/update-modules/update-task-positions.php',
        data: { positions:json_positions,
                project:currentProject},
        success: function (response) {
          console.log('Success to contact the server');
          console.log(response);
        },
        error: function () {
          console.log('Fail to connect the server');
        }
      });

}

function updateProjectPositions(){
    
  var dataArray = new Array();
  
  $('.project-item').each(function(){
    var project = {};
    project[$(this).find('.project-label').text()] = $(this).attr('data-project-position');
    dataArray.push(project);
  });

  var json_positions = JSON.stringify(dataArray);
  console.log(json_positions);
  
  $.post({
        url: 'php/update-modules/update-project-positions.php',
        data: { positions:json_positions},
        success: function (response) {
          console.log('Success to contact the server');
          console.log(response);
        },
        error: function () {
          console.log('Fail to connect the server');
        }
      });
  
}

