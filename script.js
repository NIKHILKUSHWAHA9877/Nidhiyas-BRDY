document.getElementById('cakeContainer').addEventListener('click', function() {
  cutCake();
});

function cutCake() {
  // You can modify the cake layers or add animations here
  document.querySelector('.top-layer_1').style.animation = 'cut-animation 2s forwards';
  document.querySelector('.middle-layer_1').style.animation = 'cut-animation 2s 1s forwards';
  document.querySelector('.bottom-layer_1').style.animation = 'cut-animation 2s 2s forwards';
}

// function playAudio() {
//   var audio = document.querySelector('audio');
//   audio.muted = false;
// }