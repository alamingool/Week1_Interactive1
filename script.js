document.addEventListener('DOMContentLoaded', function () {

    const swiper = new Swiper('.swiper', {
        speed: 400,
        spaceBetween: 100,
        direction: 'horizontal',
        loop: false,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        a11y: {
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
        },
    });
})