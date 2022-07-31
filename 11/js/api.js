import { renderPictures } from './pictures.js';
import { getFilteredPhotos } from './util.js';

const picturesContainer = document.querySelector('.pictures');
const filteredSection = document.querySelector('.img-filters');
const API_URL = 'https://26.javascript.pages.academy/kekstagram';

const loadImages = () => {
  fetch(`${API_URL}/data`)
    .then((response) => response.json())
    .then((photos) => {
      localStorage.setItem('photos', JSON.stringify(photos));
      const filteredPhotos = getFilteredPhotos(photos);
      picturesContainer.appendChild(renderPictures(filteredPhotos));
      filteredSection.classList.remove('img-filters--inactive');
    });
};

loadImages();

const createRequest = (onSuccess, onError) => {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.addEventListener('load', () => {
    if (xhr.status === 200) {
      onSuccess();
    } else {
      onError();
    }
  });
  return xhr;
};

// отправка данных на сервер
const sendImageAJAX = (data, onLoad, onError) => {
  const xhr = createRequest(onLoad, onError);
  xhr.open('POST', API_URL);
  xhr.send(data);
};

export { sendImageAJAX };
