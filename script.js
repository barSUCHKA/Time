let year = document.querySelector("#years");
let month = document.querySelector("#monthes");
let day = document.querySelector("#days");
let hour = document.querySelector("#hours");
let minute = document.querySelector("#minutes");
let second = document.querySelector("#seconds");

function clock() {
    let date = new Date();

    year.textContent = date.getFullYear();
    month.textContent = date.getMonth();
    day.textContent = date.getDay();
    hour.textContent = date.getHours();
    minute.textContent = date.getMinutes();
    second.textContent = date.getSeconds();
    if (month.textContent < 10) {
        month.textContent = "0" + date.getMonth();
    }
    if (day.textContent < 10) {
        day.textContent = "0" + date.getDay();
    }
    if (hour.textContent < 10) {
        hour.textContent = "0" + date.getHours();
    }
    if (minute.textContent < 10) {
        minute.textContent = "0" + date.getMinutes();
    }
    if (second.textContent < 10) {
        second.textContent = "0" + date.getSeconds();
    }
    time.insertAdjacentHTML("beforeend", `
    <span id="years">${year}</span>-<span id="monthes">${month}</span>-<span id="days">${day}</span>-<span id="hours">${hour}</span>-<span id="minutes">${minute}</span>-<span id="seconds">${second}</span>
    `);
}

clock();
