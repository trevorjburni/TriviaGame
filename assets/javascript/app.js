window.onload = function() {
    var seconds = 30;
    var intervalId;
    var correct;
    var inCorrect;
    var timeUp;
    var myQuestions = []
    var myAnswer = [""]
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
  };
  
// Main Processes 
// ============================================
// Start countdown 
$("#time-remaining").text("00:60");
function timeConverter(t) {
  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes === 0) {
    minutes = "00";
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }
  return minutes + ":" + seconds;
}
