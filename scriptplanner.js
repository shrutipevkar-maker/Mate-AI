const monthYear = document.getElementById("monthYear");
const dates = document.getElementById("dates");

let currentDate = new Date(2026, 6, 1); // July 2026

function renderCalendar(date) {

    dates.innerHTML = "";

    const year = date.getFullYear();
    const month = date.getMonth();

    monthYear.textContent =
        date.toLocaleString("default", {
            month: "long",
            year: "numeric"
        });

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    let startDay = firstDay.getDay();

    // Monday first
    startDay = startDay === 0 ? 6 : startDay - 1;

    for (let i = 0; i < startDay; i++) {
        const empty = document.createElement("div");
        dates.appendChild(empty);
    }

    for (let day = 1; day <= lastDay.getDate(); day++) {

        const cell = document.createElement("div");
        cell.className = "date";
        cell.innerText = day;

        cell.onclick = function () {

            document.querySelectorAll(".date").forEach(d =>
                d.classList.remove("selected")
            );

            cell.classList.add("selected");
        };

        dates.appendChild(cell);
    }
}

renderCalendar(currentDate);
//hello
document.getElementById("prev").onclick = () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
};

document.getElementById("next").onclick = () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
};