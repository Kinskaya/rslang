import { gameState } from '../state';

let count = 1;

export const renderResult = ():void => {
  const gameContainer = document.querySelector('#current-page');
  gameContainer!.innerHTML = '';
  const counResult = document.createElement('h2');
  counResult.classList.add('counResult');
  const resultTitle = document.createElement('h2');
  resultTitle.textContent = 'Ваши результаты';
  gameContainer!.append(resultTitle);

  gameState.result.forEach((item:boolean):void => {
    gameContainer!.insertAdjacentHTML('beforeend',
      `<div>${count} слово - ${item ? 'Правильно' : 'Не правильно'}</div>`);
    count += 1;
  });
  const howMachResult = gameState.result.filter((item) => item === true);

  counResult.textContent = `${howMachResult.length} / ${gameState.result.length}`;
  gameContainer!.append(counResult);
  gameState.result = [];
  gameState.count = 0;
};
