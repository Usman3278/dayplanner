$(document).ready(function () {
    // display present day
    var presentDay = $("#currentDay");
    var todayDay = moment().format("dddd, MMMM Do YYYY");
    presentDay.text(todayDay);
  
    // color code per time
    var now = moment().hour();
    // 9am
    if (now > 9) {
      $("#note1").addClass("past");
      if (now >= 9 && now < 10) {
        $("#note1").addClass("present");
      } else {
        $("#note1").addClass("future");
      }
    }
    //10 am
    if (now > 10) {
      $("#note2").addClass("past");
      if (now >= 10 && now < 11) {
        $("#note2").addClass("present");
      } else {
        $("#note2").addClass("future");
      }
    }
    // 11 am
    if (now > 11) {
      $("#note3").addClass("past");
      if (now >= 11 && now < 12) {
        $("#note3").addClass("present");
      } else {
        $("#note3").addClass("future");
      }
    }
    // 12 pm
    if (now > 12) {
      $("#note4").addClass("past");
      if (now >= 12 && now < 13) {
        $("#note4").addClass("present");
      } else {
        $("#note4").addClass("future");
      }
    }
    // 1 pm
    if (now > 13) {
      $("#note5").addClass("past");
      if (now >= 13 && now < 14) {
        $("#note5").addClass("present");
      } else {
        $("#note5").addClass("future");
      }
    }
    // 2pm
    if (now > 14) {
      $("#note6").addClass("past");
      if (now >= 14 && now < 15) {
        $("#note6").addClass("present");
      } else {
        $("#note6").addClass("future");
      }
    }
    //3 pm
    if (now > 15) {
      $("#note7").addClass("past");
      if (now >= 15 && now < 16) {
        $("#note7").addClass("present");
      } else {
        $("#note7").addClass("future");
      }
    }
    // 4 pm
    if (now > 16) {
      $("#note8").addClass("past");
      if (now >= 16 && now < 17) {
        $("#note8").addClass("present");
      } else {
        $("#note8").addClass("future");
      }
    }
    //5 pm
    if (now > 17) {
      $("#note9").addClass("past");
      if (now >= 17 && now < 18) {
        $("#note9").addClass("present");
      } else {
        $("#note9").addClass("future");
      }
    }
  
    // reload previous tasks
    $("#note1").val(localStorage.getItem("task1"));
    $("#note2").val(localStorage.getItem("task2"));
    $("#note3").val(localStorage.getItem("task3"));
    $("#note4").val(localStorage.getItem("task4"));
    $("#note5").val(localStorage.getItem("task5"));
    $("#note6").val(localStorage.getItem("task6"));
    $("#note7").val(localStorage.getItem("task7"));
    $("#note8").val(localStorage.getItem("task8"));
    $("#note9").val(localStorage.getItem("task9"));
  });
  
  //clear local storage and reload
  $("#clear").click(function () {
    localStorage.clear();
    location.reload();
  });
  
  // saving tasks to locaal storage
  $("#saveNote1").click(updateTask1);
  function updateTask1() {
    let task = $("#note1").val();
    localStorage.setItem("task1", task);
    console.log(task);
  }
  
  $("#saveNote2").click(updateTask2);
  function updateTask2() {
    let task = $("#note2").val();
    localStorage.setItem("task2", task);
    console.log(task);
  }
  
  $("#saveNote3").click(updateTask3);
  function updateTask3() {
    let task = $("#note3").val();
    localStorage.setItem("task3", task);
    console.log(task);
  }
  
  $("#saveNote4").click(updateTask4);
  function updateTask4() {
    let task = $("#note4").val();
    localStorage.setItem("task4", task);
    console.log(task);
  }
  
  $("#saveNote5").click(updateTask5);
  function updateTask5() {
    let task = $("#note5").val();
    localStorage.setItem("task5", task);
    console.log(task);
  }
  
  $("#saveNote6").click(updateTask6);
  function updateTask6() {
    let task = $("#note6").val();
    localStorage.setItem("task6", task);
    console.log(task);
  }
  
  $("#saveNote7").click(updateTask7);
  function updateTask7() {
    let task = $("#note7").val();
    localStorage.setItem("task7", task);
    console.log(task);
  }
  
  $("#saveNote8").click(updateTask8);
  function updateTask8() {
    let task = $("#note8").val();
    localStorage.setItem("task8", task);
    console.log(task);
  }
  
  $("#saveNote9").click(updateTask9);
  function updateTask9() {
    let task = $("#note9").val();
    localStorage.setItem("task9", task);
    console.log(task);
  }