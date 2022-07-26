import './validation.js';

const uploadInput = document.querySelector('#upload-file');
const uploadForm = document.querySelector('.img-upload__overlay');
const hashtagInput = document.querySelector('.text__hashtags');
const commentTextarea = document.querySelector('.text__description');

uploadInput.addEventListener('change', () => {
  uploadForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
});

const closeUploadButton = document.querySelector('#upload-cancel');

closeUploadButton.addEventListener('click', () => {
  uploadForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape' && evt.target !== hashtagInput && evt.target !== commentTextarea) {
    uploadForm.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
});
