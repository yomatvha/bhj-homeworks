"use strict"

let dropDownValues = document.querySelectorAll('.dropdown__value');
let dropDownItems = document.querySelectorAll('.dropdown__link');

dropDownItems.forEach((dropDownItem) => {
  dropDownItem.addEventListener('click', () => {
    event.preventDefault();
    dropDownItem.closest('.dropdown').children[0].textContent = dropDownItem.textContent;
    dropDownItem.closest('.dropdown__list').classList.remove('dropdown__list_active');
  });
});

dropDownValues.forEach((dropDownValue) => {
  dropDownValue.addEventListener('click', () => dropDownValue.closest('.dropdown').children[1].classList.toggle('dropdown__list_active'));
});

