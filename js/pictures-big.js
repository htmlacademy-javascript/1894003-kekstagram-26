// import {similarPhotos} from './data';

const modalWindow = document.querySelector('.big-picture');

const renderComments = (comments) => {
  const bigFragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const liElement = document.createElement('li');
    liElement.classList.add('social__comment');

    const imgElement = document.createElement('img');
    const paragraphElement = document.createElement('p');

    imgElement.classList.add('social__picture');
    paragraphElement.classList.add('social__text');

    imgElement.src = comment.avatar;
    imgElement.alt = comment.name;
    imgElement.width = '35';
    imgElement.height = '35';
    paragraphElement.textContent = comment.message;
    liElement.appendChild(imgElement);
    liElement.appendChild(paragraphElement);
    bigFragment.appendChild(liElement);
  });
  return bigFragment;
};

let commentsCount = null;
let commentsLenth = null;
let commentsForPicture = null;

const changeCommentsCount = () => {
  const socialCommentsCount = modalWindow.querySelector('.social__comment-count');
  socialCommentsCount.innerHTML = `${commentsCount} из <span class="comments-count">${commentsLenth}</span> комментариев`;
};

const showBigPicture = (picture) => {
  modalWindow.classList.remove('hidden');

  document.body.classList.add('modal-open');

  modalWindow.querySelector('.big-picture__img img').src = picture.url;
  modalWindow.querySelector('.likes-count').textContent = picture.likes;
  modalWindow.querySelector('.comments-count').textContent = picture.comments.length;
  commentsLenth = picture.comments.length;
  commentsForPicture = picture.comments;
  modalWindow.querySelector('.comments-loader').classList.remove('hidden');
  commentsCount = 5;
  modalWindow.querySelector('.social__caption').textContent = picture.description;
  const comments = modalWindow.querySelector('.social__commentimg-upload__starts');
  comments.innerHTML = null;
  comments.appendChild(renderComments(picture.comments.slice(0, commentsCount)));

  if(commentsLenth <= 5) {
    modalWindow.querySelector('.comments-loader').classList.add('hidden');
    commentsCount = commentsLenth;
  }
  changeCommentsCount();
};

const commentsLoader = modalWindow.querySelector('.comments-loader');

commentsLoader.addEventListener('click', () => {

  if(commentsLenth > commentsCount + 5) {
    commentsCount += 5;
  }
  else {
    commentsCount = commentsLenth;
    modalWindow.querySelector('.comments-loader').classList.add('hidden');
  }
  const comments = modalWindow.querySelector('.social__commentimg-upload__starts');
  comments.innerHTML = null;
  comments.appendChild(renderComments(commentsForPicture.slice(0, commentsCount)));
  changeCommentsCount();
} );

const hideBigPhoto = () => {
  modalWindow.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const closeModalButton = modalWindow.querySelector('.big-picture__cancel');

closeModalButton.addEventListener('click', () => {
  modalWindow.classList.add('hidden');
  hideBigPhoto();
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    hideBigPhoto();
  }
});

export { showBigPicture };
