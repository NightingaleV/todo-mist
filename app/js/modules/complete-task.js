//Click on button complete a task
$(document).on('click', '.btn-complete',function(e){
    event.preventDefault();
    var changedItem = $(this).parents('.todo-item');
    var taskToComplete = changedItem.find('.todo-label').text().trim();
    var tasksProjectId = changedItem.attr('data-project');
    console.log(taskToComplete);

    $.post({
        url: 'php/update-modules/complete-task.php',
        data: {
            tasksProject:tasksProjectId,
            task:taskToComplete,
        },
        success: function (response) {
            console.log('Success to contact the server');
            console.log(response);
            changedItem.remove();
        },
        error: function () {
            console.log('Fail to connect the server');
        }
    });
});