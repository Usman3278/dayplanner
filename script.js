$(document).ready(function () {
  // *******display present day*********
  var presentDay = $("#currentDay");
  var todayDay = moment().format("dddd, MMMM Do YYYY");
  presentDay.text(todayDay);

  // *******reload previous tasks**********
  $("#note1").val(localStorage.getItem("task1"));
  $("#note2").val(localStorage.getItem("task2"));
  $("#note3").val(localStorage.getItem("task3"));
  $("#note4").val(localStorage.getItem("task4"));
  $("#note5").val(localStorage.getItem("task5"));
  $("#note6").val(localStorage.getItem("task6"));
  $("#note7").val(localStorage.getItem("task7"));
  $("#note8").val(localStorage.getItem("task8"));
  $("#note9").val(localStorage.getItem("task9"));

  //*******color code per time**********
  var now = moment().hour();
  if (now < 9) {
    $("#note1").addClass("future");
    $("#note2").addClass("future");
    $("#note3").addClass("future");
    $("#note4").addClass("future");
    $("#note5").addClass("future");
    $("#note6").addClass("future");
    $("#note7").addClass("future");
    $("#note8").addClass("future");
    $("#note9").addClass("future");
  } else if (now >= 18) {
    $("#note1").addClass("past");
    $("#note2").addClass("past");
    $("#note3").addClass("past");
    $("#note4").addClass("past");
    $("#note5").addClass("past");
    $("#note6").addClass("past");
    $("#note7").addClass("past");
    $("#note8").addClass("past");
    $("#note9").addClass("past");
  } else if (now >= 9 && now < 18) {
    if (now === 9) {
      $("#note1").addClass("present");
      $("#note2").addClass("future");
      $("#note3").addClass("future");
      $("#note4").addClass("future");
      $("#note5").addClass("future");
      $("#note6").addClass("future");
      $("#note7").addClass("future");
      $("#note8").addClass("future");
      $("#note9").addClass("future");
    } else if (now === 10) {
      $("#note1").addClass("past");
      $("#note2").addClass("present");
      $("#note3").addClass("future");
      $("#note4").addClass("future");
      $("#note5").addClass("future");
      $("#note6").addClass("future");
      $("#note7").addClass("future");
      $("#note8").addClass("future");
      $("#note9").addClass("future");
    } else if (now === 11) {
      $("#note1").addClass("past");
      $("#note2").addClass("past");
      $("#note3").addClass("present");
      $("#note4").addClass("future");
      $("#note5").addClass("future");
      $("#note6").addClass("future");
      $("#note7").addClass("future");
      $("#note8").addClass("future");
      $("#note9").addClass("future");
    } else if (now === 12) {
      $("#note1").addClass("past");
      $("#note2").addClass("past");
      $("#note3").addClass("past");
      $("#note4").addClass("present");
      $("#note5").addClass("future");
      $("#note6").addClass("future");
      $("#note7").addClass("future");
      $("#note8").addClass("future");
      $("#note9").addClass("future");
    } else if (now === 13) {
      $("#note1").addClass("past");
      $("#note2").addClass("past");
      $("#note3").addClass("past");
      $("#note4").addClass("past");
      $("#note5").addClass("present");
      $("#note6").addClass("future");
      $("#note7").addClass("future");
      $("#note8").addClass("future");
      $("#note9").addClass("future");
    } else if (now === 14) {
      $("#note1").addClass("past");
      $("#note2").addClass("past");
      $("#note3").addClass("past");
      $("#note4").addClass("past");
      $("#note5").addClass("past");
      $("#note6").addClass("present");
      $("#note7").addClass("future");
      $("#note8").addClass("future");
      $("#note9").addClass("future");
    } else if (now === 15) {
      $("#note1").addClass("past");
      $("#note2").addClass("past");
      $("#note3").addClass("past");
      $("#note4").addClass("past");
      $("#note5").addClass("past");
      $("#note6").addClass("past");
      $("#note7").addClass("present");
      $("#note8").addClass("future");
      $("#note9").addClass("future");
    } else if (now === 16) {
      $("#note1").addClass("past");
      $("#note2").addClass("past");
      $("#note3").addClass("past");
      $("#note4").addClass("past");
      $("#note5").addClass("past");
      $("#note6").addClass("past");
      $("#note7").addClass("past");
      $("#note8").addClass("present");
      $("#note9").addClass("future");
    } else if (now === 17) {
      $("#note1").addClass("past");
      $("#note2").addClass("past");
      $("#note3").addClass("past");
      $("#note4").addClass("past");
      $("#note5").addClass("past");
      $("#note6").addClass("past");
      $("#note7").addClass("past");
      $("#note8").addClass("past");
      $("#note9").addClass("present");
    }
  }
});

//********clear local storage and reload*********
$("#clear").click(function () {
  localStorage.clear();
  location.reload();
});

// ******saving tasks to local storage***********
$("#saveNote1").click(function () {
  let task = $("#note1").val();
  localStorage.setItem("task1", task);
});

$("#saveNote2").click(function () {
  let task = $("#note2").val();
  localStorage.setItem("task2", task);
});

$("#saveNote3").click(function () {
  let task = $("#note3").val();
  localStorage.setItem("task3", task);
});

$("#saveNote4").click(function () {
  let task = $("#note4").val();
  localStorage.setItem("task4", task);
});

$("#saveNote5").click(function () {
  let task = $("#note5").val();
  localStorage.setItem("task5", task);
});

$("#saveNote6").click(function () {
  let task = $("#note6").val();
  localStorage.setItem("task6", task);
});

$("#saveNote7").click(function () {
  let task = $("#note7").val();
  localStorage.setItem("task7", task);
});

$("#saveNote8").click(function () {
  let task = $("#note8").val();
  localStorage.setItem("task8", task);
});

$("#saveNote9").click(function () {
  let task = $("#note9").val();
  localStorage.setItem("task9", task);
});
