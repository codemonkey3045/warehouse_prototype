var tasks = [
  {
    "id": "1234",
    "pickUp": "340",
    "dropOff": "E3",
    "item": "Fade Away",
    "author": "Myron Bolitar",
    "image": "fade-away.jpg",
    "urgency": "30 min",
    "width": "6 in",
    "height": "8 in",
    "weight": "1.2 lbs",
    "status": "new",
    "owner": "current"
  },
  {
    "id": "12345",
    "pickUp": "100",
    "dropOff": "E3",
    "item": "The Last Magazine",
    "author": "Michael Hastings",
    "image": "the-last-magazine.jpg",
    "urgency": "45 min",
    "width": "6 in",
    "height": "8 in",
    "weight": "1.2 lbs",
    "status": "new",
    "owner": "null"
  },
  {
    "id": "123456",
    "pickUp": "330",
    "dropOff": "Z1",
    "item": "The Museum of Extraordinary Things",
    "author": "Alice Hoffman",
    "image": "the-museum-of-extraordinary-things.jpg",
    "urgency": "1 hr",
    "width": "6 in",
    "height": "8 in",
    "weight": "1.2 lbs",
    "status": "new",
    "owner": "null"
  },
  {
    "id": "1234567",
    "pickUp": "341",
    "dropOff": "DA3",
    "item": "Wish You Happy Forever 1",
    "author": "Jenny Bowen",
    "image": "wish-you-happy-forever.jpg",
    "urgency": "6 hr",
    "width": "6 in",
    "height": "8 in",
    "weight": "1.2 lbs",
    "status": "new",
    "owner": "null"
  },
  {
    "id": "12345678",
    "pickUp": "320",
    "dropOff": "DA3",
    "item": "Wish You Happy Forever 2",
    "author": "Jenny Bowen",
    "image": "wish-you-happy-forever.jpg",
    "urgency": "",
    "width": "6 in",
    "height": "8 in",
    "weight": "1.2 lbs",
    "status": "levi",
    "owner": "null"
  },
  {
    "id": "123456789",
    "pickUp": "320",
    "dropOff": "DA3",
    "item": "Wish You Happy Forever 3? I'm not creative. Sorry",
    "author": "Jenny Bowen",
    "image": "wish-you-happy-forever.jpg",
    "urgency": "28 min",
    "width": "6 in",
    "height": "8 in",
    "weight": "1.2 lbs",
    "status": "pending",
    "owner": "null"
  }
];
//
//$(document).on('displaySuggestions', function() {
//  //TODO implement this!
//  var pickUpLocations = [],
//      dropOffLocations = [],
//      chosenTasks = $('tr.chosen'),
//      i;
//
//  if (chosenTasks.length === 0) {
//    $('#moversStartJob').attr('href', '').text('Choose Jobs');
//    return; //Nothing is chosen.
//  } else {
//    //start job
//    $('#moversStartJob').attr('href', '#moversJob').text('Click to Start job');
//    //Let's find all tasks with the same pickup or the same dropoff
//    for (i = 0; i < chosenTasks.length; i += 1) {
//
//    }
//  }
//});
//
//$(document).on('click', 'tbody#regularTasks tr, tbody#leviTasks tr', function() {
//  var clickedTaskId = $(this).attr('data-taskid');
//  $(this).toggleClass('chosen');
//
//  //Moving to 'start job'
////    if ($(this).hasClass('chosen')) {
////      putChosenTaskById(clickedTaskId);
////    } else {
////      deleteChosenTaskById(clickedTaskId);
////    }
//
//  $(document).trigger('displaySuggestions');
//});
//
//function putChosenTaskById(id) {
//  var chosen = getChosenTaskIds();
//  chosen.push(id);
//  window.localStorage.setItem('chosenTasks', JSON.stringify(chosen));
//  return true;
//}
//
//function indexChosenTaskById(id) {
//  var tasks = getAllTasks(), i;
//  for (i = 0; i < tasks.length; i += 1) {
//    if (tasks[i].id === id) { return i; }
//  }
//  return -1;
//}
//
//function deleteChosenTaskById(id) {
//  var chosen = getChosenTaskIds();
//  var index = indexChosenTaskById(id);
//
//  if (index > -1) {
//    chosen.splice(index, 1);
//    window.localStorage.setItem('chosenTasks', JSON.stringify(chosen));
//    return true;
//  } else {
//    return false;
//  }
//}
//
//function getChosenTaskIds() {
//  if (window.localStorage) {
//    if (window.localStorage.getItem('chosenTasks')) {
//      //record already exists
//      //TODO remove sort and reverse! after adding id to tasks
//      return JSON.parse(window.localStorage.getItem('chosenTasks')).sort().reverse();
//    } else {
//      //need to create record. doesn't exist yet
//      window.localStorage.setItem('chosenTasks', JSON.stringify([]));
//      return [];
//    }
//  }
//}
//
//function getAllTasks() {
//  return JSON.parse(window.localStorage.getItem('tasks'));
//}
//
//
//function updateAllTasks() {
//  //TODO assign IDs to the task items. We can't rely on array index to start consistent.
//  var tasks = getAllTasks(), chosenTasks = getChosenTaskIds(), index, taskId;
//  if (tasks && tasks.length > 0 && chosenTasks && chosenTasks.length > 0) {
//    for (index = 0; index < chosenTasks.length; index += 1) {
//      taskId = chosenTasks[index];
//      tasks.splice(taskId, 1);
//    }
//  }
//}
//
//$(document).on( "pageshow", "#moversJob", function( event ) {
//  var $pContainer = $('tbody#moversJobContainer'),
//      allTasks = getAllTasks(),
//      taskId,
//      taskData,
//      $task;
//
//  //resets to task lists.
//  updateAllTasks();
//  $('#moversJobContainer tr[data-taskid]').remove();
//
//  //append new tasks
//  $('tr.chosen').each(function() {
//    taskId = $(this).attr('data-taskid');
//    taskData = allTasks[taskId];
//
//    $task = $('tr#templateCurrentMoverTask').clone();
//    $task.removeAttr('id').attr('data-taskid', taskId);
//    $task.attr('data-sku', taskData.title);
//    $task.find('.pickup').text(taskData.pickUp);
//    $task.find('.dropoff').text(taskData.dropOff);
//    $task.find('.item').html('<img src="' + 'images/' + taskData.image + '"/>'
//      + '<span class="title">' + taskData.item + '</span>'
//      + '<br />'
//      + '<span class="author">' + taskData.author + '</span>'
//      + '<br />'
//      + '<span class="width">' + taskData.width + '</span>'
//      + ' x '
//      + '<span class="height">' + taskData.height + '</span>'
//      + '<span class="weight">' + taskData.weight + '</span>');
//    $task.find('.urgency').text(taskData.urgency);
//    $pContainer.append($task);
//  });
//});


$(document).on( "pageinit", "#movers", function( event ) {
  var tasksLength = tasks.length,
      $newTask,
      i;

  for(i = 0; i < tasksLength; i += 1) {
    $newTask = $('tr#templateMoversTask').clone();
    $newTask.removeAttr('id').attr('data-taskid', tasks[i].id);
    $newTask.attr('data-sku', tasks[i].title);  //TODO placeholder
    $newTask.find('.pickup').text(tasks[i].pickUp);
    $newTask.find('.dropoff').text(tasks[i].dropOff);
    $newTask.find('.item').html('<span class="title">' + tasks[i].item + '</span>' +
      '<span>' + " (status: " + tasks[i].status + ')</span>');
    $newTask.find('.urgency').text(tasks[i].urgency);

    //TODO add status to each status item. Check with Del about sessions, etc?
    if (tasks[i].status === 'pending') {
      $('#moversTaskTable tbody#pendingTasks').append($newTask);
    } else if (tasks[i].status === 'levi') {
      $('#moversTaskTable tbody#leviTasks').append($newTask);
    } else {
      $('#moversTaskTable tbody#regularTasks').append($newTask);
    }
  }

  //TODO add listener to each row.
  //on click, highlight all that are same ship or drop

  //move them to pending
  //make section for levi
});