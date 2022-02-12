import Component from '../../templates/components';
import { MenuButtons } from '../../../consts';

class Menu extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  renderPageButtons = (): void => {
    const pageButtons = document.createElement('div');
    pageButtons.classList.add('sidebar');
    MenuButtons.forEach((button) => {
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
