"use strict"

const modal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');

function setCookie(name, value) {
  document.cookie = name + '=' + encodeURIComponent(value);
}

function getCookie(name) {
  const pairs = document.cookie.split('; ');
  const cookie = pairs.find(a => a.startsWith(name + '='));
  if (cookie) {
    return true;
  }
}

if (!getCookie('popup')) {
  modal.classList.add('modal_active');
  modalClose.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    setCookie('popup', 'close');
    document.cookie = "popup=close";
  });
}
