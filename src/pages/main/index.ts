import Page from '../../core/templates/page';
import { teamData } from '../../consts';

class MainPage extends Page {
  constructor(id: string) {
    super(id);
    this.textObject.name = 'RS Lang';
    this.textObject.describe = `Лёгкий и удобный способ изучения английского языка!<br>
      Наша коллекция содержит 3600 часто употребляемых
      слов, поделённых на 6 уровней, изучение которых с каждым днём будет приближать Вас к цели.
      С нашими мини-играми
      повторять и запоминать слова будет ещё увлекательней. Давайте начнем!`;
  }

  renderTeamCards = (): HTMLElement => {
    const teamCards = document.createElement('div');
    teamCards.classList.add('team-cards');
    const title = document.createElement('p');
    title.classList.add('team-cards-title');
    title.innerHTML = 'Наша команда';
    teamCards.append(title);
    teamData.forEach((data) => {
      const flipCard = document.createElement('div');
      flipCard.classList.add('flip-card');
      const flipCardInner = document.createElement('div');
      flipCardInner.classList.add('flip-card-inner');
      const flipCardFront = document.createElement('div');
      flipCardFront.classList.add('flip-card-front');
      const image = document.createElement('img');
      image.classList.add('card-image');
      const name = document.createElement('h4');
      name.innerHTML = data.name;
      const position = document.createElement('p');
      position.innerHTML = data.position;
      flipCardFront.append(image, name, position);
      const flipCardBack = document.createElement('div');
      flipCardBack.classList.add('flip-card-back');
      const desc = document.createElement('p');
      desc.innerHTML = data.description;
      flipCardBack.append(desc);
      flipCardInner.append(flipCardFront, flipCardBack);
      flipCard.append(flipCardInner);
      teamCards.append(flipCard);
    });
    return teamCards;
  };

  render = (): HTMLElement => {
    const wrap = document.createElement('div');
    wrap.classList.add('main-desc-wrap');
    const title = MainPage.creatHeaderTitle(this.textObject.name);
    const describe = document.createElement('p');
    describe.classList.add('describe-title');
    describe.innerHTML = this.textObject.describe;
    wrap.append(title, describe);
    this.container.append(wrap);
    this.container.append(this.renderTeamCards());
    return this.container;
  };
}

export default MainPage;
