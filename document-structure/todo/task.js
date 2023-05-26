"use strict"

let form = document.getElementById('tasks__form');
let input = document.getElementById('task__input');
let taskIndex = 0;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value.trim() !== "") {
    let taskList = document.getElementById('tasks__list');
    taskList.insertAdjacentHTML("beforeend",
      '<div class="task" id="task' + taskIndex + '"><div class="task__title">'
      + input.value
      + '</div><a href="#" class="task__remove" id="task__remove' + taskIndex + '">&times;</a></div>'
    );
    let task = document.getElementById('task' + taskIndex);
    let taskRemove = document.getElementById('task__remove' + taskIndex);
    taskIndex++;
    taskRemove.addEventListener("click", () => {
      task.remove();
    });
    input.value = "";
  } else {
    alert('Название задачи должно быть введено!');
    input.value = "";
  }
})
