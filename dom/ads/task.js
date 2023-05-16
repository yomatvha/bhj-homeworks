"use strict"

let rotator = document.querySelectorAll('.rotator');
let currentElementIndex = [];
let currentDelay = [];

rotator.forEach((element, index) => {
  currentElementIndex.push(0);
  let rotatorElements = Array.from(element.querySelectorAll('.rotator__case'));
  currentDelay.push(rotatorElements[0].getAttribute('data-speed'));
  rotatorElements.forEach((rotatorElement) => {
    rotatorElement.style.color = rotatorElement.getAttribute('data-color');
  })

  let timerId = setTimeout(function changeText() {
    rotatorElements[currentElementIndex[index]].classList.remove('rotator__case_active');
    if (currentElementIndex[index] === rotatorElements.length - 1) {
      currentElementIndex[index] = 0;
    } else {
      currentElementIndex[index]++;
    };
    rotatorElements[currentElementIndex[index]].classList.add('rotator__case_active');
    currentDelay[index] = rotatorElements[currentElementIndex[index]].getAttribute('data-speed');
    timerId = setTimeout(changeText, currentDelay[index]);
  }, currentDelay[index]);
});