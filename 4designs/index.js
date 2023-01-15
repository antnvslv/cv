const body = document.querySelector('body');
let date = new Date().getFullYear();
let footerText = document.querySelector('footer p');

footerText.innerHTML = `Антон Новоселов, ${date}`