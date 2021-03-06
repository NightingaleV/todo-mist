
//CREATE TASK THROUGH INLINE TAB
var addTaskInlineInput = $('.addTaskInline-input');
var addTaskInline = $('#addTaskInline');
//auto focus input for task
addTaskInline.on('shown.bs.collapse', function (e) {
  addTaskInlineInput.val('');
  addTaskInlineInput.focus();
});
//Inline form - click add button
$(document).on('click', '.addTaskInline-btn', function (e) {
  createTask('inline');
});
//Inline form - on enter
$('.addTaskInline-form').on('submit', function (e) {
  createTask('inline');
});


//CREATE TASK THROUGHT MODAL
//Modal - render data
$('#addTask').on('show.bs.modal', function (e) {
  //Clear the task input for fresh writing
  $('#taskName').val('');

  //add projects into select box
  $('#projectSelect').empty().append('<option value="Inbox" selected>Inbox</option>');
  $('.project-item')
    .find(".project-label")
    .each(function () {
      console.log($(this).html())
      $('#projectSelect').append('<option value="' + $(this).text() + '">' + $(this).html() + '</option>');
    });

  //add tags into select box
  $("#tagSelect").empty();
  $(".tag-item")
    .find(".tag-label")
    .each(function () {
      $('#tagSelect').append('<option value="' + $(this).text() + '">#' + $(this).html() + '</option>');
    });

});

//Modal - focus input
$('#addTask').on('shown.bs.modal', function (e) {
  //auto focus input for task
  $('#taskName').focus();

});

//Modal - click add button
$(document).on('click', '.btn-addTask', function (e) {
  createTask('modal');
});
//Modal - on enter
$('.addTask-form').on('submit', function (e) {
  createTask('modal');
});

//Modal - Task validation
$('#taskName').on('keyup blur', function () {
  if (!$(this).val()) {
    $(this).siblings('.invalid-tooltip').addClass('d-block');
  } else {
    $(this).siblings('.invalid-tooltip').removeClass('d-block').addClass('d-none');
  }
});

//Ajax for creating new task
function createTask(sourceOfAction) {
  event.preventDefault();
  
  //Request is coming from modal or inline input
  if (sourceOfAction === 'modal') {
    //Grab the current project to rerender

    if ($('#taskName').val()) {
      var formData = $('.addTask-form').serialize();
      console.log(formData);
      $.post({
        url: 'php/create-modules/create-task.php',
        data: formData,
        datatype: FormData,
        success: function (response) {
          console.log('Success to contact the server');
          console.log(response);
          if (response === 'task_added') {
            //succesfull add
            var modalSelectedProject = $('.addTask-form').find('#projectSelect option:selected').text();
            renderTasks(modalSelectedProject);
          }
          if (response === 'duplicated_tasks') {
            console.log('it isnot');
            $('#taskName').popover({
              trigger: 'manual',
              delay: {
                "show": 250,
                "hide": 0
              }
            });
            $('#taskName').popover('toggle');
            setTimeout(function () {
              $('#taskName').popover('toggle');
            }, 4500);

          }
        },
        error: function () {
          console.log('Failure');
        }
      });
    }
  } else if (sourceOfAction === 'inline') {
    if($('.addTaskInline-input').val()){
      //Grab the form data
      var formInlineData = $('.addTaskInline-form').serialize();
      console.log(formInlineData);
      console.log('Inline executed');
      
      //Post the inline form
      $.post({
        url: 'php/create-modules/create-task.php',
        data: formInlineData,
        datatype: FormData,
        success: function (response) {
          console.log('Success to contact the server');
          console.log(response);
          if (response === 'task_added') {
            //succesfull add
            var currentProject = $('.todo-title').text().trim();

            $('#addTaskInline').removeClass('show');
            renderTasks(currentProject);
          }
          if (response === 'duplicated_tasks') {
            console.log('duplicated_tasks');
            addTaskInlineInput.popover({
              trigger: 'manual',
              delay: {
                "show": 250,
                "hide": 0
              }
            });
            addTaskInlineInput.popover('toggle');
            setTimeout(function () {
              addTaskInlineInput.popover('toggle');
            }, 4500);
          }
        },
        error: function () {
          console.log('Failure');
        }
      });
    }
  }
}
