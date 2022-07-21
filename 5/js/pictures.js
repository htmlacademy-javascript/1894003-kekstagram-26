import {similarPhotos} from './data.js';
import { showBigPicture } from './pictures-big.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const uploadList = document.querySelector('.pictures');

// функция, которая будет рендерить нам одно изображение
// в аргументе picture - объект с данными для отрисовки
// функция возвращает готовый к отрисовке DOM-элемент
const renderPicture = (picture) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = picture.url;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;

  pictureElement.addEventListener('click', (e) => {
    e.preventDefault();
    showBigPicture(picture);
  });

  return pictureElement;
};

// функция, которая будет рендерить сразу несколько фоток
// в аргументе pictures массив с данными фоток
// из функции возвращаем фрагмент, наполненный DOM-элементами
const renderPictures = (pictures) => {
  // создаём фрагмент
  const fragment = document.createDocumentFragment();

  // обходим массив pictures, на каждой итерации рендерим один элемент
  pictures.forEach((picture) => {
    fragment.appendChild(renderPicture(picture));
  });

  return fragment;
};

// функцией renderPictures рендерим все фотографии и сразу вставляем из в uploadList
uploadList.appendChild(renderPictures(similarPhotos));
