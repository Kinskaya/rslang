import { EPageIds } from '../types';

export const BASE_URL = 'http://127.0.0.1:9000';

export const MenuButtons = [
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
