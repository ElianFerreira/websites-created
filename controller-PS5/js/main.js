document.getElementById('pdts').addEventListener('click', function () {
  TweenMax.to('.panel-expand', 1.3, {
    scale: 1,
    width: '100%',
    ease: Expo.easeInOut,
  });
});

