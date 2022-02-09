import { loginUser, createUser } from '../api/api';

const modalBackground = document.createElement('div');
const authSubmitButton = document.createElement('button');
const regSubmitButton = document.createElement('button');
const authEmailInput = document.createElement('input');
const authPassInput = document.createElement('input');
const exitAuthModal = document.createElement('button');
modalBackground.classList.add('modalBackground');
const modalContainer = document.createElement('div');
modalContainer.classList.add('modalContainer');
exitAuthModal.classList.add('exitAuthModal');
exitAuthModal.textContent = 'Выйти';
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
modalContainer.insertAdjacentElement('beforeend', authSubmitButton);
modalContainer.insertAdjacentElement('beforeend', regSubmitButton);

const closeModal = () => {
  modalBackground.style.display = 'none';
};

const openModalAuth = () => {
  modalBackground.style.display = 'block';
};

const preLoginUser = () => {
  loginUser({ email: authEmailInput.value, password: authPassInput.value });
};

const preCreateUser = () => {
  createUser();
};

authSubmitButton.addEventListener('click', preLoginUser);
regSubmitButton.addEventListener('click', preCreateUser);
exitAuthModal.addEventListener('click', closeModal);

export default openModalAuth;
