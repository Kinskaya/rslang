const levels = document.createElement('div');
const level = ['1', '2', '3', '4', '5', '6'];

export const choiseLevel = ():void => {
  const container = document.querySelector('#wrapper');
  console.log(container);
  const mainPage = document.createElement('div');
  mainPage.classList.add('main-page');
  mainPage.classList.add('game-page');
  const titleSelectLevel = document.createElement('div');
  titleSelectLevel.textContent = 'Выберите уровень сложности';
  levels.classList.add('levels');
  level.forEach((item) => {
    const levelLink = document.createElement('a');
    levelLink.textContent = item;
    levelLink.classList.add('levelLink');
    levels.append(levelLink);
  });
  mainPage.append(titleSelectLevel, levels);
  container!.replaceWith(mainPage);
};
