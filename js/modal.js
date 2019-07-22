window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    
    let lupa = document.querySelectorAll('.lupa'),
        modal = document.querySelector('.modal'),
        bodyModal = document.querySelector('.modal__body'),
        imgB = document.querySelectorAll('.latest__projects-img');

   

    function openModal() {
        modal.style.display = 'block';
    }

    function closeModal() {
        modal.style.display = 'none';
    }

    function bindModal(img) {
        img.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                openModal();
            });
        });
    }

    bindModal(lupa);

    modal.addEventListener('click', (e) => {
        if (!e.target.classList.contains('modal__body')) {
            closeModal();
        }
    });
});
    