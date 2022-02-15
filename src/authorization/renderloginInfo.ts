import { authName, logoutButton } from './variables';
import { state } from '../state';

export const renderloginInfo = (): void => {
  authName.textContent = state.name;
  if (state.isAuthorized === true) {
    logoutButton.style.display = 'block';
  }
};
