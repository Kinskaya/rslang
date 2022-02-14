import Component from '../../templates/components';
import { authorsList } from '../../../consts';

class Footer extends Component {
  className: string;

  constructor(tagName: string, className: string) {
    super(tagName, className);
    this.className = 'Footer';
  }

  renderLinksAuthors = (): void => {
    const blockAuthors = document.createElement('div');
    blockAuthors.classList.add('footer-nav');
    authorsList.forEach((author) => {
      const authorHTML = document.createElement('a');
      authorHTML.target = '_blank';
      authorHTML.href = `${author.id}`;
      authorHTML.innerText = author.text;
      blockAuthors.append(authorHTML);
    });
    this.container.append(blockAuthors);
  };

  render = (): HTMLElement => {
    this.renderLinksAuthors();

    const yearFooter = document.createElement('div');
    yearFooter.classList.add('footer-year');
    yearFooter.innerHTML = '2022';

    const logoRss = document.createElement('img');
    logoRss.classList.add('footer-logo-rss');
    logoRss.src = './rss.svg';

    this.container.append(yearFooter, logoRss);

    return this.container;
  };
}
export default Footer;
