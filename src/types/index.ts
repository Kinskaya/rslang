export const enum EPageIds {
  mainPage = 'main-page',
  bookPage = 'book-page',
  gamesPage = 'games-page',
}
export type TWord = {
  id: string;
  group: number;
  page: number;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  wordTranslate: string;
  textMeaningTranslate: string;
  textExampleTranslate: string;
};

export type TUser = {
  email: string;
  password: string;
};

export type TState = {
  words: [];
  token?: string;
  name:string;
  id:string;
  isAuthorizet:boolean,
};
