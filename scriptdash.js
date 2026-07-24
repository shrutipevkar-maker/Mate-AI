// ===============================
// StudyMate AI Dashboard
// script.js
// ===============================

// Greeting based on time
const greeting = document.querySelector("header h1");

const hour = new Date().getHours();

if (greeting) {
    if (hour < 12) {
        greeting.innerHTML = "Good Morning,👋";
    } else if (hour < 17) {
        greeting.innerHTML = "Good Afternoon,☀️";
    } else {
        greeting.innerHTML = "Good Evening,🌙";
    }
}

// Sidebar Active Menu
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });
});

// Theme Button
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeBtn.innerHTML =
        `<i class="fa-solid fa-moon"></i> Dark`;
    }
    else{
        themeBtn.innerHTML =
        `<i class="fa-solid fa-sun"></i> Theme`;
    }

});

// Hover Animation
const cards = document.querySelectorAll(".card,.action-card,.mission,.recommendation");

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-8px)";
        card.style.transition=".35s";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});

// Animated Numbers
const counters=document.querySelectorAll(".card h2");

counters.forEach(counter=>{

    let target=parseInt(counter.innerText);

    if(isNaN(target)) return;

    let count=0;

    let speed=25;

    let update=()=>{

        if(count<target){

            count++;

            counter.innerText=count;

            setTimeout(update,speed);

        }

        else{

            counter.innerText=target;

        }

    }

    update();

});

// Recommendation Button
const buddyBtn=document.querySelector(".recommendation button");

if(buddyBtn){

buddyBtn.addEventListener("click",()=>{

alert("🤖 AI Buddy feature will be available soon!");

});

}

// Mission Card Click
const mission=document.querySelector(".mission");

if(mission){

mission.addEventListener("click",()=>{

mission.style.border="1px solid #8b5cf6";

});

}

// Smooth Scroll
document.documentElement.style.scrollBehavior="smooth";

// Console Message
console.log("StudyMate AI Dashboard Loaded Successfully 🚀");