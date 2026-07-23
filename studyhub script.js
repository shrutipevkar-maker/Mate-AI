// =============================
// ELEMENTS
// =============================

const timer = document.getElementById("timer");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");
const timeSelect = document.getElementById("timeSelect");
const subjectInput = document.getElementById("subject");
const sessionList = document.getElementById("sessionList");

const modeButtons = document.querySelectorAll(".mode-switch button");
const soundButtons = document.querySelectorAll(".sound-btn");

let totalSeconds = 25 * 60;
let currentSeconds = totalSeconds;

let interval = null;
let running = false;

let mode = "Focus";

// =============================
// UPDATE TIMER
// =============================

function updateDisplay() {

    const minutes = Math.floor(currentSeconds / 60);
    const seconds = currentSeconds % 60;

    timer.textContent =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");
}

updateDisplay();

// =============================
// START / PAUSE
// =============================

startBtn.addEventListener("click", () => {

    if (!running) {

        running = true;

        startBtn.innerHTML =
        '<i class="fa-solid fa-pause"></i>';

        interval = setInterval(() => {

            currentSeconds--;

            updateDisplay();

            if (currentSeconds <= 0) {

                clearInterval(interval);

                running = false;

                startBtn.innerHTML =
                '<i class="fa-solid fa-play"></i>';

                alert(mode + " session completed!");

                addSession();

            }

        }, 1000);

    }

    else {

        clearInterval(interval);

        running = false;

        startBtn.innerHTML =
        '<i class="fa-solid fa-play"></i>';

    }

});

// =============================
// RESET
// =============================

resetBtn.addEventListener("click", () => {

    clearInterval(interval);

    running = false;

    startBtn.innerHTML =
    '<i class="fa-solid fa-play"></i>';

    currentSeconds = totalSeconds;

    updateDisplay();

});

// =============================
// TIME SELECT
// =============================

timeSelect.addEventListener("change", () => {

    const value =
    parseInt(timeSelect.value);

    totalSeconds = value * 60;

    currentSeconds = totalSeconds;

    clearInterval(interval);

    running = false;

    startBtn.innerHTML =
    '<i class="fa-solid fa-play"></i>';

    updateDisplay();

});

// =============================
// MODE SWITCH
// =============================

modeButtons.forEach(button => {

    button.addEventListener("click", () => {

        modeButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        mode = button.textContent;

        if (mode === "Focus") {

            totalSeconds = 25 * 60;

        }

        else {

            totalSeconds = 5 * 60;

        }

        currentSeconds = totalSeconds;

        clearInterval(interval);

        running = false;

        startBtn.innerHTML =
        '<i class="fa-solid fa-play"></i>';

        updateDisplay();

    });

});

// =============================
// ADD SESSION
// =============================

function addSession() {

    const subject =
        subjectInput.value.trim() || "Study";

    const li =
        document.createElement("li");

    li.innerHTML = `
        <span>${subject}</span>
        <span>${Math.floor(totalSeconds/60)} min</span>
    `;

    sessionList.prepend(li);

}

// =============================
// AMBIENT BUTTONS
// =============================

soundButtons.forEach(button => {

    button.addEventListener("click", () => {

        soundButtons.forEach(btn => {

            btn.style.background = "#1d2139";

        });

        button.style.background = "#7c4dff";

    });

});