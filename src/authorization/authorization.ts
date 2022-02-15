import { state } from '../state';
import { authLogin } from './authLogin';
import openModalAuth from './openModal';
import { authCreateUser } from './authCreateUser';
import { closeModal } from './closeModal';
import {
  modalBackground, authEmailInput, authPassInput,
  authNicknameInput, modalContainer, exitAuthModal,
  authSubmitButton, regSubmitButton, body, logoutButton,
  authLogo, authName, container,
} from './variables';

export const logoSrc = './logo.png';

authEmailInput.placeholder = 'email';
authPassInput.placeholder = 'password';
authNicknameInput.classList.add('authNicknameInput');
authNicknameInput.placeholder = 'nickname';
modalBackground.classList.add('modalBackground');
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
document.body.append(body);
logoutButton.classList.add('logoutButton');

export const authorization = (): HTMLDivElement => {
  authLogo.src = logoSrc;
  // authLogo.style.width = '100px';
  authLogo.classList.add('authLogo');
  authName.classList.add('auth-name');
  container.classList.add('auth-container');
  authName.textContent = localStorage.getItem('name')
    ? localStorage.getItem('name')
    : null;
  logoutButton.textContent = 'Выйти';
  body.insertAdjacentElement('beforeend', container);
  container.append(logoutButton, authName, authLogo);
  if (!localStorage.getItem('name')) logoutButton.style.display = 'none';
  return container;
};

const logout = ():void => {
  state.isAuthorized = false;
  state.name = '';
  localStorage.removeItem('token');
  localStorage.removeItem('name');
  authorization();
};

authLogo.addEventListener('click', openModalAuth);
logoutButton.addEventListener('click', logout);
authSubmitButton.addEventListener('click', authLogin);
regSubmitButton.addEventListener('click', authCreateUser);
exitAuthModal.addEventListener('click', closeModal);
