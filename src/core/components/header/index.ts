import Component from '../../templates/components';
import { PageIds } from '../../../pages/app';

const Buttons = [
  {
    id: PageIds.mainPage,
    text: 'Main Page',
  },
  {
    id: PageIds.bookPage,
    text: 'Book Page',
  },
  {
    id: PageIds.gamesPage,
    text: 'Games Page',
  },
];

class Header extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  renderPageButtons = (): void => {
    const pageButtons = document.createElement('div');
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
