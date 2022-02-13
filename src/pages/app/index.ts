import Page from '../../core/templates/page';
import MainPage from '../main';
import BookPage from '../book';
import GamesPage from '../games';
import Header from '../../core/components/header';
import { EPageIds } from '../../types';
import Menu from '../../core/components/menu';

class App {
  private static container: HTMLElement = document.body;

  private static defaultPageId = 'current-page';

  private header: Header;

  private menu: Menu;

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
    }

    if (page) {
      const pageHTML = page.render();
      pageHTML.id = App.defaultPageId;
      pageHTML.classList.add('page', idPage);
      App.container.append(pageHTML);
    }
  }

  private enableRouteChange() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
    });
  }

  constructor() {
    this.header = new Header('header', 'header-container');
    this.menu = new Menu('aside', 'menu');
  }

  run(): void {
    App.container.append(this.header.render());
    const hash = window.location.hash.slice(1);
    App.renderNewPage(hash || 'main-page');
    App.container.append(this.menu.render());
    this.enableRouteChange();
  }
}

export default App;
