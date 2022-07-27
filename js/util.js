const uploadForm = document.querySelector('.img-upload__overlay');

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
};

const showSuccess = () => {
  const successMessage = document.querySelector('#success').content.cloneNode(true);
  document.body.appendChild(successMessage);
  uploadForm.classList.add('hidden');
};

export {getRandomPositiveInteger, showAlert, showSuccess};
