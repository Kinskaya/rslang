import { BASE_URL } from '../consts';

export const getAllWords = async () => {
  const url = `${BASE_URL}/words`;
  const res = await fetch(url);
  const data = await res.json();

  // console.log(data);

  return data;
};
