"use strict"

let reveal = document.querySelectorAll('.reveal');

function isVisible(element) {
  const { top, bottom } = element.getBoundingClientRect();
  if ((bottom < 0) || (top > window.innerHeight)) {
    return false;
  } else {
    return true;
  }
}

reveal.forEach((revealItem) => {
  document.addEventListener("scroll", function() {
    if (isVisible(revealItem)) {
      revealItem.classList.add("reveal_active");
    };
  });
});