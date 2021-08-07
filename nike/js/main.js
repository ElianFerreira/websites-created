let nextBtn = document.querySelector('.slide-next');
let prevBtn = document.querySelector('.slide-prev');
let slide = document.getElementById('slider').children;
let itemSlide = document.querySelector('.slides').children;
let totalSlide = slide.length;
let index = 0;

console.log(itemSlide);

nextBtn.addEventListener('click', () => {
  index++;
  if (index == totalSlide) {
    index = 0;
  }
  forNum();
  slide[index].classList.add('active');
  itemSlide[index].classList.add('active');
});

prevBtn.addEventListener('click', () => {
  if (index == 0) {
    index = totalSlide - 1;
  } else {
    index--;
  }
  forNum();
  slide[index].classList.add('active');
  itemSlide[index].classList.add('active');
});

function forNum() {
  for (let i = 0; i < slide.length; i++) {
    slide[i].classList.remove('active');
    itemSlide[i].classList.remove('active');
  }
}
