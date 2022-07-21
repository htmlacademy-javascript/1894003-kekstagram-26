import {createPhotos} from './data.js';

const bigPictureTemplate = document.querySelector('.big-picture').content;
bigPictureTemplate.classList.remove('hidden');

const bigUploadList = document.querySelector('.big-picture__preview');

const similarBigPhotos = createPhotos();

// функция, которая будет рендерить нам одно изображение
// в аргументе picture - объект с данными для отрисовки
// функция возвращает готовый к отрисовке DOM-элемент
const renderBigPicture = (picture) => {
  const bigPictureElement = bigPictureTemplate.cloneNode(true);
  bigPictureElement.querySelector('..big-picture__img').src = big-picture.img;
  bigPictureElement.querySelector('.likes-count').textContent = big-picture.likes;
  bigPictureElement.querySelector('.comments-count').textContent = picture.comments.length;
  bigPictureElement.querySelector('.social__comments').textContent = picture.comments.length;
  bigPictureElement.querySelector('.social__caption').textContent = description;

  return bigPictureElement
}

// функция, которая будет рендерить сразу несколько фоток
// в аргументе pictures массив с данными фоток
// из функции возвращаем фрагмент, наполненный DOM-элементами
const renderBigPictures = (pictures) => {
  // создаём фрагмент
  const fragment = document.createDocumentFragment()

  // обходим массив pictures, на каждой итерации рендерим один элемент
  pictures.forEach((picture) => {
    fragment.appendChild(renderBigPicture(picture))
  })

  return fragment
}

// функцией renderPictures рендерим все фотографии и сразу вставляем из в uploadList
bigUploadList.appendChild(renderBigPictures(similarBigPhotos))

/*После открытия окна спрячьте блоки счётчика комментариев .social__comment-count и загрузки новых комментариев .comments-loader, добавив им класс hidden, с ними мы разберёмся позже, в другом домашнем задании.

После открытия окна добавьте тегу <body> класс modal-open, чтобы контейнер с фотографиями позади не прокручивался при скролле. При закрытии окна не забудьте удалить этот класс.

Напишите код для закрытия окна по нажатию клавиши Esc и клике по иконке закрытия.*/


const modalWindow = document.querySelector('.big-picture');
const openModalButton = modalWindow.classList.remove('hidden');

const socialCommentsCount = modalWindow.querySelector('.social__comment-count');
const commentsLoader =  modalWindow.querySelector('.comments-loader');
const modalBody = document.querySelector('body')

openModalButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  socialCommentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  modalBody.classList.add('modal-open');
});

const closeModalButton = modalWindow.querySelector('.big-picture__cancel');

closeModalButton.addEventListener('click', function () {
  modalWindow.classList.add('hidden');
  modalBody.classList.remove('modal-open');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    modalWindow.classList.add('hidden');
    modalBody.classList.remove('modal-open');
  }
});
