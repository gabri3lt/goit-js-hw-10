import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailArea = document.querySelector('input');
const messageArea = document.querySelector('textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(dataSave, 500));

function dataSave() {
  const mailValue = emailArea.value;
  const messageValue = messageArea.value;
  const formData = {
    email: mailValue,
    message: messageValue,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function readData() {
  const saveFormData = localStorage.getItem(LOCALSTORAGE_KEY);
  if (saveFormData) {
    const formData = JSON.parse(saveFormData);
    emailArea.value = formData.email;
    messageArea.value = formData.message;
  }
}
readData();

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const message = formElements.message.value;
  if (email.length === 0 || message.length === 0) {
    alert('Please fill in all fields');
  } else {
    const formData = {
      email,
      message,
    };
    console.log(formData);
    form.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
  }
}
