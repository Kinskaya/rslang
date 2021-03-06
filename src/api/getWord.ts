import { BASE_URL } from '../consts';

export const getWord = async (id: string):Promise<JSON> => {
  const response = await fetch(`${BASE_URL}/words/${id}`);
  const data = await response.json();

  return data;
};
