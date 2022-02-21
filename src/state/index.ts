import { TState, TGameState } from '../types/index';

export const state: TState = {
  words: [],
  gameWords: [],
  token: localStorage.getItem('token') || '',
  isAuthorized: !!localStorage.getItem('name'),
  name: localStorage.getItem('name') || '',
  userId: localStorage.getItem('userId') || '',
  id: '',
  hardWords: [],
};

export const gameState:TGameState = {
  gameWords: [],
  count: 0,
  result: [],
};
