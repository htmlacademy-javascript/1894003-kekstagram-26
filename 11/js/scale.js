const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview img');

const SCALEVALUESTEP = 25;
const MAXVALUE = 100;
const MINVALUE = 25;
let SCALEVALUESTART = 100;

scaleBigger.addEventListener('click', () => {
  if (SCALEVALUESTART + SCALEVALUESTEP > MAXVALUE) {
    SCALEVALUESTART = MAXVALUE;
  } else {
    SCALEVALUESTART += SCALEVALUESTEP;
  }
  imgUploadPreview.style = `transform: scale(${SCALEVALUESTART / 100})`;
  scaleValue.value = `${SCALEVALUESTART}%`;
});

scaleSmaller.addEventListener('click', () => {
  if (SCALEVALUESTART - SCALEVALUESTEP < MINVALUE) {
    SCALEVALUESTART = MINVALUE;
  } else {
    SCALEVALUESTART -= SCALEVALUESTEP;
  }
  imgUploadPreview.style = `transform: scale(${SCALEVALUESTART / 100})`;
  scaleValue.value = `${SCALEVALUESTART}%`;
});
