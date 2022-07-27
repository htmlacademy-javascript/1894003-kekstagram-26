const uploadForm = document.querySelector('.img-upload__overlay');
const errorField = document.querySelector('.error');
const successField = document.querySelector('.success');
const errorButton = document.querySelector('.error__button');
const successButton = document.querySelector('.success__button');

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const showAlert = () => {
  const errorMessage = document.querySelector('#error').content.cloneNode(true);
  document.body.appendChild(errorMessage);
  uploadForm.classList.add('hidden');

  errorField.addEventListener('click', () => {
    errorMessage.classList.add('hidden');
  });

  errorButton.addEventListener('click', () => {
    errorMessage.classList.add('hidden');
  });
};

const showSuccess = () => {
  const successMessage = document.querySelector('#success').content.cloneNode(true);
  document.body.appendChild(successMessage);
  uploadForm.classList.add('hidden');

  successField.addEventListener('click', () => {
    successMessage.classList.add('hidden');
  });

  successButton.addEventListener('click', () => {
    successMessage.classList.add('hidden');
  });
};

export {getRandomPositiveInteger, showAlert, showSuccess};
