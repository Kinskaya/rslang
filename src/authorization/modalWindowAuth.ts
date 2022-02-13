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
authPassInput.type = 'password';
authSubmitButton.classList.add('authSubmitButton');
authSubmitButton.textContent = 'Войти';
regSubmitButton.classList.add('regSubmitButton');
regSubmitButton.textContent = 'Зарегистрироваться';
document.body.append(modalBackground);
modalBackground.append(modalContainer);
modalContainer.append(exitAuthModal, authEmailInput, authPassInput, authNicknameInput,
  authSubmitButton, regSubmitButton);

const closeModal = ():void => {
  authEmailInput.value = '';
  authPassInput.value = '';
  authNicknameInput.value = '';
  modalBackground.style.display = 'none';
};

const openModalAuth = ():void => {
  modalBackground.style.display = 'block';
};

const preLoginUser = ():void => {
  const user = { email: authEmailInput.value, password: authPassInput.value };
  loginUser(user);
  closeModal();
};

const preCreateUser = ():void => {
  const user = { name: authNicknameInput.value, email: authEmailInput.value, password: authPassInput.value };
  createUser(user);
  closeModal();
};

authSubmitButton.addEventListener('click', preLoginUser);
regSubmitButton.addEventListener('click', preCreateUser);
exitAuthModal.addEventListener('click', closeModal);

export default openModalAuth;
