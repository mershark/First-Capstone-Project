const menukill = () => {
  const mobilenav = document.getElementById('mobilenav');
  if (mobilenav) {
    mobilenav.style.width = '0';
  }

  const main = document.getElementById('main');
  if (main) {
    main.style.marginLeft = '0';
  }

  document.body.style.backgroundColor = 'rgba(255, 255, 255, 1)';
};

const closeMenu = () => {
  menukill();
};

const menuopen = () => {
  const mobilenav = document.getElementById('mobilenav');
  if (mobilenav) {
    mobilenav.style.width = '100%';
  }

  const main = document.getElementById('main');
  if (main) {
    main.style.marginLeft = '250px';
  }

  document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
};

const menuToggle = document.getElementById('menu-toggle');
if (menuToggle) {
  menuToggle.addEventListener('click', menuopen);
}

const closeMenuLinks = document.querySelectorAll('.close-menu');
if (closeMenuLinks) {
  closeMenuLinks.forEach((link) => {
    link.addEventListener('click', closeMenu);
  });
}