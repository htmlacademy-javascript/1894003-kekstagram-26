const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const showAlert = () => {
  const errorMessage = document.getElementById('error').content.cloneNode(true);
  document.body.appendChild(errorMessage);
  //исчезает форма
};

const showSuccess = () => {
  const successMessage = document.getElementById('#error').content.cloneNode(true);
  document.body.appendChild(successMessage);
};

export {getRandomPositiveInteger, showAlert, showSuccess};
