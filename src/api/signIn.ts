import { state } from '../state/index';
import { login } from '../authorization/authorization';

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
  localStorage.setItem('token', content.token);
  localStorage.setItem('name', content.name);
<<<<<<< HEAD
  state.isAuthorized = true;
=======
  state.isAuthorizet = true;
>>>>>>> d2e9bc190e774db543392083511ece1f8520fb5b
  state.name = content.name;
  login();
};
