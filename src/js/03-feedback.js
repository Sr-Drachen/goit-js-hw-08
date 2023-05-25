import '/src/css/common.css';
import '/src/css/03-feedback.css';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('input'),
};

populateForm();

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
  const formData = getFormData();
  formData[e.target.name] = e.target.value;
  setFormData(formData);
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  const formData = getFormData();
  setFormData({});
  console.log(formData);
}

function getFormData() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
}

function setFormData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function populateForm() {
  const formData = getFormData();
  refs.textarea.value = formData['message'] || '';
  refs.input.value = formData['email'] || '';
}
