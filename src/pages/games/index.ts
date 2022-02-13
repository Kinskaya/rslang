import Page from '../../core/templates/page';

class GamesPage extends Page {
  constructor(id: string) {
    super(id);
    this.textObject.name = 'Игры';
  }

  render = (): HTMLElement => {
    const title = GamesPage.creatHeaderTitle(this.textObject.name);
    this.container.append(title);
    return this.container;
  };
}

export default GamesPage;
