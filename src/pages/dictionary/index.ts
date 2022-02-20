import Page from '../../core/templates/page';
import { authName } from '../../authorization/variables';
import { getHardWords } from '../../api/getHardWords';
import { state } from '../../state';

class DictionaryPage extends Page {
    constructor(id: string) {
        super(id);
        this.textObject.name = 'Словарь';
    }

    render = (): HTMLElement => {
        const title = DictionaryPage.creatHeaderTitle(this.textObject.name);
        const notice = document.createElement('p');
        notice.innerHTML = 'Для работы со словарём необходимо авторизоваться';
        if (!authName.textContent) {
            this.container.append(title, notice);
        } else {
            getHardWords(state.userId);
            this.container.append(title);
        }
        return this.container;
    };
}

export default DictionaryPage;
