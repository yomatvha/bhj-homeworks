"use strict"

let fontButtons = Array.from(document.querySelectorAll(".font-size"));
let book = document.querySelector(".book");
let activeButton = 1;

fontButtons.forEach((a, index) => {
  a.addEventListener("click", () => {
    if (activeButton !== index) {
      event.preventDefault();
      fontButtons[activeButton].classList.remove("font-size_active");
      a.classList.add("font-size_active");
      activeButton = index;
      switch (activeButton) {
        case 0:
          book.classList.remove("book_fs-big");
          book.classList.add("book_fs-small");
          break;
        case 1:
          book.classList.remove("book_fs-big");
          book.classList.remove("book_fs-small");
          break;
        case 2:
          book.classList.remove("book_fs-small");
          book.classList.add("book_fs-big");
          break;
      };
    };
  });
});