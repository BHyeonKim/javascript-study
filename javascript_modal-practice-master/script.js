'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.close-modal');

const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal);

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Call function like "openModal()" will excute function rightaway
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// We do not call function, we only define it
/*
information about which key was pressed  will be stored in the event that is gonna ocurred as soon as key is pressed,
as i hit the any key, key down event is generated.
Any time the events occured javascript generate an object, and that object contains all information about the event itself, and we can then access to object in the eventhandler.
*/
document.addEventListener('keydown', function (event) {
  //   console.log(event.key);

  if (event.key === 'Escape' && !modal.classList.contains('hidden'))
    closeModal();
});
