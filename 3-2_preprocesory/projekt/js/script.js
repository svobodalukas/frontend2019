const navToggle = document.querySelector('#navToggle');
const navList = document.querySelector('#navList');
const overlay = document.querySelector('#overlay');

navToggle.onclick = function() {
  navList.classList.toggle('nav-list-active');
  overlay.classList.toggle('overlay-active');
}

overlay.onclick = function() {
  navList.classList.toggle('nav-list-active');
  overlay.classList.toggle('overlay-active');
}