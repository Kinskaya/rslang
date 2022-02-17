import { BASE_URL } from '../consts';
import { TWord } from '../types';
import { getAllWords } from '../api/getAllWords';
import { state } from '../state';

export const word = async (
  group?: number,
  page?: number
): Promise<HTMLDivElement> => {
  await getAllWords(group, page);
  const data = state.words;

  const dataWords = document.createElement('div');
  dataWords.classList.add('data-words');
  let wordCard = document.createElement('div');

  data.forEach((el: TWord) => {
    wordCard = document.createElement('div');
    wordCard.classList.add('word-card');

    const blockWord = document.createElement('div');
    blockWord.classList.add('block');

    let source = '';

    const mp3Word = document.createElement('button');
    mp3Word.classList.add('btn');
    mp3Word.innerHTML = '<i class="fa fa-play"></i>';
    const audioWord = document.createElement('audio');
    audioWord.innerHTML = `<source src="${BASE_URL}/${el.audio}">`;
    mp3Word.classList.add('mp3-word');
    mp3Word.append(audioWord);

    mp3Word.addEventListener('click', () => {
      source = `${BASE_URL}/${el.audio}`;
      const htmlaudio: HTMLAudioElement = new Audio(source);
      htmlaudio.play();
    });

    const wordWord = document.createElement('p');
    wordWord.classList.add('word');
    wordWord.innerHTML = el.word;

    blockWord.append(mp3Word, wordWord);

    const wordTranscription = document.createElement('p');
    wordTranscription.innerHTML = el.transcription;
    const wordTranslate = document.createElement('p');
    wordTranslate.innerHTML = el.wordTranslate;

    const blockMeaning = document.createElement('div');
    blockMeaning.classList.add('block');

    const mp3Meaning = document.createElement('button');
    mp3Meaning.classList.add('btn');
    mp3Meaning.innerHTML = '<i class="fa fa-play"></i>';
    const audioMeaning = document.createElement('audio');
    audioMeaning.innerHTML = `<source src="${BASE_URL}/${el.audioMeaning}">`;
    mp3Meaning.classList.add('mp3-meaning');
    mp3Meaning.append(audioMeaning);

    mp3Meaning.addEventListener('click', () => {
      source = `${BASE_URL}/${el.audioMeaning}`;
      const htmlaudio: HTMLAudioElement = new Audio(source);
      htmlaudio.play();
    });

    const wordMeaning = document.createElement('p');
    wordMeaning.innerHTML = el.textMeaning;

    blockMeaning.append(mp3Meaning, wordMeaning);

    const blockExample = document.createElement('div');
    blockExample.classList.add('block');

    const mp3Example = document.createElement('button');
    mp3Example.classList.add('btn');
    mp3Example.innerHTML = '<i class="fa fa-play"></i>';
    const audioExample = document.createElement('audio');
    audioExample.innerHTML = `<source src="${BASE_URL}/${el.audioExample}">`;
    mp3Example.classList.add('mp3-example');
    mp3Example.append(audioExample);

    mp3Example.addEventListener('click', () => {
      source = `${BASE_URL}/${el.audioExample}`;
      const htmlaudio: HTMLAudioElement = new Audio(source);
      htmlaudio.play();
    });

    const wordExample = document.createElement('p');
    wordExample.innerHTML = el.textExample;

    blockExample.append(mp3Example, wordExample);

    const wordMeaningTranslate = document.createElement('p');
    wordMeaningTranslate.innerHTML = el.textMeaningTranslate;
    const wordExampleTranslate = document.createElement('p');
    wordExampleTranslate.innerHTML = el.textExampleTranslate;

    wordCard.id = String(el.id);

    const imgWord = document.createElement('img');
    imgWord.classList.add('image-word');
    imgWord.src = `${BASE_URL}/${el.image}`;

    wordCard.append(
      imgWord,
      blockWord,
      wordTranscription,
      wordTranslate,
      blockMeaning,
      wordMeaningTranslate,
      blockExample,
      wordExampleTranslate
    );
    dataWords.append(wordCard);
  });

  const mainPage = document.getElementById('main');
  mainPage?.replaceChildren(dataWords);

  return dataWords;
};
