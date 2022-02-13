import Page from '../../core/templates/page';
import { word } from '../../templates/word';

class BookPage extends Page {
  constructor(id: string) {
    super(id);
    this.textObject.name = 'Учебник';
  }

  render = (): HTMLElement => {
    const title = BookPage.creatHeaderTitle(this.textObject.name);

    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper';
    const main = document.createElement('div');
    main.id = 'main';

    wrapper.append(main);
    word();

    this.container.append(title, wrapper);
    return this.container;
  };
}

export default BookPage;
