"use strict"

let timer = document.getElementById("timer");

let startDate = new Date;
startDate.setHours(0, 0, Number(timer.textContent));

let startTimer = startDate.getTime();

let endDate = new Date;
endDate.setHours(0, 0, 0);

let endTimer = endDate.getTime();

timer.textContent = startDate.toTimeString().substring(0, 8);

function countdown() {
  startDate.setSeconds(startDate.getSeconds() - 1);
  startTimer = startDate.getTime();
  timer.textContent = startDate.toTimeString().substring(0, 8);
  if (startTimer === endTimer) {
    clearInterval(counterId);
    location.href = "https://baikal-tlc.ru/DyadyaVanya.rar";
    alert("Вы победили в конкурсе!");
  }
};

let counterId = setInterval(countdown, 1000);