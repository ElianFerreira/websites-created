'use strict';
(() => {
  const hamburguerBtn = document.querySelector('.hamburguer-btn');
  const navMenu = document.querySelector('.nav-menu');
  const closeNavBtn = navMenu.querySelector('.close-nav-menu');

  hamburguerBtn.addEventListener('click', showNavMenu);
  closeNavBtn.addEventListener('click', hideNavMenu);

  function showNavMenu() {
    navMenu.classList.add('open');
    bodyScrollingToggle();
  }
  function hideNavMenu() {
    navMenu.classList.remove('open');
    fadeOutEffect();
    bodyScrollingToggle();
  }
  function fadeOutEffect() {
    document.querySelector('.fade-out-effect').classList.add('active');
    setTimeout(() => {
      document.querySelector('.fade-out-effect').classList.remove('active');
    }, 300);
  }

  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('link-item')) {
      if (event.target.hash !== '') {
        event.preventDefault();
        const hash = event.target.hash;
        // desative existing section
        document.querySelector('.section.active').classList.add('hide');
        document.querySelector('.section.active').classList.remove('active');

        // active new section
        document.querySelector(hash).classList.add('active');
        document.querySelector(hash).classList.remove('hide');

        // desative existing nav-menu link
        navMenu
          .querySelector('.active')
          .classList.add('outer-shadow', 'hover-in-shadow');
        navMenu
          .querySelector('.active')
          .classList.remove('active', 'inner-shadow');

        if (navMenu.classList.contains('open')) {
          // active new nav-menu link
          event.target.classList.add('active', 'inner-shadow');
          event.target.classList.remove('outer-shadow', 'hover-in-shadow');
          // hide navigation menu
          hideNavMenu();
        } else {
          let navItems = navMenu.querySelectorAll('.link-item');
          navItems.forEach((item) => {
            if (hash === item.hash) {
              item.classList.add('active', 'inner-shadow');
              item.classList.remove('outer-shadow', 'hover-in-shadow');
            }
          });
          fadeOutEffect();
        }
        // Add hash(#) for url browser
        window.location.hash = hash;
      }
    }
  });
})();
