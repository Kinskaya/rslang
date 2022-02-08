/* eslint-disable @typescript-eslint/comma-dangle */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
import { BASE_URL } from '../consts';
import { TUser } from '../types';

export const createUser = async (user: TUser) => {
  const userEmail = user.email;
  const userPassword = user.password;

  const response = await fetch(`${BASE_URL},`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: userEmail,
      password: userPassword,
    }),
  });

  const result = await response.json();
  console.log(result.id);
  console.log(result);

  return result;
};
