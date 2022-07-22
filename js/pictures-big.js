// import {similarPhotos} from './data';

const modalWindow = document.querySelector('.big-picture');

const renderComments = (picture) => {
  const globalFragment = document.createDocumentFragment();

  picture.comments.forEach((comment) => {
    const liElement = document.createElement('li');
    liElement.classList.add('social__comment');

    const imgElement = document.createElement('img');
    const paragraphElement = document.createElement('p');

    imgElement.classList.add('social__picture');
    paragraphElement.classList.add('social__text');

    imgElement.src = comment.avatar;
    imgElement.alt = comment.name;
    imgElement.width = "35";
    imgElement.height = "35";
    paragraphElement.textContent = comment.message;
    liElement.appendChild(imgElement);
    liElement.appendChild(paragraphElement);
    globalFragment.appendChild(liElement);
  });
  console.log(globalFragment);
  return globalFragment;
};

const showBigPicture = (picture) => {
  modalWindow.classList.remove('hidden');
  modalWindow.querySelector('.social__comment-count').classList.add('hidden');
  modalWindow.querySelector('.comments-loader').classList.add('hidden');

  document.body.classList.add('modal-open');

  modalWindow.querySelector('.big-picture__img img').src = picture.url;
  modalWindow.querySelector('.likes-count').textContent = picture.likes;
  modalWindow.querySelector('.comments-count').textContent = picture.comments.length;
  modalWindow.querySelector('.social__caption').textContent = picture.description;
  const comments = modalWindow.querySelector('.social__commentimg-upload__starts');
  comments.innerHTML = null;
  comments.appendChild(renderComments(picture));
};

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
