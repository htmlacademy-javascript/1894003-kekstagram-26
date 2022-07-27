import './validation.js';
import { sendImageAJAX } from './api.js';
import { showSuccess, showAlert } from './util.js';

const uploadInput = document.querySelector('#upload-file');
const uploadForm = document.querySelector('.img-upload__overlay');
const hashtagInput = document.querySelector('.text__hashtags');
const commentTextarea = document.querySelector('.text__description');
const formSubmit = document.querySelector('.img-upload__form');
// const imgUploadPreview = document.querySelector('.img-upload__preview');

const onclickForm = () => {
  uploadForm.classList.remove('hidden');
  document.body.classList.add('modal-open');
  uploadInput.removeEventListener('change', onclickForm);
};

uploadInput.addEventListener('change', onclickForm);

const closeUploadButton = document.querySelector('#upload-cancel');

const closeOnClickForm = () => {
  uploadForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  closeUploadButton.removeEventListener('click', closeOnClickForm);
};

closeUploadButton.addEventListener('click', closeOnClickForm);

const closeOnKeyForm = (evt) => {
  if (evt.key === 'Escape' && evt.target !== hashtagInput && evt.target !== commentTextarea) {
    uploadForm.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
};

document.addEventListener('keydown', closeOnKeyForm);

const onPressSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  sendImageAJAX(formData, showSuccess, showAlert);
};

formSubmit.addEventListener('submit', onPressSubmit);
