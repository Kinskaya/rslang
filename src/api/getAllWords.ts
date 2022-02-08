/* eslint-disable @typescript-eslint/quotes */
import { BASE_URL } from "../consts";
import { state } from "../state";

export const getAllWords = async (group?: number, page?: number) => {
  const url = `${BASE_URL}/words?group=${group || 0}page=${page || 0}`;
  const res = await fetch(url);
  const data = await res.json();

  state.words = data;

  return data;
};
