import './validation.js';

const uploadInput = document.querySelector('#upload-file');
const uploadForm = document.querySelector('.img-upload__overlay');
const hashtagInput = document.querySelector('.text__hashtags');
const commentTextarea = document.querySelector('.text__description');

const onClickForm = () => {
  uploadForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  // uploadInput.removeEventListener('change', onClickForm);
};

uploadInput.addEventListener('change', onClickForm);

const closeUploadButton = document.querySelector('#upload-cancel');

const closeOnClickForm = () => {
  uploadForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  // closeUploadButton.removeEventListener('click', closeOnClickForm);
};

closeUploadButton.addEventListener('click', closeOnClickForm);

const closeOnKeyForm = (evt) => {
  if (
    evt.key === 'Escape' &&
    evt.target !== hashtagInput &&
    evt.target !== commentTextarea
  ) {
    uploadForm.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
};

document.addEventListener('keydown', closeOnKeyForm);
