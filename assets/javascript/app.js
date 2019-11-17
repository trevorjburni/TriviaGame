window.onload = function () {
  var seconds = 30;
  var intervalId;
  var correct;
  var inCorrect;
  var myQuestions = []
  var myAnswer = [""]

  $("#start-button").on("click", function () {
    console.log("start was clicked");
    $(".trivia").show();
    $(".start").hide();

    setTimeout(timeUp, 1000 * 30);
    // Start function 
    function start() {
      intervalId = setInterval(count, 1000);
    }
    // Count function
    function count() {
      // DONE: increment time by 1, remember we cant use "this" here.
      seconds--;
      var converted = timeConverter(seconds);
      console.log(converted);
      // DONE: Use the variable we just created to show the converted time in the "display" div.
      $("#time-remaining").text(converted);
    }
    start();
    // Time's up function
    function timeUp() {
      $("#time-remaining").text("Time's up!");
      clearInterval(intervalId);
    }
    // ============================================
    // Start countdown 
    $("#time-remaining").text("00:30");

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
  });
}