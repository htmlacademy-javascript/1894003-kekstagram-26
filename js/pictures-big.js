const modalWindow = document.querySelector('.big-picture');

const showBigPicture = (picture) => {
  modalWindow.classList.remove('hidden')
  modalWindow.querySelector('.social__comment-count').classList.add('hidden');
  modalWindow.querySelector('.comments-loader').classList.add('hidden');

  document.body.classList.add('modal-open');

  modalWindow.querySelector('.big-picture__img img').src = picture.url
  modalWindow.querySelector('.likes-count').textContent = picture.likes
  modalWindow.querySelector('.comments-count').textContent = picture.comments.length
  modalWindow.querySelector('.social__caption').textContent = picture.description
}

const hideBigPhoto = () => {
  modalWindow.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

const closeModalButton = modalWindow.querySelector('.big-picture__cancel');

closeModalButton.addEventListener('click', function () {
  modalWindow.classList.add('hidden');
  hideBigPhoto()
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    hideBigPhoto()
  }
});

export { showBigPicture };
