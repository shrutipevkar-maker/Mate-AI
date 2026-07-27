// ================================
// StudyTunes JavaScript
// ================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // TAB SWITCHING
    // ==========================

    const tabs = document.querySelectorAll(".tabs button");

    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            tabs.forEach(btn => btn.classList.remove("active"));

            tab.classList.add("active");

        });

    });

    // ==========================
    // CONNECT SPOTIFY
    // ==========================

    const spotifyBtn = document.querySelector(".spotify-btn");

    spotifyBtn.addEventListener("click", () => {

        spotifyBtn.innerHTML =
        '<i class="fa-brands fa-spotify"></i> Connected';

        spotifyBtn.style.background = "#16a34a";

    });

    // ==========================
    // SETTINGS
    // ==========================

    const settingBtn = document.querySelector(".icon-btn");

    settingBtn.addEventListener("click", () => {

        alert("Settings panel coming soon!");

    });

    // ==========================
    // HERO PLAY BUTTON
    // ==========================

    const heroPlay = document.querySelector(".play-btn");

    let heroPlaying = false;

    heroPlay.addEventListener("click", () => {

        heroPlaying = !heroPlaying;

        heroPlay.innerHTML = heroPlaying
            ? '<i class="fa-solid fa-pause"></i>'
            : '<i class="fa-solid fa-play"></i>';

    });

    // ==========================
    // MUSIC PLAYER
    // ==========================

    const mainPlay = document.querySelector(".main-play");

    let playing = false;

    mainPlay.addEventListener("click", () => {

        playing = !playing;

        mainPlay.innerHTML = playing
            ? '<i class="fa-solid fa-pause"></i>'
            : '<i class="fa-solid fa-play"></i>';

    });

    // ==========================
    // LIKE SONG
    // ==========================

    const heart = document.querySelector(".heart");

    heart.addEventListener("click", () => {

        heart.classList.toggle("fa-regular");
        heart.classList.toggle("fa-solid");

        if (heart.classList.contains("fa-solid")) {

            heart.style.color = "#ef4444";

        } else {

            heart.style.color = "#9CA3AF";

        }

    });

    // ==========================
    // PROGRESS BAR
    // ==========================

    const sliders = document.querySelectorAll('input[type="range"]');

    let progress = 20;

    setInterval(() => {

        if (playing) {

            progress++;

            if (progress > 100) {

                progress = 0;

            }

            sliders[0].value = progress;

        }

    }, 1000);

    // ==========================
    // CARD HOVER
    // ==========================

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transform = "translateY(-8px) scale(1.02)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "translateY(0) scale(1)";

        });

    });

    // ==========================
    // PAGE LOAD ANIMATION
    // ==========================

    const sections = document.querySelectorAll(
        ".header,.hero,.player,.recommend"
    );

    sections.forEach((section, index) => {

        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";

        setTimeout(() => {

            section.style.transition = "all .6s ease";

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }, index * 150);

    });

});