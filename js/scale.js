const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

const SCALE_VALUE_STEP = 25;
const MAX_VALUE = 100;
const MIN_VALUE = 25;
let SCALE_VALUE_START = 100;

scaleBigger.addEventListener('click', () => {
  if (SCALE_VALUE_START + SCALE_VALUE_STEP > MAX_VALUE) {
    SCALE_VALUE_START = MAX_VALUE;
  } else {
    SCALE_VALUE_START += SCALE_VALUE_STEP;
  }
  imgUploadPreview.style = `transform: scale(${SCALE_VALUE_START / 100})`;
  scaleValue.value = `${SCALE_VALUE_START}%`;
});

scaleSmaller.addEventListener('click', () => {
  if (SCALE_VALUE_START - SCALE_VALUE_STEP < MIN_VALUE) {
    SCALE_VALUE_START = MIN_VALUE;
  } else {
    SCALE_VALUE_START -= SCALE_VALUE_STEP;
  }
  imgUploadPreview.style = `transform: scale(${SCALE_VALUE_START / 100})`;
  scaleValue.value = `${SCALE_VALUE_START}%`;
});
