import { renderResult } from './renderResult';
import { state, gameState } from '../state/index';
import { BASE_URL } from '../consts';

let { count } = gameState;

export const renderAudioPage = (): void => {
  const gameContainer = document.querySelector('#current-page');
  gameContainer!.innerHTML = '';
  const gameBlock = document.createElement('div');
  gameBlock.classList.add('gameBlock');
  const soundImg = document.createElement('img');
  soundImg.classList.add('soundImg');
  soundImg.src = './soundGame.png';
  let source = '';
  soundImg.addEventListener('click', () => {
    source = `${BASE_URL}/${state.gameWords[count].audio}`;
    const htmlaudio: HTMLAudioElement = new Audio(source);
    htmlaudio.play();
  });
  const soundWord = document.createElement('div');
  soundWord.classList.add('soundWord');
  soundWord.textContent = state.gameWords[count].word;
  const optionsContainer = document.createElement('div');
  optionsContainer.classList.add('optionsContainer');

  const checkItem1 = document.createElement('input');
  const checkItemLabel1 = document.createElement('label');
  checkItemLabel1.classList.add('checkItemLabel');
  checkItem1.name = 'optionsCard';
  checkItem1.id = 'checkItem1';
  checkItem1.type = 'radio';
  checkItemLabel1.textContent = state.gameWords[count].wordTranslate;
  checkItemLabel1.htmlFor = 'checkItem1';

  const checkItem2 = document.createElement('input');
  const checkItemLabel2 = document.createElement('label');
  checkItemLabel2.classList.add('checkItemLabel');
  checkItem2.name = 'optionsCard';
  checkItem2.id = 'checkItem2';
  checkItem2.type = 'radio';
  checkItemLabel2.textContent = count >= 19
    ? state.gameWords[count - 1].wordTranslate
    : state.gameWords[count + 1].wordTranslate;
  checkItemLabel2.htmlFor = 'checkItem2';

  const checkItem3 = document.createElement('input');
  const checkItemLabel3 = document.createElement('label');
  checkItemLabel3.classList.add('checkItemLabel');
  checkItem3.name = 'optionsCard';
  checkItem3.id = 'checkItem3';
  checkItem3.type = 'radio';
  checkItemLabel3.textContent = count >= 18
    ? state.gameWords[count - 2].wordTranslate
    : state.gameWords[count + 2].wordTranslate;
  checkItemLabel3.htmlFor = 'checkItem3';

  optionsContainer.append(checkItem1, checkItemLabel1, checkItem2, checkItemLabel2, checkItem3, checkItemLabel3);

  const gameButtonSubmit = document.createElement('button');
  gameButtonSubmit.classList.add('gameButtonSubmit');
  gameButtonSubmit.textContent = 'Принять ответ';

  gameBlock.append(soundImg, soundWord, optionsContainer, gameButtonSubmit);
  gameContainer!.append(gameBlock);

  const nextQuestion = () => {
    if (checkItem1.checked) {
      gameState.result.push(true);
    }
    if (!checkItem1.checked) {
      gameState.result.push(false);
    }
    if (count < 19) {
      count += 1;
      renderAudioPage();
    }
    if (count >= 19) {
      if (checkItem1.checked) {
        gameState.result.push(true);
      }
      if (!checkItem1.checked) {
        gameState.result.push(false);
      }
      renderResult();
      count = 0;
    }
  };

  gameButtonSubmit.addEventListener('click', nextQuestion);
};
