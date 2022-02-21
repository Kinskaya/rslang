import { EPageIds } from '../types';

export const BASE_URL = 'https://rslang-guseff.herokuapp.com';

export const menuLinksData = [
  {
    id: EPageIds.mainPage,
    text: 'Главная',
    icon: '<i class="fa fa-fw fa-th-large"></i>',
  },
  {
    id: EPageIds.bookPage,
    text: 'Учебник',
    icon: '<i class="fa fa-fw fa-book"></i>',
  },
  {
    id: EPageIds.gamesPage,
    text: 'Игры',
    icon: '<i class="fa fa-fw fa-gamepad"></i>',
  },
  {
    id: EPageIds.dictionaryPage,
    text: 'Словарь',
    icon: '<i class="fa fa-fw fa-edit"></i>',
  },
];

export const authorsList = [
  {
    id: 'https://github.com/VanKertiss',
    text: 'VanKertiss',
  },
  {
    id: 'https://github.com/Kinskaya',
    text: 'Kinskaya',
  },
  {
    id: 'https://github.com/margoroma',
    text: 'margoroma',
  },
];

export const teamData = [
  {
    name: 'Иван',
    position: 'Front-end developer',
    description: 'Авторизация, игра "Аудиовызов"... ',
  },
  {
    name: 'Маргарита',
    position: 'Front-end developer',
    description: 'Учебник, список слов... ',
  },
  {
    name: 'Анастасия',
    position: 'Front-end developer',
    description: 'Роутинг, главная страница... ',
  },
];

export const statusWord = {
  isHard: {
    status: false,
    icon: '<i class="far fa-bookmark"></i>',
    text: 'Добавить в раздел "Сложные слова"',
  },
  isStudied: {
    status: false,
    icon: '<i class="far fa-check-circle"></i>',
    text: 'Изученное',
  },
};
