let menuBtn = document.querySelector('.btn-menu');
let navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('active');

  menuBtn.querySelector('i').classList.toggle('fa-bars');
  menuBtn.querySelector('i').classList.toggle('fa-times');
});
