export const checkHashTag = [
  {
    error: 'Хэш-теги должны быть уникальными',
    test: (list) => new Set(list).size === list.length, //проверка на повторы
  },
  {
    error: 'Содержимое не соответствует требованиям',
    test: (list) => {
      const regExp = new RegExp(/^#[A-Za=zА-Яа-яЁё0-9]{1,19}$/);
      return list.every((hashtag) => regExp.test(hashtag)); //проверка на содержимое
    },
  },
  {
    error: 'Хэш-теги разделяются пробелами',
    test: (list) =>
      list.every(
        (hashtag) =>
          [...hashtag].findLastIndex((symbol) => symbol === '#') === 0
      ), //проверка на пробелы между хэш-тегами
  },
  {
    error: 'Нельзя указать больше пяти хэш-тегов',
    test: (list) => list.length <= 5,
  }, // проверка на количество хэш-тегов
];
