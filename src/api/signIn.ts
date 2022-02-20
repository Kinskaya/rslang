import { state } from '../state/index';

export const loginUser = async (user: {
  email: string;
  password: string;
}): Promise<void> => {
  const rawResponse = await fetch('http://localhost:9000/signin', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const content = await rawResponse.json();
  state.token = content.token;
  localStorage.setItem('token', content.token);
  localStorage.setItem('name', content.name);
  localStorage.setItem('userID', content.userId);
  state.isAuthorized = true;
  state.name = content.name;
};
