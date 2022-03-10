const hambIcon = document.querySelector('#hamb-icon');
const navbarNav = document.querySelector('#navbarNav');
const mainContainer = document.getElementById('main-container');
const mainCard = document.getElementsByClassName('main-card');
let windowWidth = window.innerWidth;

hambIcon.addEventListener('click', () => {
    navbarNav.classList.toggle('mobile-menu');
    navbarNav.classList.replace('justify-content-center', 'justify-content-start');
});

document.querySelectorAll('.nav-item').forEach((n) => n.addEventListener('click', () => {
    navbarNav.classList.replace('justify-content-center', 'justify-content-start');
    navbarNav.classList.toggle('mobile-menu');
    navbarNav.classList.toggle('show');
}));

if (windowWidth < 768) {
    mainContainer.classList.replace('flex-row', 'flex-column');
    mainCard[0].classList.replace('flex-cloumn', 'flex-row');
    mainCard[1].classList.replace('flex-cloumn', 'flex-row');
    mainCard[2].classList.replace('flex-cloumn', 'flex-row');
    mainCard[3].classList.replace('flex-cloumn', 'flex-row');
    mainCard[4].classList.replace('flex-cloumn', 'flex-row');    
} else {
    mainContainer.classList.replace('flex-column', 'flex-row');
    mainCard[0].classList.replace('flex-row', 'flex-column');
    mainCard[1].classList.replace('flex-row', 'flex-column');
    mainCard[2].classList.replace('flex-row', 'flex-column');
    mainCard[3].classList.replace('flex-row', 'flex-column');
    mainCard[4].classList.replace('flex-row', 'flex-column');
}