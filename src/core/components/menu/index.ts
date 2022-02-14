import Component from '../../templates/components';
import { menuLinksData } from '../../../consts';

class Menu extends Component {
  className: string;

  constructor(tagName: string, className: string) {
    super(tagName, className);

    this.className = 'sidebar';
  }

  renderLinksData = (): void => {
    const menuLinks = document.createElement('div');
    menuLinks.classList.add('sidebar');
    menuLinksData.forEach((link) => {
      const buttonHTML = document.createElement('a');
      buttonHTML.href = `#${link.id}`;
      buttonHTML.innerHTML = `${link.icon} ${link.text}`;
      menuLinks.append(buttonHTML);
    });
    this.container.append(menuLinks);
  };

  render = (): HTMLElement => {
    this.renderLinksData();
    return this.container;
  };
}
export default Menu;
