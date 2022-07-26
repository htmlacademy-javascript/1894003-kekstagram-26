const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const originalElement = document.querySelector('#effect-none');
const chromeElement = document.querySelector('#effect-chrome');
const sepiaElement = document.querySelector('#effect-sepia');
const marvinElement = document.querySelector('#effect-marvin');
const phobosElement = document.querySelector('#effect-phobos');
const heatElement = document.querySelector('#effect-heat');
const imgUploadPreview = document.querySelector('.img-upload__preview');
let currentEffect = 'none';
const sliderContainer = document.querySelector('.img-upload__effect-level');
sliderContainer.classList.add('hidden');

const EFFECTS = [
  {name: 'none', filter: 'none', setEffect: () => ''},
  {name: 'chrome', filter: 'grayscale', minValue: 0, maxValue: 1, setEffect: (value) => `filter: grayscale(${value})`},
  {name: 'sepia', filter: 'sepia', minValue: 0, maxValue: 1, setEffect: (value) => `filter: sepia(${value})`},
  {name: 'marvin', filter: 'invert', minValue: 0, maxValue: 100, setEffect: (value) => `filter: marvin(${value})`},
  {name: 'phobos', filter: 'blur', minValue: 0, maxValue: 3, setEffect: (value) => `filter: phobos(${value})`},
  {name: 'heat', filter: 'brightness', minValue: 1, maxValue: 3, setEffect: (value) => `filter: heat(${value})`}
];

valueElement.value = 100;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  connect: 'lower',
});

sliderElement.noUiSlider.on('update', () => {
  const currentSliderValue = sliderElement.noUiSlider.get();
  valueElement.value = currentSliderValue;
  const selectedEffect = EFFECTS.find((effect) => effect.name === currentEffect);
  imgUploadPreview.style = selectedEffect.setEffect(currentSliderValue);
});

//оригинал
originalElement.addEventListener('click', () => {
  currentEffect = 'none';
  sliderContainer.classList.add('hidden');
});

//хром
chromeElement.addEventListener('click', () => {
  currentEffect = 'chrome';
  sliderContainer.classList.remove('hidden');
  chromeElement.classList.add('effects__preview--chrome');
  // imgUploadPreview.style ='filter: grayscale(1)';
  imgUploadPreview.style = EFFECTS[1].setEffect(1);
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
  });
});

//сепия
sepiaElement.addEventListener('click', () => {
  currentEffect = 'sepia';
  sliderContainer.classList.remove('hidden');
  sepiaElement.classList.add('effects__preview--sepia');
  imgUploadPreview.style = EFFECTS[2].setEffect(1);
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
  });
});

//марвин
marvinElement.addEventListener('click', () => {
  currentEffect = 'marvin';
  sliderContainer.classList.remove('hidden');
  marvinElement.classList.add('effects__preview--marvin');
  imgUploadPreview.style = EFFECTS[3].setEffect(100);
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
  });
});

//фобос
phobosElement.addEventListener('click', () => {
  currentEffect = 'phobos';
  sliderContainer.classList.remove('hidden');
  phobosElement.classList.add('effects__preview-phobos');
  imgUploadPreview.style = EFFECTS[4].setEffect(3);
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
  });
});

//зной
heatElement.addEventListener('click', () => {
  currentEffect = 'heat';
  sliderContainer.classList.remove('hidden');
  heatElement.classList.add('effects__preview-heat');
  imgUploadPreview.style = EFFECTS[5].setEffect(3);
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 1,
      max: 3,
    },
    start: 3,
    step: 0.1,
  });
});
