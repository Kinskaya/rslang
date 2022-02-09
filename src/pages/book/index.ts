import Page from '../../core/templates/page';

class BookPage extends Page {
  static TextObject = {
    MainTitle: 'Book Page',
  };

  constructor(id: string) {
    super(id);
  }

  render = (): HTMLElement => {
    const title = this.creatHeaderTitle(BookPage.TextObject.MainTitle);
    this.container.append(title);
    return this.container;
  };
}

export default BookPage;
