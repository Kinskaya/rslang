import { state } from '../state/index';

export const loginUser = async (user:{ email:string, password:string }):Promise<void> => {
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
  localStorage.setItem('token', state.token);
  state.isAuthorizet = true;
  localStorage.setItem('isAuthorizet', String(state.isAuthorizet));
  console.log(state.token);
  console.log(state.isAuthorizet);
};
