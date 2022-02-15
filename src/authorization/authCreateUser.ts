import { authEmailInput, authNicknameInput, authPassInput } from './variables';
import { createUser } from '../api/index';
import { closeModal } from './closeModal';

export const authCreateUser = (): void => {
  const user = { name: authNicknameInput.value, email: authEmailInput.value, password: authPassInput.value };
  createUser(user);
  closeModal();
};
