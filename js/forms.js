import './validation.js';
import { pristine } from './validation.js';

const uploadInput = document.querySelector('#upload-file');
const uploadForm = document.querySelector('.img-upload__overlay');
const hashtagInput = document.querySelector('.text__hashtags');
const commentTextarea = document.querySelector('.text__description');

const onClickForm = () => {
  uploadForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

uploadInput.addEventListener('change', onClickForm);

const closeUploadButton = document.querySelector('#upload-cancel');

const closeOnClickForm = () => {
  uploadForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  uploadInput.value = '';
  pristine.reset();
};

closeUploadButton.addEventListener('click', closeOnClickForm);

const closeOnKeyForm = (evt) => {
  if (
    evt.key === 'Escape' &&
    evt.target !== hashtagInput &&
    evt.target !== commentTextarea
  ) {
    closeOnClickForm();
  }
};

document.addEventListener('keydown', closeOnKeyForm);
