export const enum EPageIds {
  mainPage = 'main-page',
  bookPage = 'book-page',
  gamesPage = 'games-page',
}

export type TState = {
  token:string,
  isAuthorizet:boolean,
  name:string,
  id:string,
};
