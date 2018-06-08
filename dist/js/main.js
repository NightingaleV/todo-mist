function createProject(){if(event.preventDefault(),$(".addProject-input").val()){var o=$(".addProject-form").serialize();console.log(o),console.log("Inline executed"),$.post({url:"php/create-modules/create-project.php",data:o,datatype:FormData,success:function(o){console.log("Success to contact the server"),console.log(o),"project_added"===o&&($("#addProject").removeClass("show"),renderProjects()),"duplicated_project"===o&&console.log("it isnot")},error:function(){console.log("Fail to connect the server")}})}}function createTags(){if(event.preventDefault(),$(".addTag-input").val()){var o=$(".addTag-form").serialize();console.log(o),console.log("Inline executed"),$.post({url:"php/create-modules/create-tag.php",data:o,datatype:FormData,success:function(o){console.log("Success to contact the server"),console.log(o),"tag_added"===o&&($("#addTag").removeClass("show"),renderTags()),"duplicated_tag"===o&&console.log("it isnot")},error:function(){console.log("Fail to connect the server")}})}}function createTask(o){if(event.preventDefault(),"modal"===o){if($("#taskName").val()){var t=$(".addTask-form").serialize();console.log(t),$.post({url:"php/create-modules/create-task.php",data:t,datatype:FormData,success:function(o){(console.log("Success to contact the server"),console.log(o),"task_added"===o)&&renderTasks($(".addTask-form").find("#projectSelect option:selected").text());"duplicated_tasks"===o&&(console.log("it isnot"),$("#taskName").popover({trigger:"manual",delay:{show:250,hide:0}}),$("#taskName").popover("toggle"),setTimeout(function(){$("#taskName").popover("toggle")},4500))},error:function(){console.log("Failure")}})}}else if("inline"===o&&$(".addTaskInline-input").val()){var e=$(".addTaskInline-form").serialize();console.log(e),console.log("Inline executed"),$.post({url:"php/create-modules/create-task.php",data:e,datatype:FormData,success:function(o){if(console.log("Success to contact the server"),console.log(o),"task_added"===o){var t=$(".todo-title").text().trim();$("#addTaskInline").removeClass("show"),renderTasks(t)}"duplicated_tasks"===o&&console.log("it isnot")},error:function(){console.log("Failure")}})}}function projectsDroppable(){$(".project-item, li.inbox-item").droppable({accept:".todo-item",tolerance:"pointer",scope:"tasks",over:function(o,t){$(this).addClass("shadow")},out:function(o,t){$(this).removeClass("shadow")},drop:function(o,t){var e=window.location.href.split("/"),n=$(this).attr("data-project-id"),a=$(t.draggable).find(".todo-label").text(),s=t.draggable.attr("data-project");console.log("Current project:"+s),console.log("Dropped task:"+a),console.log("To project:"+n),n!==s?($(t.draggable).remove(),$.post({url:"php/update-modules/update-task-project.php",data:{currentProject:s,task:a,project:n},success:function(o){console.log("Success to contact the server"),console.log(o)},error:function(){console.log("Fail to connect the server")}}),0<=e[3].indexOf("tag")?t.draggable.animate({top:0,left:0},0):$(t.draggable).remove()):(console.log("same project"),t.draggable.animate({top:0,left:0},0)),$(this).removeClass("shadow")}})}function hoverProjectControls(){$(".project-item").find(".project-right-controls").hide(),$(".project-item").hover(function(){$(this).find(".project-right-controls").fadeIn(200).show(1)},function(){$(this).find(".project-right-controls").fadeIn(200).hide(1)})}function tagsDroppable(){$(".tag-item").droppable({accept:".todo-item",tolerance:"pointer",scope:"tasks",over:function(o,t){$(this).addClass("shadow")},out:function(o,t){$(this).removeClass("shadow")},drop:function(o,t){console.log("Dropped");var e=$(".todo-title").text(),n=$(t.draggable).find(".todo-label").text(),a=$(this).find(".tag-label").text();console.log("Current project:"+e),console.log("Dropped task:"+n),console.log("To tag:"+a),$.post({url:"php/update-modules/update-task-tag.php",data:{currentProject:e,task:n,tag:a},success:function(o){console.log("Success to contact the server"),console.log(o)},error:function(){console.log("Fail to connect the server")}}),$(this).removeClass("shadow"),t.draggable.animate({top:0,left:0},0)}})}function hoverTagControls(){$(".tag-item").find(".tag-controls").hide(),$(".tag-item").hover(function(){$(this).find(".tag-controls").fadeIn(200).show(1)},function(){$(this).find(".tag-controls").fadeIn(200).hide(1)})}function tasksDraggable(){$(".todo-item").draggable({handle:".draggable-action",connectToSortable:".todo-list",revert:"invalid",scroll:!0,zIndex:2500,scope:"tasks"})}function hoverTaskControls(){$(".todo-item").find(".todo-right").hide(),$(".todo-item").hover(function(){$(this).find(".todo-right").show(1)},function(){$(this).find(".todo-right").hide(1)})}function renderProjects(){$.ajax({url:"php/render-modules/render-projects.php",type:"POST",dataType:"html",success:function(o){$(".project-list").empty(),$(".project-list").append(o),renderProjectPositions(),hoverProjectControls(),projectsDroppable()}})}function renderProjectPositions(){$(".project-item").each(function(){$(this).attr("data-project-position",$(this).index())})}function renderTags(){$.ajax({url:"php/render-modules/render-tags.php",type:"POST",dataType:"html",success:function(o){$(".tag-list").empty(),$(".tag-list").append(o)}})}function renderTasks(t){$.ajax({url:"php/render-modules/render-tasks.php",type:"GET",dataType:"html",data:{project:t},success:function(o){$(".todo-list").empty(),$(".todo-list").append(o),hoverTaskControls(),renderProjectTitle(t),addHiddenInput(t),renderTaskPositions(),tasksDraggable()}})}function renderProjectTitle(o){$(".todo-title").text(o)}function addHiddenInput(o){$(".addTaskInline-project").val(o)}function renderTaskPositions(){$(".todo-item").each(function(){$(this).attr("data-task-position",$(this).index())})}function renderTasksByTag(t){$.ajax({url:"php/render-modules/render-tasks.php",type:"GET",dataType:"html",data:{tag:t},success:function(o){$(".todo-list").empty(),$(".todo-list").append(o),hoverTaskControls(),renderFilterTitle(t),addHiddenInput(t),renderTaskPositions(),tasksDraggable(),projectsDroppable()}})}function renderFilterTitle(o){$(".todo-title").text(o)}function sortByPriority(o,t){return $(t).attr("data-task-priority")<=$(o).attr("data-task-priority")?1:-1}function updateTaskPositions(){var t=[],o=$(".todo-title").text().trim();$(".todo-item").each(function(){var o={};o[$(this).find(".todo-label").text()]=$(this).attr("data-task-position"),t.push(o)});var e=JSON.stringify(t);console.log(e),$.post({url:"php/update-modules/update-task-positions.php",data:{positions:e,project:o},success:function(o){console.log("Success to contact the server"),console.log(o)},error:function(){console.log("Fail to connect the server")}})}function updateProjectPositions(){var t=new Array;$(".project-item").each(function(){var o={};o[$(this).find(".project-label").text()]=$(this).attr("data-project-position"),t.push(o)});var o=JSON.stringify(t);console.log(o),$.post({url:"php/update-modules/update-project-positions.php",data:{positions:o},success:function(o){console.log("Success to contact the server"),console.log(o)},error:function(){console.log("Fail to connect the server")}})}function changePriority(o,t,e){var n=$(".todo-title").text().trim();0<=window.location.href.split("/")[3].indexOf("tag")?(console.log("Current tag:"+n),console.log("Task:"+o),console.log("New priority:"+t),$.post({url:"php/update-modules/update-task-priority.php",data:{currentTag:n,tasksProject:e,task:o,priority:t},success:function(o){console.log("Success to contact the server"),console.log(o)},error:function(){console.log("Fail to connect the server")}})):(console.log("Current project:"+n),console.log("Task:"+o),console.log("New priority:"+t),$.post({url:"php/update-modules/update-task-priority.php",data:{currentProject:n,task:o,priority:t},success:function(o){console.log("Success to contact the server"),console.log(o)},error:function(){console.log("Fail to connect the server")}}))}function changePriorityClass(o,t){o.hasClass("priority-1")?o.removeClass("priority-1"):o.hasClass("priority-2")?o.removeClass("priority-2"):o.hasClass("priority-3")?o.removeClass("priority-3"):o.removeClass("priority-4"),o.addClass("priority-"+t)}$("#addProject").on("shown.bs.collapse",function(){$(".addProject-input").val(""),$(".addProject-input").focus(),$(".add-project-icon.arrow").removeClass("d-none"),$(".add-project-icon.plus").addClass("d-none")}),$("#addProject").on("hidden.bs.collapse",function(){$(".add-project-icon.plus").removeClass("d-none"),$(".add-project-icon.arrow").addClass("d-none")}),$(document).on("click",".addProject-btn",function(o){createProject()}),$(".addProject-form").on("submit",function(o){createProject()}),$("#addTag").on("shown.bs.collapse",function(o){$(".addTag-input").val(""),$(".addTag-input").focus(),$(".add-tag-icon.plus").addClass("d-none"),$(".add-tag-icon.arrow").removeClass("d-none")}),$("#addTag").on("hidden.bs.collapse",function(){$(".add-tag-icon.plus").removeClass("d-none"),$(".add-tag-icon.arrow").addClass("d-none")}),$(document).on("click",".addTag-btn",function(o){createTags()}),$(".addTag-form").on("submit",function(o){createTags()}),$("#addTaskInline").on("shown.bs.collapse",function(o){$(".addTaskInline-input").val(""),$(".addTaskInline-input").focus()}),$(document).on("click",".addTaskInline-btn",function(o){createTask("inline")}),$(".addTaskInline-form").on("submit",function(o){createTask("inline")}),$("#addTask").on("show.bs.modal",function(o){$("#taskName").val(""),$("#projectSelect").empty().append('<option value="Inbox" selected>Inbox</option>'),$(".project-item").find(".project-label").each(function(){console.log($(this).html()),$("#projectSelect").append('<option value="'+$(this).text()+'">'+$(this).html()+"</option>")}),$("#tagSelect").empty(),$(".tag-item").find(".tag-label").each(function(){$("#tagSelect").append('<option value="'+$(this).text()+'">#'+$(this).html()+"</option>")})}),$("#addTask").on("shown.bs.modal",function(o){$("#taskName").focus()}),$(document).on("click",".btn-addTask",function(o){createTask("modal")}),$(".addTask-form").on("submit",function(o){createTask("modal")}),$("#taskName").on("keyup blur",function(){$(this).val()?$(this).siblings(".invalid-tooltip").removeClass("d-block").addClass("d-none"):$(this).siblings(".invalid-tooltip").addClass("d-block")}),$(document).on("click",".btn-complete",function(o){event.preventDefault();var t=$(this).parents(".todo-item"),e=t.find(".todo-label").text().trim(),n=t.attr("data-project");console.log(e),$.post({url:"php/update-modules/complete-task.php",data:{tasksProject:n,task:e},success:function(o){console.log("Success to contact the server"),console.log(o),t.remove()},error:function(){console.log("Fail to connect the server")}})}),$(document).on("click",".btn-project-delete",function(o){event.preventDefault();var e=$(this).parents(".project-item").find(".project-label").text();console.log(e),$.post({url:"php/delete-modules/delete-project.php",data:{project:e},datatype:FormData,success:function(o){console.log("Success to contact the server"),console.log(o),renderProjects(),renderTasks("Inbox");var t=$(".todo-title").text();e===t&&(renderTasks("Inbox"),history.replaceState(null,null,"app.php?project=Inbox"))},error:function(){console.log("Failure")}})}),$(document).on("click",".btn-tag-delete",function(o){event.preventDefault();var t=$(this).parents(".tag-item").find(".tag-label").text();console.log(t),$.post({url:"php/delete-modules/delete-tag.php",data:{tag:t},datatype:FormData,success:function(o){console.log("Success to contact the server"),console.log(o),renderTags()},error:function(){console.log("Failure")}})}),$(document).on("click",".btn-task-delete",function(o){event.preventDefault();var t=$(this).parents(".todo-item").find(".todo-label").text();console.log(t);var e=$(".todo-title").text().trim();console.log(e),$.post({url:"php/delete-modules/delete-task.php",data:{project:e,task:t},datatype:FormData,success:function(o){console.log("Success to contact the server"),console.log(o),renderTasks(e)},error:function(){console.log("Failure")}})}),$(document).on("click",".btn-logout",function(o){$.ajax({url:"php/user-modules/user-logout.php",type:"GET",data:{logout:1},success:function(o){console.log(o)}})}),$(function(){$(".project-list").sortable({cursor:"grab",handle:".draggable-action",start:function(){},update:function(o,t){renderProjectPositions()},stop:function(o,t){updateProjectPositions()}})}),projectsDroppable(),hoverProjectControls(),tagsDroppable(),hoverTagControls(),$(function(){$(".todo-list").sortable({cursor:"grab",handle:".draggable-action",start:function(){},update:function(o,t){renderTaskPositions()},stop:function(o,t){updateTaskPositions()}})}),tasksDraggable(),hoverTaskControls(),$(document).ready(function(){$(window).scroll(function(){50<=$(window).scrollTop()?$(".navbar").addClass("navbar-change"):$(".navbar").removeClass("navbar-change")})}),renderProjectPositions(),$(document).on("click","li.project-item, li.inbox-item",function(){var o=$(this).find("span").text();console.log(o),renderTasks(o),history.replaceState(null,null,"app.php?".concat($.param({project:o}))),$(".app").removeClass("tag-filter")}),renderTaskPositions(),$(document).on("click","li.tag-item",function(){var o=$(this).find("span").text();console.log(o),renderTasksByTag(o),history.replaceState(null,null,"app.php?".concat($.param({tag:o}))),$(".app").addClass("tag-filter")}),$(document).on("click",".btn-todo-sort",function(o){event.preventDefault(),$(".todo-list li").sort(sortByPriority).appendTo(".todo-list"),renderTaskPositions(),updateTaskPositions()}),$(document).on("click",".priority-dropdown-item",function(o){event.preventDefault();var t=$(this).parents(".todo-item"),e=t.find(".todo-label").text(),n=t.attr("data-project");console.log(e);var a=1;$(this).hasClass("btn-priority-2")?a=2:$(this).hasClass("btn-priority-3")?a=3:$(this).hasClass("btn-priority-4")?a=a=4:(console.log(a),console.log("No")),changePriority(e,a,n),changePriorityClass(t,a),t.attr("data-task-priority",a)});