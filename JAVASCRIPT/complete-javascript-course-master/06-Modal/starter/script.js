'use strict';
let showModal = document.querySelectorAll('.show-modal');
let modal = document.querySelector('.modal');
let closeModal = document.querySelector('.close-modal');
let overlay = document.querySelector('.overlay');

//refactoring code or dry code..
let open = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

let close = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < showModal.length; i++)
  showModal[i].addEventListener('click', open);

closeModal.addEventListener('click', close);
overlay.addEventListener('click', close);

//handling keypress event.
document.addEventListener('keydown', function (event) {
  console.log(event);

  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    close();
  }
});
