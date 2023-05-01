"use strict"

let clickCount = document.getElementById("clicker__counter");
let image = document.getElementById("cookie");
let lastClickTime = new Date;
let clickSpeed = document.getElementById("clicker__speed");

function clicker() {
  const currentTime = new Date;
  const lastClickSpeed = (1000 / (currentTime - lastClickTime)).toFixed(2).toString();
  lastClickTime = currentTime;
  clickCount.textContent++;
  clickSpeed.textContent = lastClickSpeed;
  image.width = 300;
  setTimeout(() => image.width = 200, 100);
};

image.onclick = clicker;