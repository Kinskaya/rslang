import { TState } from '../types/index';

export const state: TState = {
  words: [],
  gameWords: [],
  token: localStorage.getItem('token') || '',
  isAuthorized: !!localStorage.getItem('name'),
  name: localStorage.getItem('name') || '',
  id: '',
};

export const gameState = {
  gameWords: [],
  count: 0,
};
