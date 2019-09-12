function modal() {   
    let imgPopup = document.createElement('div'),
        image = document.createElement('img'),
        lupa = document.querySelectorAll('.lupa'),
        srcImg = document.querySelectorAll('.latest__projects-img');

    imgPopup.classList.add('img-popup');
    image.classList.add('img-content');
    document.body.appendChild(imgPopup);
    imgPopup.appendChild(image);

    lupa.forEach(img => {
        img.addEventListener('click', function (event) {
            event.preventDefault();
            imgPopup.style.display = 'flex';
            image.href = lupa.href;
        });
    });
    
    imgPopup.addEventListener('click', event => {
        if (event.target && event.target.classList.contains('img-popup')) {
            imgPopup.style.display = 'none';
        }
    });
} 

module.exports = modal;