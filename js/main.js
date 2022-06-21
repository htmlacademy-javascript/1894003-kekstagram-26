//Функция, возвращающая случайное целое число из переданного диапазона включительно. Пример использования функции:

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Функция для проверки максимальной длины строки. Будет использоваться для проверки длины введённого комментария, но должна быть универсальна.

if(maxLineLength >= currentLineLength) {
  return true;
} else {
  return false;
}

function lineLength (currentLineLength, maxLineLength) {
  if(maxLineLength >= currentLineLength) {
    return true;
  } else {
    return false;
  }
}
