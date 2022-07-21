import {getRandomPositiveInteger} from './util.js';

const DESCRIPTION = [
  'Первое фото',
  'Второе фото',
  'Третье фото',
  'Четвертое фото',
  'Пятое фото',
  'Шестое фото',
  'Седьмое фото',
  'Восьмое фото',
  'Девятое фото',
  'Десятое фото',
  'Одиннадцатое фото',
  'Двеннадцатое фото',
  'Тринадцатое фото',
  'Четырнадцатое фото',
  'Пятнадцатое фото',
  'Шестнадцатое фото',
  'Семнадцатое фото',
  'Восемнадцатое фото',
  'Девятнадцатое фото',
  'Двадцатое фото',
  'Двадцать первое фото',
  'Двадцать второе фото',
  'Двадцать третье фото',
  'Двадцать четвертое фото',
  'Двадцать пятое фото'
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Вася',
  'Петя',
  'Сережа',
  'Люба',
  'Женя',
  'Марина',
  'Алевтина',
  'Иван'
];

const selectMessage = () => {
  const count = getRandomPositiveInteger(1,2);
  const firstNumber =  getRandomPositiveInteger(0,MESSAGE.length - 1);
  if (count === 1) {
    return MESSAGE[firstNumber];
  }

  let secondNumber = getRandomPositiveInteger(0,MESSAGE.length - 1);
  while (firstNumber === secondNumber) {
    secondNumber = getRandomPositiveInteger(0,MESSAGE.length - 1);
  }
  return `${MESSAGE[firstNumber]} ${MESSAGE[secondNumber]}`;
};

const commentsId = [];

const photosId = [];

const getId = (list, min, max) => {
  let id = getRandomPositiveInteger(min, max);

  while (list.findIndex((element) => element === id) !== -1) {
    id = getRandomPositiveInteger(min, max);
  }
  list.push(id);
  return id;
};

const createComment = () => ({
  id: getId(commentsId,1,100000000),
  avatar: `img/avatar-${getRandomPositiveInteger(1,25)}.svg`,
  message: selectMessage(),
  name: NAMES[getRandomPositiveInteger(0,NAMES.length - 1)]
});

const makePhoto = () => ({
  id: getId(photosId,1,25),
  url: `photos/{{${getRandomPositiveInteger(1,25)}}}.jpg`,
  description: DESCRIPTION[getRandomPositiveInteger(0,DESCRIPTION.length - 1)],
  likes: getRandomPositiveInteger(15,200),
  comments: Array.from({length: getRandomPositiveInteger(1,25)}, createComment)
});

const createPhotos = () => Array.from({length: 25}, makePhoto);

const similarPhotos = createPhotos();

export {createPhotos, similarPhotos};
