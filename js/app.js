const hambIcon = document.querySelector('#hamb-icon');
const navbarNav = document.querySelector('#navbarNav');
const sponsorsSection = document.querySelector('#sponsors-sec');
const mainContainer = document.getElementById('main-container');
const mainCard = document.getElementsByClassName('main-card');
const windowWidth = window.innerWidth;
const team = {
  id: ['01', '02', '03', '04', '05', '06'],
  name: ['Mike Pettersen', 'Alberto Gonzalez', 'Ana Perez', 'Anneth Johnson', 'Jessica Roberts', 'Patrick Noltie'],
  tittle: ['Marketing Oficer', 'Frontend Oficer', 'Backend Oficer', 'Full-Stak Senior', 'Communication Oficer', 'Technology Oficer'],
  comment: ['Our way is the best way that has the most accessible web for the world', 'The work of web design is the best way to take your company to the digital world', 'The job you cannot see, is that it provides security to your website', 'Being versatile is what leads you to success wherever you are', 'Communication is the key in all areas of work, from our clients to our team', 'Technology is what moves our world and our lives towards progress'],
  photo: ['img/person-1.png', 'img/person-2.png', 'img/person-3.png', 'img/person-4.png', 'img/person-5.png', 'img/person-6.png'],
};

window.addEventListener('resize', () => {
  if ((windowWidth < 768 && window.innerWidth > 768)
  || (windowWidth > 768 && window.innerWidth < 768)) {
    window.location.reload();
  }
});

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

const teamSection = document.createElement('section');
teamSection.innerHTML = `
<section class="d-flex flex-column h-auto" id="team-sec">
  <h2 class="sff-regular team-h2">Our Team</h2>
  <hr class="s-color"/>
  <div class="d-flex flex-column" id="team-container">
    <div class="row-container">
      <div class="d-flex col-12 col-md-6 partner-container">
        <img class="team-img" src="${team.photo[0]}"/>
        <div class="d-flex flex-column" id="info-partner">
          <h3 class="team-name pff-semibold p-color">${team.name[0]}</h3>
          <p class="team-tittle sff-regular s-color">${team.tittle[0]}</p>
          <hr/>
          <p class="team-comment">${team.comment[0]}</p>
        </div>
      </div>
      <div class="d-flex col-12 col-md-6 partner-container">
        <img class="team-img" src="${team.photo[1]}"/>
        <div class="d-flex flex-column" id="info-partner">
          <h3 class="team-name pff-semibold p-color">${team.name[1]}</h3>
          <p class="team-tittle sff-regular s-color">${team.tittle[1]}</p>
          <hr/>
          <p class="team-comment">${team.comment[1]}</p>
        </div>
      </div>
    </div>
    <div class="d-element row-container">
      <div class="d-flex col-12 col-md-6 partner-container">
        <img class="team-img" src="${team.photo[2]}"/>
        <div class="d-flex flex-column" id="info-partner">
          <h3 class="team-name pff-semibold p-color">${team.name[2]}</h3>
          <p class="team-tittle sff-regular s-color">${team.tittle[2]}</p>
          <hr/>
          <p class="team-comment">${team.comment[2]}</p>
        </div>
      </div>
      <div class="d-flex col-12 col-md-6 partner-container">
        <img class="team-img" src="${team.photo[3]}"/>
        <div class="d-flex flex-column" id="info-partner">
          <h3 class="team-name pff-semibold p-color">${team.name[3]}</h3>
          <p class="team-tittle sff-regular s-color">${team.tittle[3]}</p>
          <hr/>
          <p class="team-comment">${team.comment[3]}</p>
        </div>
      </div>
    </div>
    <div class="d-element row-container">
      <div class="d-flex col-12 col-md-6 partner-container">
        <img class="team-img" src="${team.photo[4]}"/>
        <div class="d-flex flex-column" id="info-partner">
          <h3 class="team-name pff-semibold p-color">${team.name[4]}</h3>
          <p class="team-tittle sff-regular s-color">${team.tittle[4]}</p>
          <hr/>
          <p class="team-comment">${team.comment[4]}</p>
        </div>
      </div>
      <div class="d-flex col-12 col-md-6 partner-container">
        <img class="team-img" src="${team.photo[5]}"/>
        <div class="d-flex flex-column " id="info-partner">
          <h3 class="team-name pff-semibold p-color">${team.name[5]}</h3>
          <p class="team-tittle sff-regular s-color">${team.tittle[5]}</p>
          <hr/>
          <p class="team-comment">${team.comment[5]}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="see-more">
    <span class="al-center">MORE</span>
    <img class="al-center" src="img/arrow-down.png"/>
  </div>
</section>`;

document.body.insertBefore(teamSection, sponsorsSection);