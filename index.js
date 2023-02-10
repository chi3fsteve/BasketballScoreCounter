let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

let homeScoreContainerEl = document.getElementById("home-score-container")
let guestScoreContainerEl = document.getElementById("guest-score-container")

let homeScore = 0
let guestScore = 0

let homeNameContainerEl = document.getElementById("home-name-container")
let guestNameContainerEl = document.getElementById("guest-name-container")

let homeLogsEl = document.getElementById("logs-home")
let guestLogsEl = document.getElementById("logs-guest")

const startTimerBtn = document.getElementById("startTimer");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");

let seconds = 0;
let minutes = 0;
let interval;

let pauseButtonEl = document.getElementById("pause-button")
let isPaused = false;

function startTimer() {
    clearInterval(interval);
    interval = null;
    minutesDisplay.textContent = "00";
    secondsDisplay.textContent = "00";
    seconds = 0;
    minutes = 0;
    interval = setInterval(function () {
        if (!isPaused) {
            seconds++;
            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }
            minutesDisplay.textContent = minutes < 10 ? "0" + minutes : minutes;
            secondsDisplay.textContent = seconds < 10 ? "0" + seconds : seconds;
        }
    }, 1000);
}
window.startTimer = startTimer

function clearBoard() {
    clearInterval(interval);
    interval = null;
    minutesDisplay.textContent = "00";
    secondsDisplay.textContent = "00";
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
    homeLogsEl.innerHTML = ""
    guestLogsEl.innerHTML = ""
    pauseButtonEl.textContent = "PAUSE"
    leader()
}
window.clearBoard = clearBoard

function pause() {
    isPaused = !isPaused
    if (pauseButtonEl.textContent == "PAUSE") {
        pauseButtonEl.textContent = "PLAY"
    }
    else {
        pauseButtonEl.textContent = "PAUSE"
    }
}
window.pause = pause

function leader() {
    if (homeScore == guestScore) {
        homeScoreContainerEl.className = "score-container";
        guestScoreContainerEl.className = "score-container";
        homeNameContainerEl.className = "name-container";
        guestNameContainerEl.className = "name-container";
    }
    else if (homeScore > guestScore) {
        homeScoreContainerEl.className = "score-container-winning";
        guestScoreContainerEl.className = "score-container";
        homeNameContainerEl.className = "name-container-winning";
        guestNameContainerEl.className = "name-container";
    }
    else {
        homeScoreContainerEl.className = "score-container";
        guestScoreContainerEl.className = "score-container-winning";
        homeNameContainerEl.className = "name-container";
        guestNameContainerEl.className = "name-container-winning";
    }
}
window.leader = leader

function newGame() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
    homeLogsEl.innerHTML = ""
    guestLogsEl.innerHTML = ""
    pauseButtonEl.textContent = "PAUSE"
    leader()
    startTimer()
}
window.newGame = newGame

function incrementHomeScoreOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
    leader()
    const log = document.createElement("li");
    log.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds} +1 ${homeScore}`;

    homeLogsEl.appendChild(log);
}
window.incrementHomeScoreOne = incrementHomeScoreOne

function incrementHomeScoreTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
    leader()
    const log = document.createElement("li");
    log.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds} +2 ${homeScore}`;
    homeLogsEl.appendChild(log);
}
window.incrementHomeScoreTwo = incrementHomeScoreTwo

function incrementHomeScoreThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
    leader()
    const log = document.createElement("li");
    log.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds} +3 ${homeScore}`;
    homeLogsEl.appendChild(log);
}
window.incrementHomeScoreThree = incrementHomeScoreThree

function incrementGuestScoreOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
    leader()
    const log = document.createElement("li");
    log.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds} +1 ${guestScore}`;
    guestLogsEl.appendChild(log);
}
window.incrementGuestScoreOne = incrementGuestScoreOne

function incrementGuestScoreTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
    leader()
    const log = document.createElement("li");
    log.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds} +2 ${guestScore}`;
    guestLogsEl.appendChild(log);
}
window.incrementGuestScoreTwo = incrementGuestScoreTwo

function incrementGuestScoreThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
    leader()
    const log = document.createElement("li");
    log.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds} +3 ${guestScore}`;
    guestLogsEl.appendChild(log);
}
window.incrementGuestScoreThree = incrementGuestScoreThree