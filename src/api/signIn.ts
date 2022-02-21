import { BASE_URL } from '../consts';
import { renderLoginInfo } from '../authorization/renderloginInfo';

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
  renderLoginInfo();
};
