const mobMenuButton = document.querySelector('.mob-menu-btn');
const mobMenu = document.querySelector('.mob-menu');
const closeMenuButton = document.querySelector('.menu-close-btn');

mobMenuButton.addEventListener('click', () => {
    mobMenu.classList.add('is-open');
});

closeMenuButton.addEventListener('click', () => {
    mobMenu.classList.remove('is-open');
});