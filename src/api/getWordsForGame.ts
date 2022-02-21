import { BASE_URL } from '../consts';
import { state } from '../state';
import { startGame } from '../audioChallenge/game';

export const getWordsForGame = async (group?: number, page?: number): Promise<JSON> => {
  const url = `${BASE_URL}/words?group=${group || 0}page=${page || 0}`;
  const res = await fetch(url);
  const data = await res.json();

  state.gameWords = data;
  startGame();
  return data;
};
