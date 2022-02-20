import { gameState } from '../state';

let count = 1;

export const renderResult = ():void => {
  const gameContainer = document.querySelector('#current-page');
  gameContainer!.innerHTML = '';

  const resultTitle = document.createElement('h2');
  resultTitle.textContent = 'Ваши результаты';
  gameContainer!.append(resultTitle);
  console.log(gameState.result);
  gameState.result.forEach((item:boolean):void => {
    gameContainer!.insertAdjacentHTML('beforeend', `<div>${count} вопрос - ${item}</div>`);
    count += 1;
  });
  gameState.result = [];
  gameState.count = 0;
};
