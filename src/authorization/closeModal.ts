import {
  authEmailInput, authPassInput, authNicknameInput, modalBackground,
} from './variables';

export const closeModal = (): void => {
  authEmailInput.value = '';
  authPassInput.value = '';
  authNicknameInput.value = '';
  modalBackground.style.display = 'none';
};
