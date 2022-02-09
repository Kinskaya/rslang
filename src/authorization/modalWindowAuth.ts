import { loginUser, createUser } from '../api';

const modalBackground = document.createElement('div');
const authSubmitButton = document.createElement('button');
const regSubmitButton = document.createElement('button');
const authEmailInput = document.createElement('input');
authEmailInput.placeholder = 'email';
const authPassInput = document.createElement('input');
authPassInput.placeholder = 'password';
const authNicknameInput = document.createElement('input');
authNicknameInput.classList.add('authNicknameInput');
authNicknameInput.placeholder = 'nickname';
const exitAuthModal = document.createElement('button');
modalBackground.classList.add('modalBackground');
const modalContainer = document.createElement('div');
modalContainer.classList.add('modalContainer');
exitAuthModal.classList.add('exitAuthModal');
exitAuthModal.textContent = 'Закрыть';
authPassInput.classList.add('authPassInput');
authSubmitButton.classList.add('authSubmitButton');
authSubmitButton.textContent = 'Войти';
regSubmitButton.classList.add('regSubmitButton');
regSubmitButton.textContent = 'Зарегистрироваться';
document.body.insertAdjacentElement('beforeend', modalBackground);
modalBackground.insertAdjacentElement('beforeend', modalContainer);
modalContainer.insertAdjacentElement('beforeend', exitAuthModal);
modalContainer.insertAdjacentElement('beforeend', authEmailInput);
modalContainer.insertAdjacentElement('beforeend', authPassInput);
modalContainer.insertAdjacentElement('beforeend', authNicknameInput);
modalContainer.insertAdjacentElement('beforeend', authSubmitButton);
modalContainer.insertAdjacentElement('beforeend', regSubmitButton);

const closeModal = () => {
  modalBackground.style.display = 'none';
};

const openModalAuth = () => {
  modalBackground.style.display = 'block';
};

const preLoginUser = () => {
  const user = { email: authEmailInput.value, password: authPassInput.value };
  console.log(user);
  loginUser(user);
  authEmailInput.value = '';
  authPassInput.value = '';
};

const preCreateUser = () => {
  const user = { name: authNicknameInput.value, email: authEmailInput.value, password: authPassInput.value };
  console.log(user);
  createUser(user);
  authNicknameInput.value = '';
  authEmailInput.value = '';
  authPassInput.value = '';
};

authSubmitButton.addEventListener('click', preLoginUser);
regSubmitButton.addEventListener('click', preCreateUser);
exitAuthModal.addEventListener('click', closeModal);

export default openModalAuth;
