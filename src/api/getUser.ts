import { BASE_URL } from '../consts';
import { TUser } from '../types';

export const getUser = async (id: string): Promise<TUser> => {
  const response = await fetch(`${BASE_URL}/users/${id}`);
  const data = await response.json();

  return data;
};
