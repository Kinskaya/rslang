import { BASE_URL } from '../consts';

export const createWord = async (
  userId: string,
  wordId: string,
  word: string,
  token: string,
): Promise<void> => {
  const rawResponse = await fetch(
    `${BASE_URL}/users/${userId}/words/${wordId}`,
    {
      method: 'POST',
      //   withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(word),
    },
  );
  const content = await rawResponse.json();

  console.log(content);
};
