"use strict"

const editor = document.getElementById('editor');
const buttonClear = document.querySelector('.button__clear');

editor.value = localStorage.getItem('editor');
editor.addEventListener('input', () => {
  localStorage.setItem('editor', editor.value);
});

buttonClear.addEventListener('click', () => {
  localStorage.removeItem('editor');
  editor.value = '';
});
