// (() => {
// const refs = {
//   openModalBtn: document.querySelector('[data-modal-open]'),
//   closeModalBtn: document.querySelector('[data-modal-close]'),
//   backdrop: document.querySelector('[data-backdrop]'),
// };

// refs.openModalBtn.addEventListener('click', toggleModal);
// refs.closeModalBtn.addEventListener('click', toggleModal);

// // refs.backdrop.addEventListener('click', logBackdropClick);

// function toggleModal() {
//   refs.backdrop.classList.toggle('is-hidden');
// }

// чтоб не прокручивался контент позади модалки
// function toggleModal() {
// document.body.classList.toggle("modal-open");
// refs.modal.classList.toggle("is-hidden");
// }
// }
// )
// ();

// const modal = document.querySelector('.backdrop');
// const modalBtnOpen = document.querySelector('.modal-btn-open');
// const modalBtnClose = document.querySelector('.modal-btn-close');

// const toggleModal = () => {
//   document.body.classList.toggle('.modal-open');
//   modal.classList.toggle('is-hidden');
// };

// modalBtnOpen.addEventListener('click', toggleModal);
// modalBtnClose.addEventListener('click', toggleModal);

// function toggleModal() {
//   document.body.classList.toggle('nodal-open');
//   refs.modal.classList.toggle('is-hidden');
// }



// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-open-modal]'),
//     closeModalBtn: document.querySelector('[data-close-modal]'),
//     backdrop: document.querySelector('[data-backdrop]'),
//   };

//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);

//   refs.backdrop.addEventListener('click', logBackdropClick);

//   function toggleModal() {
//     // document.body.classList.toggle('modal-open');
//     refs.backdrop.classList.toggle('is-hidden');
//   }
// })();

const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelector('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => {
  document.body.classList.toggle('modal-open');
  modal.classList.toggle('is-hidden');
};

modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);