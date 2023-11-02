let time = 3;
let intervalID;
const timerElement = document.querySelector("[data-timer]");
const timeUpElement = document.querySelector(".timeUp");
let isTimerRunning = false;
let alarm = document.getElementById("alarm");

function updateTime() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");
  return `${formattedMinutes}:${formattedSeconds}`;
}

function updateTimer() {
  time--;
  if (time === 0) {
    stopTimer();
    alarmPlay();
    timeUpElement.classList.remove("d-none");
  } else if (time % 100 === 0) {
    time += 60;
  }
  timerElement.innerText = updateTime();
}

function startTimer() {
  if (!isTimerRunning) {
    intervalID = setInterval(updateTimer, 1000);
    isTimerRunning = true;
  }
}

function stopTimer() {
  clearInterval(intervalID);
  isTimerRunning = false;
}

function resetTimer() {
  clearInterval(intervalID);
  time = 1500;
  if (!isTimerRunning) {
    timerElement.innerText = updateTime();
    timeUpElement.classList.add("d-none");
    stopAlarm();
  }
}

function alarmPlay() {
  alarm.play();
  alarm.loop = true;
}

function stopAlarm() {
  alarm.pause();
  alarm.loop = false;
}

timerElement.innerText = updateTime();

document.querySelector("[data-start]").addEventListener("click", startTimer);
document.querySelector("[data-stop]").addEventListener("click", stopTimer);
document.querySelector("[data-reset]").addEventListener("click", resetTimer);
