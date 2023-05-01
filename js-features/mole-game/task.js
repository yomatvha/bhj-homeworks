"use strict"

let winners = 0;
let loses = 0;
let dead = document.getElementById("dead");
let lost = document.getElementById("lost");


function getHole(holeIndex) {
  return document.getElementById("hole" + holeIndex.toString());
}

function clearCounters() {
  winners = 0;
  dead.textContent = "0";
  loses = 0;
  lost.textContent = "0";
}

for (let i = 1; i <= 9; i++) {
  let element = getHole(i);
  element.onclick = function() {
    if (element.className.includes("hole_has-mole")) {
      winners++;
      dead.textContent = winners.toString();
      if (winners === 10) {
        alert("Победа!");
        clearCounters();
      }
    } else {
      loses++;
      lost.textContent = loses.toString();
      if (loses === 5) {
        alert("Вы проиграли :(");
        clearCounters();
      }
    }
  };
}
