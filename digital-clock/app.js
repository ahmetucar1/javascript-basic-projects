const hourEl = document.getElementById("hour")
const muniteEl = document.getElementById("minutes")
const secondEl = document.getElementById("second")
const ampmEl = document.getElementById("ampm");

function updateClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if (h > 12) {
        h = h- 12
        ampm = "PM"
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.innerText = h
    muniteEl.innerText = m
    secondEl.innerText = s
    ampmEl.innerText = ampm 
    setTimeout(() => {
        updateClock()
    }, 1000)
}

updateClock()

const dayEl = document.getElementById("day")
const monthEl = document.getElementById("month")
const yearEl = document.getElementById("year")
const dayweekEl = document.getElementById("dayweek");

function updateCalendar() {
    let d = new Date().getDate()
    let mo = new Date().getMonth() + 1 // The value returned by getMonth() is an integer between 0 and 11. 0 corresponds to January, 1 to February, and so on.
    let y = new Date().getFullYear()
    let dw = new Date().toLocaleString('tr-tr', { weekday: 'short'});

    d = d < 10 ? "0" + d : d;
    mo = mo < 10 ? "0" + mo : mo;

    dayEl.innerText = d
    monthEl.innerText = mo
    yearEl.innerText = y
    dayweekEl.innerText = dw
}

updateCalendar()