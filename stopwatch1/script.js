const stopwatch = document.querySelector('.stopwatch');
const display = stopwatch.querySelector('.display');
const startBtn = stopwatch.querySelector('.start');
const stopBtn = stopwatch.querySelector('.stop');
const resetBtn = stopwatch.querySelector('.reset');

let startTime;
let elapsedTime = 0;
let timerId;

function formatTime(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function update() {
  const now = Date.now();
  elapsedTime = Math.floor((now - startTime) / 1000);
  display.textContent = formatTime(elapsedTime);
}

function start() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = true;
  startTime = Date.now() - elapsedTime * 1000;
  timerId = setInterval(update, 1000);
}

function stop() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = false;
  clearInterval(timerId);
}

function reset() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = true;
  clearInterval(timerId);
  display.textContent = '00:00:00';
  elapsedTime = 0;
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);
