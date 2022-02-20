import { BASE_URL } from '../consts';

export const createUser = async (user: {
  name: string;
  email: string;
  password: string;
}): Promise<void> => {
  const rawResponse = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const content = await rawResponse.json();

  console.log(content);
};
