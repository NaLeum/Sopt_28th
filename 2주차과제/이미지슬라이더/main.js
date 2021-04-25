const slides = document.querySelector('.slider_items').children;
const nextSlide = document.querySelector('.right-slide');
const prevSlide = document.querySelector('.left-slide');
const totalSlides = slides.length;
let index = 0;

const slideHandler = (direction) => {
    if (direction == 'next') {
        index++;
        if (index == totalSlides) {
            index = 0;
        }
    } else {
        if (index == 0) {
            index = totalSlides - 1
        } else {
            index--;
        }
    }
    for (let i = 0; i < totalSlides; i++) {
        slides[i].classList.remove('active');
    }
    slides[index].classList.add('active');
}
nextSlide.onclick = function () {
    slideHandler('next')
}
prevSlide.onclick = function () {
    slideHandler('prev')
}