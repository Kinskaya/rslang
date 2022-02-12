import Page from '../../core/templates/page';

class GamesPage extends Page {
  static TextObject = {
    MainTitle: 'Игры',
  };

  constructor(id: string) {
    super(id);
  }

  render = (): HTMLElement => {
    const title = this.creatHeaderTitle(GamesPage.TextObject.MainTitle);
    this.container.append(title);
    return this.container;
  };
}

export default GamesPage;
