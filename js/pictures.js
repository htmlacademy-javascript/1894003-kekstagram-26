// import {similarPhotos} from './data.js';
import { showBigPicture } from './pictures-big.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

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


const renderPictures = (pictures) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    fragment.appendChild(renderPicture(picture));
  });

  return fragment;
};

export { renderPictures };
