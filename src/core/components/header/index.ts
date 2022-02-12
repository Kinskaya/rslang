import Component from '../../templates/components';
import { EPageIds } from '../../../types';

class Header extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  renderHeaderLinks = (): void => {
    const headerLinks = document.createElement('div');
    headerLinks.classList.add('header-nav');
    const link = document.createElement('a');
    link.href = `#${EPageIds.mainPage}`;
    link.innerText = 'RS Lang';
    headerLinks.append(link);
    this.container.append(headerLinks);
  };

  render = (): HTMLElement => {
    this.renderHeaderLinks();
    return this.container;
  };
}
export default Header;
