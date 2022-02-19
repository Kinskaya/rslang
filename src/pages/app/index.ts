import Page from '../../core/templates/page';
import MainPage from '../main';
import BookPage from '../book';
import GamesPage from '../games';
import Header from '../../core/components/header';
import { EPageIds } from '../../types';
import Menu from '../../core/components/menu';
import Footer from '../../core/components/footer';
import DictionaryPage from '../dictionary';

class App {
  private static container: HTMLElement = document.body;

  private static defaultPageId = 'current-page';

  private header: Header;

  private menu: Menu;

  private footer: Footer;

  static renderNewPage(idPage: string): void {
    const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
    if (currentPageHTML) {
      currentPageHTML.remove();
    }
    let page: Page | null = null;

    if (idPage === EPageIds.mainPage) {
      page = new MainPage(idPage);
    } else if (idPage === EPageIds.bookPage) {
      page = new BookPage(idPage);
    } else if (idPage === EPageIds.gamesPage) {
      page = new GamesPage(idPage);
    } else if (idPage === EPageIds.dictionaryPage) {
      page = new DictionaryPage(idPage);
    }

    if (page) {
      const pageHTML = page.render();
      pageHTML.id = App.defaultPageId;
      pageHTML.classList.add('page', idPage);
      const wrap = document.getElementById('wrapper');
      wrap?.append(pageHTML);
    }
  }

  private enableRouteChange = () => {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
    });
  };

  constructor() {
    this.header = new Header('header', 'header-container');
    this.menu = new Menu('aside', 'menu');
    this.footer = new Footer('footer', 'footer-container');
  }

  run(): void {
    App.container.append(this.header.render());
    const hash = window.location.hash.slice(1);
    const wrapperPage = document.createElement('div');
    wrapperPage.id = 'wrapper';
    App.container.append(wrapperPage);
    App.renderNewPage(hash || 'main-page');
    App.container.append(this.menu.render());
    App.container.append(this.footer.render());
    this.enableRouteChange();
  }
}

export default App;
