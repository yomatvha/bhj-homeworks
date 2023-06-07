"use strict"

const signInButton = document.getElementById('signin__btn');
const signInForm = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const signIn = document.getElementById('signin');

if (localStorage.getItem('user')) {
  userId.textContent = localStorage.getItem('user');
  welcome.classList.add('welcome_active');
} else {
  document.forms.signin__form.addEventListener("submit", (event) => {
    event.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status <= 299) {
        let response = xhr.responseText;
        response = JSON.parse(response);
        if (response.success === true) {
          userId.textContent = response.user_id;
          localStorage.setItem('user', response.user_id);
          welcome.classList.add('welcome_active');
          signIn.classList.remove('signin_active');
        } else {
          alert("Неверный логин/пароль");
        }
      } else {
        alert("Ошибка на стороне сервера");
      }
    }

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    const formData = new FormData(document.forms.signin__form);
    xhr.send(formData);
  });
}