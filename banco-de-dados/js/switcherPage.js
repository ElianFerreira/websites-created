'use strict';

/*About section tabs*/

(() => {
  // Pegando os elementos do about-section
  const aboutSection = document.querySelector('.about-section');
  // Pegando os elementos do about-tabs
  const tabsContainer = document.querySelector('.about-tabs');

  // Adicionando um evento de click nas tabs.
  tabsContainer.addEventListener('click', (event) => {
    // Se dentro da classList conter um elemento tab-item
    // E se essa tab-item for diferente de ativo ela irá mudar
    if (
      event.target.classList.contains('tab-item') &&
      !event.target.classList.contains('active')
    ) {
      // target para pegar o atributo no data-target do html
      const target = event.target.getAttribute('data-target');
      console.log(target);

      // Ao clicar em uma nova tab, ele irá remover as classes ativas.
      tabsContainer
        .querySelector('.active')
        .classList.remove('outer-shadow', 'active');
      // E adicionar as classes ativas para uma nova tab
      event.target.classList.add('outer-shadow', 'active');

      // Desativando o conteudo da tab deslecionada.
      aboutSection
        .querySelector('.tab-content.active')
        .classList.remove('active');

      // Ativando o conteudo da tab selecionada.
      aboutSection.querySelector(target).classList.add('active');
    }
  });
})();

function bodyScrollingToggle() {
  document.body.classList.toggle('stop-scrolling');
}

// Portifolio filter and popup

(() => {
  const filterContainer = document.querySelector('.portifolio-filter');
  const portfolioItemsContainer = document.querySelector('.portifolio-items');
  const portfolioItems = document.querySelectorAll('.portifolio-item');

  let itemIndex, slideIndex, screenshots;

  // Filter portifolio items.
  filterContainer.addEventListener('click', (event) => {
    if (
      event.target.classList.contains('filter-item') &&
      !event.target.classList.contains('active')
    ) {
      // Desativando o filtro ativo
      filterContainer
        .querySelector('.active')
        .classList.remove('outer-shadow', 'active');

      event.target.classList.add('active', 'outer-shadow');

      const target = event.target.getAttribute('data-target');

      portfolioItems.forEach((item) => {
        if (target === item.getAttribute('data-category') || target === 'all') {
          item.classList.remove('hide');
          item.classList.add('show');
        } else {
          item.classList.remove('show');
          item.classList.add('hide');
        }
      });
    }
  });

  portfolioItemsContainer.addEventListener('click', (event) => {
    if (event.target.closest('.portifolio-item-inner')) {
      const portfolioItem = event.target.closest(
        '.portifolio-item-inner'
      ).parentElement;

      // get the index in the portfolio
      itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(
        portfolioItem
      );

      screenshots = portfolioItems[itemIndex]
        .querySelector('.portifolio-item-img img')
        .getAttribute('data-screenshots');

      // Convert screenshots into array
      screenshots = screenshots.split(',');

      if (screenshots.length === 1) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
      } else {
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
      }

      slideIndex = 0;
      popupToggle();
      popupSlideShow();
      popupDetails();
    }
  });

  closeBtn.addEventListener('click', () => {
    popupToggle();
    if (projectDetailsContainer.classList.contains('active')) {
      popupDetailsToggle();
    }
  });

  function popupToggle() {
    popup.classList.toggle('open');
    bodyScrollingToggle();
  }

  function popupSlideShow() {
    const imgSrc = screenshots[slideIndex];
    const popupImg = popup.querySelector('.pp-img');
    // Active loader until the popupImg loaded
    popup.querySelector('.pp-loader').classList.add('active');
    popupImg.src = imgSrc;
    popupImg.onload = () => {
      // desactivate loader after the popupImg loaded
      popup.querySelector('.pp-loader').classList.remove('active');
    };
    popup.querySelector('.pp-counter').innerHTML =
      slideIndex + 1 + ' de ' + screenshots.length;
  }

  // nextSlide
  nextBtn.addEventListener('click', () => {
    if (slideIndex === screenshots.length - 1) {
      slideIndex = 0;
    } else {
      slideIndex++;
    }
    popupSlideShow();
  });
  // prevSlide
  prevBtn.addEventListener('click', () => {
    if (slideIndex === 0) {
      slideIndex = screenshots.length - 1;
    } else {
      slideIndex--;
    }
    popupSlideShow();
  });

  function popupDetails() {
    // get the project details

    if (!portfolioItems[itemIndex].querySelector('.portifolio-item-details')) {
      projectDetailsBtn.style.display = 'none';
      return;
    }
    projectDetailsBtn.style.display = 'block';

    const details = portfolioItems[itemIndex].querySelector(
      '.portifolio-item-details'
    ).innerHTML;
    popup.querySelector('.pp-project-details').innerHTML = details;
    const title = portfolioItems[itemIndex].querySelector(
      '.portifolio-item-title'
    ).innerHTML;
    popup.querySelector('.pp-title h2').innerHTML = title;

    const category = portfolioItems[itemIndex].getAttribute('data-category');
    popup.querySelector('.pp-project-category').innerHTML = category
      .split('-')
      .join(' ');
  }

  projectDetailsBtn.addEventListener('click', () => {
    popupDetailsToggle();
  });

  function popupDetailsToggle() {
    if (projectDetailsContainer.classList.contains('active')) {
      projectDetailsBtn.querySelector('i').classList.remove('fa-minus');
      projectDetailsBtn.querySelector('i').classList.add('fa-plus');
      projectDetailsContainer.classList.remove('active');
      projectDetailsContainer.style.maxHeight = 0 + 'px';
    } else {
      projectDetailsBtn.querySelector('i').classList.remove('fa-plus');
      projectDetailsBtn.querySelector('i').classList.add('fa-minus');
      projectDetailsContainer.classList.add('active');
      projectDetailsContainer.style.maxHeight =
        projectDetailsContainer.scrollHeight + 'px';
      popup.scrollTo(0, projectDetailsContainer.offsetTop);
    }
  }
})();
