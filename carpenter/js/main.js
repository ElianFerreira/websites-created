window.onscroll = function () {
  var top = window.pageYOffset || document.documentElement.scrollTop;
  const menuHeader = document.querySelector('header');
  if (top > 50) {
    menuHeader.classList.add('active');
  } else {
    menuHeader.classList.remove('active');
  }
};

let images = document.querySelectorAll('#slider img');
let currentImage = 0;
let max = images.length;
let time = 2000;

function nextImage() {
  images[currentImage].classList.remove('selected');

  currentImage++;

  if (currentImage >= max) {
    currentImage = 0;
  }

  images[currentImage].classList.add('selected');
}

function start() {
  setInterval(() => {
    nextImage();
  }, time);
}

window.addEventListener('load', start());