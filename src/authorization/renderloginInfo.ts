import { logoutButton, authName } from './variables';

export const renderLogiInfo = ():void => {
  logoutButton.style.display = localStorage.getItem('name') ? 'block' : 'none';
  authName.textContent = localStorage.getItem('name') || '';
};
