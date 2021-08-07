// Slider

let nextBtn = document.querySelector('.btn-next');
let prevBtn = document.querySelector('.btn-prev');
let slide = document.querySelector('.slide-items').children;
let totalSlide = slide.length;
let index = 0;

nextBtn.addEventListener('click', () => {
  index++;
  if (index == totalSlide) {
    index = 0;
  }
  forNum();
  slide[index].classList.add('active');
});

prevBtn.addEventListener('click', () => {
  if (index == 0) {
    index = totalSlide - 1;
  } else {
    index--;
  }
  forNum();
  slide[index].classList.add('active');
});

function forNum() {
  for (let i = 0; i < slide.length; i++) {
    slide[i].classList.remove('active');
  }
}
