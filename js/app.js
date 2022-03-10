const hambIcon = document.querySelector('#hamb-icon');
const navbarNav = document.querySelector('#navbarNav');
const mainContainer = document.getElementById('main-container');
const mainCard = document.getElementsByClassName('main-card');
const windowWidth = window.innerWidth;
const team = {
  partners: [
    {
      id: '01',
      name: 'partener01',
      tittle: 'tittle01',
      comment: 'comment01',
      photo: 'img/partner01',
    },
    {
      id: '02',
      name: 'partener02',
      tittle: 'tittle02',
      comment: 'comment02',
      photo: 'img/partner02',
    },
    {
      id: '03',
      name: 'partener03',
      tittle: 'tittle03',
      comment: 'comment03',
      photo: 'img/partner03',
    },
    {
      id: '04',
      name: 'partener04',
      tittle: 'tittle04',
      comment: 'comment04',
      photo: 'img/partner04',
    },
    {
      id: '05',
      name: 'partener05',
      tittle: 'tittle05',
      comment: 'comment05',
      photo: 'img/partner05',
    },
    {
      id: '06',
      name: 'partener06',
      tittle: 'tittle06',
      comment: 'comment06',
      photo: 'img/partner06',
    },
  ],
};

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