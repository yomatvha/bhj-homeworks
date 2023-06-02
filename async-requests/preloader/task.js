"use strict"

let preloader = document.getElementById('loader');

const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {

    let answer = Object.values(xhr.response.response.Valute);
    let items = document.getElementById('items');

    for (let i = 0; i < answer.length; i++) {
      items.insertAdjacentHTML("beforeend",
        '<div class="item"><div class="item__code">' + answer[i].CharCode
        + '</div><div class="item__value">' + answer[i].Value
        + '</div><div class="item__currency">руб.</div></div>'
      );
    }
    preloader.classList.remove('loader_active');
  }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = 'json';
xhr.send();
