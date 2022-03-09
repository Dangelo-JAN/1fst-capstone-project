const hambIcon = document.querySelector('#hamb-icon');
const navbarNav = document.querySelector('#navbarNav');
const mainCard = document.querySelector('.main-card');

hambIcon.addEventListener('click', () => {
    navbarNav.classList.toggle('mobile-menu');
    navbarNav.classList.replace('justify-content-center', 'justify-content-start');
});

document.querySelectorAll('.nav-item').forEach((n) => n.addEventListener('click', () => {
    navbarNav.classList.replace('justify-content-center', 'justify-content-start');
    navbarNav.classList.toggle('mobile-menu');
    navbarNav.classList.toggle('show');
}));

if (screen.width < 768) {
  mainCard.classList.replace('flex-column', 'flex-row');    
} else
    mainCard.classList.replace('flex-row', 'flex-column');
/*
if (window.innerWidth < 768) {
  mainCard.classList.replace('flex-column', 'flex-row');    
} else
    mainCard.classList.replace('flex-row', 'flex-column');
*/