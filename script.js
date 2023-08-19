const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slideWidth = document.querySelector('.slide').clientWidth;

let currentIndex = 0;

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < slider.childElementCount - 1) {
    currentIndex++;
    updateSliderPosition();
  }
});

function updateSliderPosition() {
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
