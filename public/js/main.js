const bodyElem = document.querySelector('body');
const themeToggler = document.getElementById('toggler');
const headerElem = document.querySelector('header');
const cardElem = document.querySelectorAll('section .card');
const overviewCardElem = document.querySelectorAll('section .overview-card');
const overviewTitle = document.querySelector('section .overview-title');

themeToggler.addEventListener('input', () => {
    if (themeToggler.checked == true) {
        bodyElem.classList.add('dark-bg');
        headerElem.classList.add('dark-top-bg');
        overviewTitle.classList.add('dark-theme');

        cardElem.forEach(card => {
            card.classList.add('dark-card-bg');
        });

        overviewCardElem.forEach(oCard => {
            oCard.classList.add('dark-card-bg');
        });

    } else {
        bodyElem.classList.remove('dark-bg');
        headerElem.classList.remove('dark-top-bg');
        overviewTitle.classList.remove('dark-theme');

        cardElem.forEach(card => {
            card.classList.remove('dark-card-bg');
        });

        overviewCardElem.forEach(oCard => {
            oCard.classList.remove('dark-card-bg');
        });
    }
});