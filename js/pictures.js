/*<template id="picture">
<a href="#" class="picture">
  <img class="picture__img" src="" width="182" height="182" alt="Случайная фотография">
  <p class="picture__info">
    <span class="picture__comments"></span>
    <span class="picture__likes"></span>
  </p>
</a>
</template>*/

import {createPhotos} from './data.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const uploadList = document.querySelector('.pictures');

const similarPhotos = createPhotos();

// функция, которая будет рендерить нам одно изображение
// в аргументе picture - объект с данными для отрисовки
// функция возвращает готовый к отрисовке DOM-элемент
const renderPicture = (picture) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = picture.img;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;

  return pictureElement
}

// функция, которая будет рендерить сразу несколько фоток
// в аргументе pictures массив с данными фоток
// из функции возвращаем фрагмент, наполненный DOM-элементами
const renderPictures = (pictures) => {
  // создаём фрагмент
  const fragment = document.createDocumentFragment()

  // обходим массив pictures, на каждой итерации рендерим один элемент
  pictures.forEach((picture) => {
    fragment.appendChild(renderPicture(picture))
  })

  return fragment
}

// функцией renderPictures рендерим все фотографии и сразу вставляем из в uploadList
uploadList.appendChild(renderPictures(similarPhotos))
