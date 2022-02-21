import { BASE_URL } from '../consts';
import { state } from '../state';
import { TWord } from '../types';

export const getAllWords = async (
  group?: number,
  page?: number,
): Promise<TWord[]> => {
  const url = `${BASE_URL}/words?group=${group || 0}&page=${page || 0}`;
  const res = await fetch(url);
  const data = await res.json();

  state.words = data;

  return data;
};
