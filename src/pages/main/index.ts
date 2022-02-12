import Page from '../../core/templates/page';

class MainPage extends Page {
  static TextObject = {
    MainTitle: 'RS Lang',
    Describe: `Лёгкий и удобный способ изучения английского языка!<br>Наша коллекция содержит 3600 часто употребляемых
        слов, поделённых на 6 уровней, изучение которых с каждым днём будет приближать Вас к цели. С нашими мини-играми
        повторять и запоминать слова будет ещё увлекательней. Давайте начнем!`,
  };

  constructor(id: string) {
    super(id);
  }

  render = (): HTMLElement => {
    const wrap = document.createElement('div');
    wrap.classList.add('main-desc-wrap');
    const title = this.creatHeaderTitle(MainPage.TextObject.MainTitle);
    const describe = document.createElement('p');
    describe.classList.add('describe-title');
    describe.innerHTML = MainPage.TextObject.Describe;
    wrap.append(title, describe);
    this.container.append(wrap);
    return this.container;
  };
}

export default MainPage;
