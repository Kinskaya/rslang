abstract class Page {
  protected container: HTMLElement;

  protected textObject = {
    name: '',
    describe: '',
  };

  protected constructor(id: string) {
    this.container = document.createElement('div');
    this.container.id = id;
  }

  static creatHeaderTitle(text: string): HTMLElement {
    const headerTitle = document.createElement('h1');
    headerTitle.innerText = text;
    return headerTitle;
  }

  render = (): HTMLElement => this.container;
}

export default Page;
