import './slider';

function isLg() {
  if (window.innerWidth >= 992) {
    return true;
  }

  return false;
}

function hoverIcon() {
  const itSecurity = document.querySelector('.themes-label--itSecurity');
  const dataProtection = document.querySelector('.themes-label--dataProtection');
  const algorithm = document.querySelector('.themes-label--algorithm');
  const itCulture = document.querySelector('.themes-label--itCulture');
  const digitalCulture = document.querySelector('.themes-label--digitalCulture');

  const itSecurityIcon = document.querySelector('.theme-icon--itSecurity');
  const dataProtectionIcon = document.querySelector('.theme-icon--dataProtection');
  const algorithmIcon = document.querySelector('.theme-icon--algorithm');
  const itCultureIcon = document.querySelector('.theme-icon--itCulture');
  const digitalCultureIcon = document.querySelector('.theme-icon--digitalCulture');

  const tags = [itSecurity, dataProtection, algorithm, itCulture, digitalCulture];
  const icons = [itSecurityIcon, dataProtectionIcon, algorithmIcon, itCultureIcon, digitalCultureIcon];

  tags.forEach((tag, index) => {
    tag.addEventListener('mouseover', () => {
      icons[index].style.opacity = '1';
    })
    tag.addEventListener('mouseout', () => {
      icons[index].style.opacity = '0.3';
    })
  });
}

function initButtons() {
  const publics = document.getElementById('public');
  const kids = document.getElementById('kids');
  const enseignants = document.getElementById('enseignants');

  publics.addEventListener('click', () => {
    window.location.pathname = "/index.html";
  })
  kids.addEventListener('click', () => {
    window.location.pathname = "/kids.html";
  })
  enseignants.addEventListener('click', () => {
    window.location.pathname = "/teachers.html";
  })
}

function initSelect() {
  const select = document.getElementById('target');
  const selectButton = document.querySelector('.landing-button');

  selectButton.addEventListener('click', () => {
    const value = select.value;

    if(value === 'enfant') {
      window.location.pathname = '/kids.html';
    } else if (value === 'enseignant') {
      window.location.pathname = '/teachers.html';
    } else if (value === 'parent') {
      window.location.pathname = '/index.html';
    }

  })
}

function triggerBurgerMenu() {
    const body = document.querySelector('body');
    const bm = document.querySelector('.bm__outer');

    bm.addEventListener('click', function() {
        body.classList.toggle('bmIsOpen');
    });
}

if (!isLg()) {
  triggerBurgerMenu();
  initSelect();
}else {
  initButtons();
  hoverIcon();
}
