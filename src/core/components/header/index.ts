import Component from '../../templates/components';
import { EPageIds } from '../../../types';

const Buttons = [
  {
    id: EPageIds.mainPage,
    text: 'Main Page',
  },
  {
    id: EPageIds.bookPage,
    text: 'Book Page',
  },
  {
    id: EPageIds.gamesPage,
    text: 'Games Page',
  },
];

class Header extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  renderPageButtons = (): void => {
    const pageButtons = document.createElement('div');
    pageButtons.classList.add('header-nav');
    Buttons.forEach((button) => {
      const buttonHTML = document.createElement('a');
      buttonHTML.href = `#${button.id}`;
      buttonHTML.innerText = button.text;
      pageButtons.append(buttonHTML);
    });
    this.container.append(pageButtons);
  };

  render = (): HTMLElement => {
    this.renderPageButtons();
    return this.container;
  };
}
export default Header;
