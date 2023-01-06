let body = document.querySelector('body');
let popupHead = document.getElementById('popup_heading');
let popupText = document.getElementById('popup_text');
let footerText = document.querySelector('footer p');
let date = new Date().getFullYear();
let menuBtn = document.getElementById('menu_btn');

window.addEventListener('scroll', e => {
    let fromTop = window.scrollY;
    let navLinks = document.querySelectorAll('.menu_element');
    navLinks.forEach(link => {
        let section = document.querySelector(link.hash);
        if (
            section.offsetTop <= fromTop + 200 &&
            section.offsetTop + section.offsetHeight > fromTop + 200
          ) {
            link.classList.add('header-active');
          } else {
            link.classList.remove('header-active');
          }
    });
});

function openPopup() {
    let popup = document.getElementById('popup');
    let header = document.getElementById('header');
    popup.classList.add('open-popup');
    body.style.overflow = 'hidden';
    if (window.innerWidth > 480) {
        body.style.padding = '0 17px 0 0';
        header.style.padding = '0 17px 0 0';
    }
}

function closePopup() {
    let popup = document.getElementById('popup');
    let header = document.getElementById('header');
    popup.classList.remove('open-popup');
    body.style.overflow = 'visible';
    body.style.padding = '0';
    header.style.padding = '0';
}

function openHTML() {
    popupHead.innerHTML = 'HTML5';
    popupText.innerHTML = 'Выучил в 13 лет, потом благополучно не использовал. В 2021 году освежил знания, теперь использую достаточно бегло.';
}

function openCSS() {
    popupHead.innerHTML = 'CSS3';
    popupText.innerHTML = 'Выучил вместе с HTML в 13 лет, но на очень поверхностном уровне. В 2021-м изучил флексбоксы, гриды, анимации и переходы. Сейчас быстро верстаю как флекс, так и сетку.';
}

function openJS() {
    popupHead.innerHTML = 'JavaScript';
    popupText.innerHTML = 'Выучил в 2022 году в стандарте ES6.';
}

function openGit() {
    popupHead.innerHTML = 'Git и GitHub';
    popupText.innerHTML = 'Изучил в 2022 году. Активно пользоваться стал в 2023-м, когда начал заливать проекты на GitHub. Знаю базу вроде отправления коммитов и навигации по веткам.';
}

function openReact() {
    popupHead.innerHTML = 'React';
    popupText.innerHTML = 'Изучил в 2022 году.';
}

function openRedux() {
    popupHead.innerHTML = 'Redux';
    popupText.innerHTML = 'Изучил в 2022 году.';
}

function openPs() {
    popupHead.innerHTML = 'Adobe Photoshop';
    popupText.innerHTML = 'Начал пользоваться в 13 лет, учил на ходу. Сейчас отлично владею инструментом, делаю в нем большинство дизайнов. Раньше создавал там макеты, но потом перешел на Фигму.';
}

function openFigma() {
    popupHead.innerHTML = 'Figma';
    popupText.innerHTML = 'Впервые открыл в 2019 году, пользоваться стал в 2021-м. Сейчас делаю там макеты.';
}

footerText.innerHTML = `Антон Новоселов, ${date}`