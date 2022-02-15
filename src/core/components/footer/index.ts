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
      const authorLine = document.createElement('div');
      authorLine.classList.add('footer-author-line');
      const authorImg = document.createElement('img');
      authorImg.src = './github.svg';
      const authorHTML = document.createElement('a');
      authorHTML.target = '_blank';
      authorHTML.href = `${author.id}`;
      authorHTML.innerText = author.text;
      authorLine.append(authorImg, authorHTML);
      blockAuthors.append(authorLine);
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
