//CREATE TASK THROUGHT INLINE TAB
//auto focus input for task
$('#addTaskInline').on('shown.bs.collapse', function (e) {
  
  $('.addTaskInline-input').focus();
});


//CREATE TASK THROUGHT MODAL
//Modal - render data
$('#addTask').on('show.bs.modal', function (e) {
  //Clear the task input for fresh writing
  $('#taskName').val('');

  //add projects into select box
  $('#projectSelect').empty().append('<option value="Inbox" selected>Inbox</option>');
  $('.project-item')
    .children(".project-label")
    .each(function () {
      $('#projectSelect').append('<option value="' + $(this).text() + '">' + $(this).text() + '</option>');
    });

  //add tags into select box
  $("#tagSelect").empty();
  $(".tag-item")
    .children(".tag-label")
    .each(function () {
      $('#tagSelect').append('<option value="' + $(this).text() + '">#' + $(this).text() + '</option>');
    });

});

//Modal - focus input
$('#addTask').on('shown.bs.modal', function (e) {
  //auto focus input for task
  $('#taskName').focus();

});

//Ajax for creating new task
function createTask() {
  event.preventDefault();

  if ($('#taskName').val()) {
    var formData = $('.addTask-form').serialize();
    console.log(formData);
    //Grab the current project to rerender
    var currentProject = $('.addTask-form').find('#projectSelect option:selected').text();

    $.post({
      url: 'php/create-modules/create-task.php',
      data: formData,
      datatype: FormData,
      success: function (response) {
        console.log('Success to contact the server');
        console.log(response);
        if (response === 'task_added') {

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
}

//Modal - click add button
$(document).on('click', '.btn-addTask', function (e) {
  createTask();
});
//Modal - on enter
$('.addTask-form').on('submit', function (e) {
  createTask();
});

//Task validation
$('#taskName').on('keyup blur', function () {
  if (!$(this).val()) {
    $(this).siblings('.invalid-tooltip').addClass('d-block');
  } else {
    $(this).siblings('.invalid-tooltip').removeClass('d-block').addClass('d-none');
  }
});