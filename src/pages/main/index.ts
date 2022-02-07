import Page from '../../core/templates/page';

class MainPage extends Page {
  static TextObject = {
    MainTitle: 'Main page',
  };

  constructor(id: string) {
    super(id);
  }

  render = (): HTMLElement => {
    const title = this.creatHeaderTitle(MainPage.TextObject.MainTitle);
    this.container.append(title);
    return this.container;
  };
}

export default MainPage;
