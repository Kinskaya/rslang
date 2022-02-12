import Component from '../../templates/components';
import { EPageIds } from '../../../types';

class Header extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  renderAppName = (): void => {
    const pageButtons = document.createElement('div');
    pageButtons.classList.add('header-nav');
    const buttonHTML = document.createElement('a');
    buttonHTML.href = EPageIds.mainPage;
    buttonHTML.innerText = 'RS Lang';
    pageButtons.append(buttonHTML);
    this.container.append(pageButtons);
  };

  render = (): HTMLElement => {
    this.renderAppName();
    return this.container;
  };
}
export default Header;
