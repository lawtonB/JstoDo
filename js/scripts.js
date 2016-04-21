//business logic
function toDo(chore){
  this.chore = chore;
  this.tasklists = [];
}

function tasklist(task1, task2){
  this.task1 = task1;
  this.task2 = task2;
}

tasklist.prototype.fulltask = function() {
  return this.task1 + ", " + this.task2;
}

//front end logic
$(document).ready(function(){

  $("#new-chore").submit(function(event) {
    event.preventDefault();

    var inputtedchore = $("input#new-first-chore").val();
    var newChore = new toDo(inputtedchore);

  $(".new-tasklist").each(function(){
    var inputtedtask1 = $(this).find("input.new-task1").val();
    var inputtedtask2 = $(this).find("input.new-task2").val();
    var newTasklist = new tasklist(inputtedtask1, inputtedtask2)
    newChore.tasklists.push(newTasklist)
  });

  $("ul#chores").append("<li><span class='chore'>" + inputtedchore + "</span></li>");

  $("#chores").last().click(function() {
  $("#show-tasklist").show();
  $("#show-tasklist h2").text(inputtedchore);
  // $(".first-chore").text(inputtedchore);
  $("ul#tasklists").text("");
  newChore.tasklists.forEach(function(tasklist) {
    $("ul#tasklists").append("<li>" + tasklist.task1 + "</li>" + "<li>" + tasklist.task2 + "</li>");


      });
    });
  });
});
