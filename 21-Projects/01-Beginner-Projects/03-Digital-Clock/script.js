const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes")
const seconds = document.getElementById("seconds")
const ampm = document.getElementById("ampm")
const day = document.getElementById("day")
const date = document.getElementById("date")
const month = document.getElementById("month")
const year = document.getElementById("year")

const now = new Date();
let displayHour = now.getHours();

if(displayHour > 12) {
    displayHour = displayHour -12;
}

if(displayHour ===0) {
    displayHour = 12;
}

hours.innerText = displayHour
minutes.innerText = now.getMinutes();
seconds.innerText = now.getSeconds();

if(now.getHours() >= 12) {
    ampm.innerText = "PM";
} else {
    ampm.innerText = "AM";
}

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

day.innerText = days[now.getDay()];
date.innerText = now.getDate();

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

month.innerText = months[now.getMonth()];
year.innerText = now.getFullYear();
