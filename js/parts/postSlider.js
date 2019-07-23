function postSlider() {
    let currentSlide = 1,
        slider = document.querySelectorAll('.block__posts-slide'),
        buttonBack = document.querySelector('.arrows__back'),
        buttonForward = document.querySelector('.arrows__forward');

    slidesShow(currentSlide);
    function slidesShow(n) {

        if (n > slider.length) {
            currentSlide = 1;
        }
        if (n < 1) {
            currentSlide = slider.length;
        }

        slider.forEach((item) => item.style.display = 'none');

        slider[currentSlide-1].style.display = 'flex';
    }

    function forwardSlider(n) {
        slidesShow(currentSlide += n);
    }
    function presentSlide(n) {
        slidesShow(currentSlide = n);
    } 

    buttonBack.addEventListener('click', function() {
        forwardSlider(-1);
    });

    buttonForward.addEventListener('click', function() {
        forwardSlider(1);
    });

}

module.exports = postSlider;