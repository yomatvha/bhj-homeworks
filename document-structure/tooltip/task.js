"use strict"

let tooltipLinks = document.querySelectorAll('.has-tooltip');

tooltipLinks.forEach((tooltipLinksItem) => {
  tooltipLinksItem.insertAdjacentHTML("beforeend",'<div class="tooltip">' + tooltipLinksItem.title + '</div>');
});

let tooltip = document.querySelectorAll('.tooltip');
let activeTooltipIndex = -1;

tooltipLinks.forEach((tooltipLinksItem, index) => {
  tooltipLinksItem.addEventListener("click", () => {
    event.preventDefault();
    if (activeTooltipIndex !== index) {
      if (activeTooltipIndex >= 0) {
        tooltip[activeTooltipIndex].classList.remove('tooltip_active');
      }
      let coords = tooltipLinksItem.getBoundingClientRect();
      tooltip[index].style.left = coords.left + "px";
      tooltip[index].style.top = coords.bottom + "px";
      tooltip[index].classList.add('tooltip_active');
      activeTooltipIndex = index;
    }
  });
});

document.addEventListener("scroll", () => {
  if (activeTooltipIndex >= 0) {
    tooltip[activeTooltipIndex].classList.remove('tooltip_active');
    activeTooltipIndex = -1;
  }
})