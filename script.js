const time = document.querySelector("#time");

function clock() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    if (month < 10) {
        month = "0" + date.getMonth();
    }
    if (day < 10) {
        day = "0" + date.getDate();
    }
    if (hour < 10) {
        hour = "0" + date.getHours();
    }
    if (minute < 10) {
        minute = "0" + date.getMinutes();
    }
    if (second < 10) {
        second = "0" + date.getSeconds();
    }

    time.insertAdjacentHTML("beforeend", `
    <span id="years">${year}</span>-<span id="monthes">${month}</span>-<span id="days">${day}</span>-<span id="hours">${hour}</span>-<span id="minutes">${minute}</span>-<span id="seconds">${second}</span>
    `);


}

clock();
