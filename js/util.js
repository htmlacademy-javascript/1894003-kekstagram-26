import { renderPictures } from './pictures.js';

const uploadForm = document.querySelector('.img-upload__overlay');

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const showAlert = () => {
  const errorMessage = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
  document.body.appendChild(errorMessage);
  uploadForm.classList.add('hidden');

  const onAlertEsc = (evt) => {
    // errorMessage.remove();
    if (evt.key === 'Escape') {
      errorMessage.remove();
    }
  };
  errorMessage.addEventListener('click', onAlertEsc);
};

const showSuccess = () => {
  const successMessage = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
  document.body.appendChild(successMessage);
  uploadForm.classList.add('hidden');

  const successButton = successMessage.querySelector('#success').content.querySelector('.success__inner').cloneNode(true);
  successMessage.appendChild(successButton);

  const onAlertEsc = (evt) => {
    if (evt.key === 'Escape') {
      successMessage.remove();
    }
  };

  const onAlertClick = () => {
    successMessage.remove();
  };

  successMessage.addEventListener('keydown', onAlertEsc);
  successButton.addEventListener('click', onAlertClick);
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

//Сортировка
let lastClickedFilteredButton = 'default';

const defaultButton = document.querySelector('#filter-default');
const randomButton = document.querySelector('#filter-random');
const disscussedButton = document.querySelector('#filter-discussed');
const picturesContainer = document.querySelector('.pictures');
const photosFromStorage = JSON.parse(localStorage.getItem('photos'));
const imgUpload = document.querySelector('.img-upload');
const header = document.querySelector('.pictures__title');

defaultButton.classList.add('img-filters__button--active');

const getRandomPhotos = (photos) => {
  const newPhotos = [];
  let newPhoto = photos[getRandomPositiveInteger(0, photos.length-1)];
  while (newPhotos.length < 10) {
    if(newPhotos.findIndex((element) => element.id === newPhoto.id) === -1) {
      newPhotos.push(newPhoto);
    }
    newPhoto = photos[getRandomPositiveInteger(0, photos.length-1)];
  }
  return newPhotos;
};

const getFilteredPhotos = (photos) => {
  switch(lastClickedFilteredButton) {
    case 'random':
      return getRandomPhotos(photos);
    case 'discussed':
      return [...photos].sort((a, b) => b.comments.length - a.comments.length);
    default:
      return photos;
  }
};

const reRenderPhotos = () => {
  picturesContainer.innerHTML = null;
  picturesContainer.appendChild(header);
  picturesContainer.appendChild(imgUpload);
  const filteredPhotos = getFilteredPhotos(photosFromStorage);
  picturesContainer.appendChild(renderPictures(filteredPhotos));
};

const onclickDefaulButton = debounce(() => {
  if(lastClickedFilteredButton === 'random') {
    randomButton.classList.remove('img-filters__button--active');
  }
  else {
    disscussedButton.classList.remove('img-filters__button--active');
  }
  defaultButton.classList.add('img-filters__button--active');
  lastClickedFilteredButton = 'default';
  reRenderPhotos();
});

defaultButton.addEventListener('click', onclickDefaulButton);

const onclickRandomButton = debounce(() => {
  if(lastClickedFilteredButton === 'default') {
    defaultButton.classList.remove('img-filters__button--active');
  }
  else {
    disscussedButton.classList.remove('img-filters__button--active');
  }
  randomButton.classList.add('img-filters__button--active');
  lastClickedFilteredButton = 'random';
  reRenderPhotos();
});

randomButton.addEventListener('click', onclickRandomButton);

const onclickDisscussedButton = debounce(() => {
  if(lastClickedFilteredButton === 'random') {
    randomButton.classList.remove('img-filters__button--active');
  }
  else {
    defaultButton.classList.remove('img-filters__button--active');
  }
  disscussedButton.classList.add('img-filters__button--active');
  lastClickedFilteredButton = 'discussed';
  reRenderPhotos();
});

disscussedButton.addEventListener('click', onclickDisscussedButton);

export {getRandomPositiveInteger, showAlert, showSuccess, debounce, getFilteredPhotos };
