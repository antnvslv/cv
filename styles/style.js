let popup = document.getElementById('popup');
let body = document.querySelector('body');

function openPopup() {
    popup.classList.add('open-popup');
    body.style.overflow = 'hidden';
}

function closePopup() {
    popup.classList.remove('open-popup');
    body.style.overflow = 'visible';
}