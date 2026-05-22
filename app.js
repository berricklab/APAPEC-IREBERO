<script>

/* =========================
DARK/LIGHT MODE
========================= */

const themeToggle =
document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {

  document.body.classList.toggle('light-mode');

  if(document.body.classList.contains('light-mode')){

    themeToggle.innerHTML = '☀️';

  } else {

    themeToggle.innerHTML = '🌙';
  }

});

</script>

const cards = document.querySelectorAll('.card');

function revealCards(){

const triggerBottom = window.innerHeight * 0.85;

cards.forEach(card=>{

const cardTop = card.getBoundingClientRect().top;

if(cardTop < triggerBottom){
card.style.opacity = '1';
card.style.transform = 'translateY(0)';
}

});
}

window.addEventListener('scroll',revealCards);
revealCards();

if('serviceWorker' in navigator){
window.addEventListener('load',()=>{

navigator.serviceWorker.register('service-worker.js');

});
}
