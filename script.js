// script.js
let slideIndex = 1;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index < 1) {
        slideIndex = slides.length;
    }
    if (index > slides.length) {
        slideIndex = 1;
    }
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });
    slides[slideIndex - 1].style.display = 'block';
}

function nextSlide() {
    showSlide(slideIndex += 1);
}

function prevSlide() {
    showSlide(slideIndex -= 1);
}

showSlide(slideIndex);
