function modal() {   
    let imgPopup = document.createElement('div'),
        image = document.createElement('img'),
        srcImg = document.querySelectorAll('.link-img');

    imgPopup.classList.add('img-popup');
    image.classList.add('img-content');
    document.body.appendChild(imgPopup);
    imgPopup.appendChild(image);

    srcImg.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            imgPopup.style.display = 'flex';
            image.src = this.href;
        });
    });
    
    imgPopup.addEventListener('click', event => {
        if (event.target && event.target.classList.contains('img-popup')) {
            imgPopup.style.display = 'none';
        }
    });
} 

module.exports = modal;