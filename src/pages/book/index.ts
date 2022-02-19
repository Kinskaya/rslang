import Page from '../../core/templates/page';
import { word } from '../../templates/word';

class BookPage extends Page {
  constructor(id: string) {
    super(id);
    this.textObject.name = 'Учебник';
  }

  render = (): HTMLElement => {
    let selectedLevel = 0;
    let selectedPage = 0;

    const title = BookPage.creatHeaderTitle(this.textObject.name);

    const wrapper = document.createElement('div');
    wrapper.id = 'wrapper';
    const main = document.createElement('div');
    main.id = 'main';

    const titleLevel = document.createElement('div');
    titleLevel.classList.add('title-levels');
    titleLevel.innerHTML = 'Раздел';
    const titlePage = document.createElement('div');
    titlePage.classList.add('title-pages');
    titlePage.innerHTML = 'Страница';
    const blockLevels = document.createElement('div');
    blockLevels.classList.add('block-levels-btn');
    blockLevels.id = 'block-all-levels';

    let i = 1;
    const numLevel: number[] = [];
    while (i <= 7) {
      numLevel.push(i);
      i++;
    }

    numLevel.forEach((elem) => {
      const levelLink = document.createElement('a');
      levelLink.classList.add('level-btn');
      if (elem === 7) {
      levelLink.id = 'hard-words';
      levelLink.innerHTML = 'Сложные слова';
    } else {
        levelLink.id = `${elem}-level`;
        levelLink.innerHTML = String(elem);
      }
      blockLevels.append(levelLink);
    });

    let j = 1;
    const numPage: number[] = [];
    while (j < 31) {
      numPage.push(j);
      j++;
    }

    const blockPages = document.createElement('div');
    blockPages.classList.add('block-pages-btn');
    blockPages.id = 'block-all-pages';

    numPage.forEach((elem) => {
      const pageBtn = document.createElement('a');
      pageBtn.classList.add('page-btn');
      pageBtn.id = `${elem}-page`;
      pageBtn.innerHTML = String(elem);
      blockPages.append(pageBtn);
    });

    wrapper.append(titleLevel, blockLevels, titlePage, blockPages, main);
    word();

    blockLevels.addEventListener('click', (e: Event) => {
      Array.from(document.getElementsByClassName('level-btn')).forEach(
        (item) => {
          item.classList.remove('active');
        },
      );
      Array.from(document.getElementsByClassName('page-btn')).forEach(
        (item) => {
          item.classList.remove('active');
        },
      );
      const target = (e.target as Element).closest('.level-btn');
      target?.classList.add('active');
      const clickLevel = target?.innerHTML;

      selectedLevel = Number(clickLevel) - 1;
      selectedPage = 0;
      word(selectedLevel, 0);

      const firstPageActive = document.getElementById('1-page');
      firstPageActive?.classList.add('active');
    });

    blockPages.addEventListener('click', (e: Event) => {
      Array.from(document.getElementsByClassName('page-btn')).forEach(
        (item) => {
          item.classList.remove('active');
        },
      );
      const target = (e.target as Element).closest('.page-btn');
      target?.classList.add('active');
      const clickPage = target?.innerHTML;
      word(selectedLevel, Number(clickPage) - 1);
      selectedPage = Number(clickPage) - 1;
    });

    const firstPage = document.getElementById('1-page');
    firstPage?.classList.add('active');

    this.container.append(title, wrapper);
    return this.container;
  };
}

export default BookPage;
