let imageIndex = 0;
let position = 0;
const IMAGE_WIDTH = 470;
const btnPrevious = document.querySelector(".previous");
const btnNext = document.querySelector(".next");
const images = document.querySelector(".feed1_image");

function prev() {
  if (imageIndex > 0) {
    btnNext.removeAttribute("disabled");
    position += IMAGE_WIDTH;
    images.style.transform = `translateX(${position}px)`;
    imageIndex = imageIndex - 1;
  }
  if (imageIndex == 0) {
    btnPrevious.setAttribute("disabled", "true");
  }
}
function next() {
  if (imageIndex < 3) {
    btnPrevious.removeAttribute("disabled");
    position -= IMAGE_WIDTH;
    images.style.transform = `translateX(${position}px)`;
    imageIndex = imageIndex + 1;
  }
  if (imageIndex == 3) {
    btnNext.setAttribute("disaled", "true");
  }
}

function init() {
  btnPrevious.setAttribute("disabled", "true");
  btnPrevious.addEventListener("click", prev);
  btnNext.addEventListener("click", next);
}

init();
