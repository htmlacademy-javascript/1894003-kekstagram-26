const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview');

const scaleValueStep = 25;
const maxValue = 100;
const minValue = 25;
let scaleValueStart = 100;

scaleBigger.addEventListener('click', () => {
  if(scaleValueStart + scaleValueStep > maxValue) {
    scaleValueStart = maxValue;
  } else {
    scaleValueStart += scaleValueStep;
  }
  imgUploadPreview.style = `transform: scale(${scaleValueStart / 100})`;
  scaleValue.value = `${scaleValueStart}%`;
});

scaleSmaller.addEventListener('click', () => {
  if(scaleValueStart - scaleValueStep < minValue) {
    scaleValueStart = minValue;
  } else {
    scaleValueStart -= scaleValueStep;
  }
  imgUploadPreview.style = `transform: scale(${scaleValueStart / 100})`;
  scaleValue.value = `${scaleValueStart}%`;
});

// scaleValue.addEventListener('blur', () => {
//   const currentValue = scaleValue.value;
//   if(currentValue > maxValue) {
//     scaleValueStep = maxValue;
//   }
//   if(currentValue < minValue) {
//     scaleValueStart = minValue;
//   }
// })
