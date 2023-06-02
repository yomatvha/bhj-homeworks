"use strict"

let xhr = new XMLHttpRequest();
let title = document.getElementById("poll__title");
let answers = document.getElementById("poll__answers");

function sendRequest() {
  xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
  xhr.responseType = 'json';
  xhr.send();
}

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    let response = Object.values(xhr.response.data.answers);
    title.insertAdjacentHTML('beforeend', xhr.response.data.title);
    for (let i = 0; i < response.length; i++) {
      answers.insertAdjacentHTML('beforeEnd', '<button class="poll__answer">' + response[i] + '</button>');
    };
    let buttons = [...document.querySelectorAll('.poll__answer')];
    buttons.forEach((a) => {
      a.addEventListener("click", () => {
        alert("Спасибо, ваш голос засчитан!");
        title.innerText = '';
        answers.innerText = '';
        sendRequest();
      });
    });
  };
});

sendRequest();
