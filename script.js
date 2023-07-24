let time = document.querySelector("#time");
function clock() { time.textContent = new Date() }
setInterval(() => { clock() }, 1000);
