import Page from '../../core/templates/page';
import { choiseLevel } from '../../audioChallenge/index';

const gameLink1 = document.createElement('a');
const gameLink2 = document.createElement('a');

class GamesPage extends Page {
  constructor(id: string) {
    super(id);
    this.textObject.name = 'Игры';
  }

  selectLevel = (): void => {
    choiseLevel();
  };

  render = (): HTMLElement => {
    this.container.classList.add('main-page');
    this.container.classList.add('game-page');

    const title = GamesPage.creatHeaderTitle(this.textObject.name);
    this.container.append(title);

    gameLink1.classList.add('gamePageLink');
    gameLink2.classList.add('gamePageLink');
    gameLink1.textContent = 'Аудио вызов';
    gameLink2.textContent = 'Еще игра';
    this.container.append(gameLink1, gameLink2);

    return this.container;
  };
}

const audioStart = new GamesPage('');

gameLink1.addEventListener('click', audioStart.selectLevel);
export default GamesPage;
