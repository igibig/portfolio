const YourCurrentTime = document.getElementById("timeForYou");
const offset = new Date().getTimezoneOffset() / 60;

YourCurrentTime.textContent = offset < 0 ? `${9 + Math.abs(offset)}:00` : `0${9 - offset}:00`;