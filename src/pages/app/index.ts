import Page from '../../core/templates/page';
import MainPage from '../main';
import SettingsPage from '../book';
import StatisticsPage from '../games';
import Header from '../../core/components/header';

export const enum PageIds {
  mainPage = 'main-page',
  bookPage = 'book-page',
  gamesPage = 'games-page',
}

class App {
  private static container: HTMLElement = document.body;

  private static defaultPageId = 'current-page';

  private header: Header;

  static renderNewPage(idPage: string): void {
    const currentPageHTML = document.querySelector(`#${App.defaultPageId}`);
    if (currentPageHTML) {
      currentPageHTML.remove();
    }
    let page: Page | null = null;

    if (idPage === PageIds.mainPage) {
      page = new MainPage(idPage);
    } else if (idPage === PageIds.bookPage) {
      page = new SettingsPage(idPage);
    } else if (idPage === PageIds.gamesPage) {
      page = new StatisticsPage(idPage);
    }

    if (page) {
      const pageHTML = page.render();
      pageHTML.id = App.defaultPageId;
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
  }

  run(): void {
    App.container.append(this.header.render());
    const hash = window.location.hash.slice(1);
    App.renderNewPage(hash || 'main-page');
    this.enableRouteChange();
  }
}

export default App;
