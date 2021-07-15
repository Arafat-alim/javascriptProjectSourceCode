const timer = document.getElementById("display");
var startId = document.getElementById("startId");
var stopId = document.getElementById("pauseId");
var resetId = document.getElementById("resetId");
let sec = 0;
let min = 0;
let hours = 0;
var stopTime = true;

function start() {
  if (stopTime == true) {
    stopTime = false;
    startId.disabled = true;
    stopId.disabled = false;
    resetId.disabled = false;
    timerCycle();
  }
}
function stop() {
  if (stopTime == false) {
    stopTime = true;
    document.getElementById("pauseId").innerHTML = "Continue";
  } else {
    stopTime = false;
    document.getElementById("pauseId").innerHTML = "Stop";
    timerCycle();
  }
}

function timerCycle() {
  if (stopTime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hours = parseInt(hours);
    sec++;
    if (sec == 60) {
      min++;
      sec = 0;
    }
    if (min == 60) {
      hours++;
      sec = 0;
      min = 0;
    }
    if (sec < 10 || sec == 0) {
      sec = "0" + sec;
    }
    if (min < 10 || min == 0) {
      min = "0" + min;
    }
    if (hours < 10 || hours == 0) {
      hours = "0" + hours;
    }

    //time to display
    timer.innerHTML = hours + ":" + min + ":" + sec;

    setTimeout("timerCycle()", 1000);
  }

  //  document.getElementById("display").innerHTML = hours + ":" + min + ":" + sec;
}

function reset() {
  startId.disabled = false;
  resetId.disabled = true;
  stopId.disabled = true;
  timer.innerHTML = "00:00:00";
  stopTime = true;
  sec = 0;
  min = 0;
  hours = 0;

  document.getElementById("pauseId").innerHTML = "Stop";
}
