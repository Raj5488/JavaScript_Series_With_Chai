// Define variables to hold the time values
let hours = 0;
let minutes = 0;
let seconds = 0;
let isRunning = false;

// Function to update the stopwatch display
function updateStopwatch() {
    const stopwatchDisplay = document.querySelector('.stopwatch');
    stopwatchDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Function to start the stopwatch
function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(function () {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateStopwatch();
        }, 10);
    }
}

// Function to stop the stopwatch
function stopTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
}

// Function to reset the stopwatch
function resetTimer() {
    stopTimer();
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateStopwatch();
}

// Add event listeners to buttons
document.querySelector('"start"').addEventListener('click', startTimer);
document.querySelector('"stop"]').addEventListener('click', stopTimer);
document.querySelector('"reset"]').addEventListener('click', resetTimer);

// Initial display
updateStopwatch();
