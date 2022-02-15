import { EPageIds } from '../types';

export const BASE_URL = 'http://127.0.0.1:9000';

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
