abstract class Component {
  protected container: HTMLElement;

  protected constructor(tagName: string, className: string) {
    this.container = document.createElement(tagName);
    this.container.className = className;
  }

  render = (): HTMLElement => this.container;
}

export default Component;