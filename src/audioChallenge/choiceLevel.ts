import { getWordsForGame } from '../api/index';

const levels = document.createElement('div');
const level = ['1', '2', '3', '4', '5', '6'];

export const choiseLevel = (): void => {
  const container = document.querySelector('#current-page');
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
    levelLink.classList.add(`levelLink${item}`);
    levels.append(levelLink);
  });
  container!.innerHTML = '';
  container!.append(titleSelectLevel, levels);

  const giveMeWords = (e:Event) => {
    const targetLink = (<Element>e.target).textContent;
    switch (targetLink) {
      case '1':
        getWordsForGame(1.0);
        break;
      case '2':
        getWordsForGame(2.0);
        break;
      case '3':
        getWordsForGame(3.0);
        break;
      case '4':
        getWordsForGame(4.0);
        break;
      case '5':
        getWordsForGame(5.0);
        break;
      case '6':
        getWordsForGame(6.0);
        break;
      default:
    }
    levels.innerHTML = '';
  };

  levels.addEventListener('click', giveMeWords);
};
