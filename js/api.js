import { renderPictures } from './pictures.js';

const uploadList = document.querySelector('.pictures');

const loadImages = () => {
  fetch('https://26.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((photos) => {
      uploadList.appendChild(renderPictures(photos));
    });
};

loadImages();

const sendImage = (data) => {
  fetch('https://26.javascript.pages.academy/kekstagram', {
    method: 'POST',
    body: data,
  });
};

const createRequest = function (onSuccess, onError) {
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
const sendImageAJAX = function (data, onLoad, onError) {
  const xhr = createRequest(onLoad, onError);
  xhr.open('POST', 'https://26.javascript.pages.academy/kekstagram');
  xhr.send(data);
};

export { sendImageAJAX, sendImage };
