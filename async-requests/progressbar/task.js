"use strict"

let progress = document.getElementById('progress');

document.forms.form.addEventListener("submit", (event) => {
  event.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.upload.onprogress = (e) => {
    progress.value = e.loaded / e.total;
  };
  xhr.upload.onload = () => {
    alert("Файл успешно загружен");
  };
  xhr.upload.onerror = () => {
    alert("Произошла ошибка при загрузке файла");
  };

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  let formData = new FormData(document.forms.form);
  xhr.send(formData);
});
