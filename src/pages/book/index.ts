import Page from "../../core/templates/page";
import { word } from "../../templates/word";

class BookPage extends Page {
  static TextObject = {
    MainTitle: "Book Page",
  };

  constructor(id: string) {
    super(id);
  }

  render = (): HTMLElement => {
    const title = this.creatHeaderTitle(BookPage.TextObject.MainTitle);

    const wrapper = document.createElement("div");
    wrapper.id = "wrapper";
    const main = document.createElement("div");
    main.id = "main";

    wrapper.append(main);
    word();

    this.container.append(title, wrapper);
    return this.container;
  };
}

export default BookPage;
