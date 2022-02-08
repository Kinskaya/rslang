import { BASE_URL } from '../consts';

export const getWord = async (id: string) => {
  const response = await fetch(`${BASE_URL}/words/${id}`);
  const data = await response.json();

  // console.log(data.word);
  // console.log(data.wordTranslate);
  // console.log(data);
  // console.log(data.image);
  // console.log(data.audio);

  return data;
};
