/* eslint-disable @typescript-eslint/comma-dangle */
import { BASE_URL } from '../consts';
import { TUser } from '../types';

export const logIn = async (user: TUser) => {
  const rawResponse = await fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const content = await rawResponse.json();

  console.log(content);
  console.log(content.token);

  return content.token;
};
