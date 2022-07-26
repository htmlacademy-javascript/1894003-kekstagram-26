export const checkHashTag = [
  {
    error: 'Хэш-теги должны быть уникальными',
    test: (list) => new Set(list.map((tag) => tag.toLowerCase())).size === list.length, //проверка на повторы
  },
  {
    error: 'Содержимое не соответствует требованиям',
    test: (list) => {
      const regExp = new RegExp(/^#[A-zА-я0-9]{1,19}$/);
      return list.every((hashtag) => regExp.test(hashtag)); //проверка на содержимое
    },
  },
  {
    error: 'Хэш-теги разделяются пробелами',
    test: (list) =>
      list.every(
        (hashtag) => [...hashtag].findLastIndex((symbol) => symbol === '#') === 0
      ), //проверка на пробелы между хэш-тегами
  },
  {
    error: 'Нельзя указать больше пяти хэш-тегов',
    test: (list) => list.length <= 5,
  }, // проверка на количество хэш-тегов
];

export const uploadForm = document.querySelector('.img-upload__form');
const hashtagInput = document.querySelector('.text__hashtags');

export const pristine = new Pristine(uploadForm);

pristine.addValidator(hashtagInput, (value) => {
  if (value.trim() === '') {
    return true;
  }

  const hashtagList = value.trim().split(' ');

  return checkHashTag.every(({ test }) => test(hashtagList));
}, 'Неверный формат хештегов');

uploadForm.addEventListener('submit', (e) => {
  if (!pristine.validate()) {
    e.preventDefault();
  }
});
