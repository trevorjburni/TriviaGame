window.onload = function () {
  var seconds = 30;
  var intervalId;
  var correct = 0;
  var timeOut;

  $("#start-button").on("click", function () {
    $("#time-remaining").text("00:30");
    $(".trivia").show();
    $(".start").hide();
    $(".results").hide();
    start();
  });

  $("#done-button").on("click", function () {
    timeUp();

  });

  // Start function 
  function start() {
    seconds = 30;
    correct = 0;
    intervalId = setInterval(count, 1000);
    timeOut = setTimeout(timeUp, 1000 * 30);
  }
  // Count function
  function count() {
    // DONE: increment time by 1, remember we cant use "this" here.
    seconds--;
    var converted = timeConverter(seconds);
    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#time-remaining").text(converted);
  }

  // Time's up function
  function timeUp() {
    $("#time-remaining").text("Time's up!");
    clearTimeout(timeOut);
    clearInterval(intervalId);
    $(".trivia").hide();
    $(".start").show();
    check();
    $(".results").show();

  }

  function check() {

    if ($("#richard").is(':checked'))
      correct++;

    if ($("#year-1967").is(':checked'))
      correct++;

    if ($("#cents-45").is(":checked"))
      correct++;

    if ($("#countries-119").is(":checked"))
      correct++;

    if ($("#true").is(":checked"))
      correct++;

    $("#score").text("You got " + correct + " out of 5 correct.")

  }

  // Time converter
  function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes === 0) {
      minutes = "00";
    } else if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
  }
}