const slides = document.querySelectorAll(".js--list li");
const prevButton = document.querySelector(".js--slider__prev");
const nextButton = document.querySelector(".js--slider__next");
const dotsContainer = document.querySelector(".js--slider__dots");
let currentSlide = document.querySelector(".js--list li.active");

function createDots() {
  slides.forEach((slide, index) => {
    const dot = document.createElement("span");
    dot.addEventListener("click", () => showSlide(slide));
    dotsContainer.appendChild(dot);
  });
}

function updateDots() {
  const dots = dotsContainer.querySelectorAll("span");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", slides[index] === currentSlide);
  });
}

function updateButtons() {
  prevButton.classList.toggle("disabled", !currentSlide.previousElementSibling);
  nextButton.classList.toggle("disabled", !currentSlide.nextElementSibling);
}

function showSlide(slide) {
  currentSlide.classList.remove("active");
  slide.classList.add("active");
  currentSlide = slide;
  updateButtons();
  updateDots();
}

prevButton.addEventListener("click", () => {
  const prevSlide = currentSlide.previousElementSibling;
  if (prevSlide) {
    showSlide(prevSlide);
  }
});

nextButton.addEventListener("click", () => {
  const nextSlide = currentSlide.nextElementSibling;
  if (nextSlide) {
    showSlide(nextSlide);
  }
});

createDots();
updateButtons();
updateDots();
