import Component from '../../templates/components';
import { EPageIds } from '../../../types';
import { authorization } from '../../../authorization/authorization';

class Header extends Component {
  className: string;

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.className = 'Header';
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
    const sign = authorization();
    this.container.append(sign);
    return this.container;
  };
}
export default Header;
