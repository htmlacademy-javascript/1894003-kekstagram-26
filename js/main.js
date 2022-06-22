//Функция, возвращающая случайное целое число из переданного диапазона включительно.

function getRandomInt(min, max) {
  if (min > 0 && max > 0 && min <= max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else  {
   return -1;
  }
}

//Функция для проверки максимальной длины строки. Будет использоваться для проверки длины введённого комментария, но должна быть универсальна.

function lineLength (strLine, maxLineLength) {
 return strLine.length <= maxLineLength;
}
