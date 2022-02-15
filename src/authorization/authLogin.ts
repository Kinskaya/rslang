import { authEmailInput, authPassInput } from './variables';
import { loginUser } from '../api/index';
import { renderloginInfo } from './renderloginInfo';
import { closeModal } from './closeModal';

export const authLogin = (): void => {
  const user = { email: authEmailInput.value, password: authPassInput.value };
  loginUser(user);
  closeModal();
  renderloginInfo();
};
