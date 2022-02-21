import { TWord } from '../types';
import { BASE_URL } from '../consts';
import { state } from '../state';

export const getHardWords = async (userId: string): Promise<TWord[]> => {
  const { token } = state;
  const url = `${BASE_URL}/users/${userId}/words`;
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  });
  const data = await res.json();
  state.hardWords = data;
  return data;
};
