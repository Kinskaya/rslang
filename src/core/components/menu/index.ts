import Component from '../../templates/components';
import { EPageIds } from '../../../types';

const Buttons = [
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

class Menu extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  renderPageButtons = (): void => {
    const pageButtons = document.createElement('div');
    pageButtons.classList.add('sidebar');
    Buttons.forEach((button) => {
      const buttonHTML = document.createElement('a');
      buttonHTML.href = `#${button.id}`;
      buttonHTML.innerHTML = `${button.icon} ${button.text}`;
      pageButtons.append(buttonHTML);
    });
    this.container.append(pageButtons);
  };

  render = (): HTMLElement => {
    this.renderPageButtons();
    return this.container;
  };
}
export default Menu;
