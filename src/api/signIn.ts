import { BASE_URL } from '../consts';
import { renderLogiInfo } from '../authorization/renderLoginInfo';
import { state } from '../state/index';

export const loginUser = async (user: {
  email: string;
  password: string;
}): Promise<void> => {
  const rawResponse = await fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const content = await rawResponse.json();
  localStorage.setItem('token', content.token);
  localStorage.setItem('name', content.name);
  localStorage.setItem('userId', content.userId);
  renderLogiInfo();
  state.isAuthorized = true;
  state.name = content.name;
  state.userId = content.userId;
};
