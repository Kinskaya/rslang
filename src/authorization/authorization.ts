import openModalAuth from './modalWindowAuth';
import { state } from '../state/index';

export const data = {
  src: './logo.png',
};

const container = document.createElement('div');
const authLogo = document.createElement('img');
const authName = document.createElement('span');
const logoutButton = document.createElement('button');

const authorization = (): void => {
  authLogo.src = data.src;
  authLogo.style.width = '100px';
  authLogo.classList.add('authLogo');
  authName.textContent = localStorage.getItem('name') ? localStorage.getItem('name') : null;
  logoutButton.textContent = 'Выйти';
  document.body.insertAdjacentElement('beforeend', container);
  container.append(logoutButton, authName, authLogo);
  if (!localStorage.getItem('name')) logoutButton.style.display = 'none';
};

export const login = ():void => {
  authName.textContent = state.name;
  if (state.isAuthorizet === true) logoutButton.style.display = 'block';
};

export const logout = ():void => {
  state.isAuthorizet = false;
  state.name = '';
  localStorage.removeItem('token');
  localStorage.removeItem('name');
  authorization();
};

authLogo.addEventListener('click', openModalAuth);
logoutButton.addEventListener('click', logout);

export default authorization;
