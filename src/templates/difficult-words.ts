import { authName } from '../authorization/variables';

export const createDiff = (): HTMLElement => {
    const wrap = document.createElement('div');
    wrap.classList.add('diff-wrap');
    wrap.innerHTML = `<i class='far fa-bookmark'></i>`;
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    const title = document.createElement('span');
    title.classList.add('tooltip-text');
    title.innerHTML = 'Добавить в раздел "Сложные слова"';
    tooltip.append(title);
    wrap.append(tooltip);
    if (authName.textContent) {
        wrap.style.display = 'block';
    }
    return wrap;
}
