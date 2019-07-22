window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    //   Слайдер
    let slideIndex = 1,
        slides = document.querySelectorAll('.header__block'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');
        showSlides(slideIndex);
        function showSlides(n) {
            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }

            slides.forEach((item) => item.style.display = 'none');
            // for (let i = 0; i < slides.length; i++) {
            //     slides[i].style.display = 'none';
            // }
            dots.forEach((item) => item.classList.remove('dot-active'));

            slides[slideIndex - 1].style.display = 'flex';
            dots[slideIndex - 1].classList.add('dot-active');
        }

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        prev.addEventListener('click', function() {
            plusSlides(-1);
        });

        next.addEventListener('click', function(){
            plusSlides(1);
        });

        dotsWrap.addEventListener('click', function(event) {
            for (let i = 0; i < dots.length + 1; i++) {
                if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                    currentSlide(i);
                }
            }
        });

    // Меню бургер

    $(document).ready(function(){
        let link = $('.menu-link');
        let link_active = $('.menu-link_active');
        let menu = $('.menu');

        link.click(function(){
            link.toggleClass('menu-link_active');
            menu.toggleClass('menu_active');
        });
        link_active.click(function(){
            link.removeClass('menu-link_active');
        })
    })
    

    // cлайдер в блоке post
    
    let slide = document.getElementsByClassName('block__posts-slide'),
        prevBtn = document.getElementsByClassName('arrows__back'),
        nextBtn = document.getElementsByClassName('arrows__forward');
    
    function slidesShow (n) {
        if (n < 1) {
            
        }
    }
    

});