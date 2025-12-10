const resetBtn = document.getElementById('reset')
const playBtn = document.getElementById('play')
const timerEl = document.getElementById('timer')
const secondsEl = document.getElementById('seconds')
const root = document.querySelector(':root')

// Initial setup
let secondsValue = 0
let totalSeconds = 0
let playing = false
let currentSeconds
timerEl.innerText = formatTime(totalSeconds)

// Get value from input
secondsEl.addEventListener('input', (e) => {
  secondsValue = Number(e.target.value); // <-- convert to number
  totalSeconds = secondsValue;
  currentSeconds = secondsValue;
  timerEl.innerText = formatTime(currentSeconds)
})

console.log(secondsValue);

// Run the run() function every second
const timerInterval = setInterval(run, 1000)

// Event listeners
playBtn.addEventListener('click', () => {
  playing = !playing
  playBtn.classList.toggle('play')
  playBtn.classList.toggle('bg-green-500')
  const playIcon = playBtn.querySelector('i')
  playIcon.classList.toggle('fa-play')
  playIcon.classList.toggle('fa-pause')
})

// Run the timer
function run() {
  if(playing){
    currentSeconds -= 1
    if(currentSeconds <= 0) {
      clearInterval(timerInterval)
      resetAll()
    }

    timerEl.innerText = formatTime(currentSeconds)
    root.style.setProperty('--degrees', calcDeg())
  }
}

// Calculate degrees
function calcDeg() {
  return `${360 - (currentSeconds / totalSeconds) * 360}deg`
}

// Reset timer
function resetAll() {
  playing = false;
  playBtn.classList.remove('play')
  playBtn.classList.remove('bg-green-500')
  const playIcon = playBtn.querySelector('i')
  playIcon.classList.add('fa-play')
  playIcon.classList.remove('fa-pause')
  currentSeconds = totalSeconds
  timerEl.innerText = formatTime(totalSeconds)
  root.style.setProperty('--degrees', '0deg')
}

// Format time
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60)
  const newSeconds = seconds % 60

  return `${minutes.toString().padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`
}

resetBtn.addEventListener('click', resetAll)