import { BASE_URL } from '../consts';

export const getUser = async (id: string) => {
  const response = await fetch(`${BASE_URL}/users/${id}`);
  const data = await response.json();

  console.log(data.name);
  console.log(data.email);

  return data;
};
