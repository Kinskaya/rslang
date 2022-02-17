import { TState } from '../types/index';

export const state: TState = {
  words: [],
  token: localStorage.getItem('token') || '',
  isAuthorized: !!localStorage.getItem('name'),
  name: localStorage.getItem('name') || '',
  id: '',
};
