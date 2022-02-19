import { authName } from '../authorization/variables';
import { statusWord } from '../consts';

export const createStatusWordWrap = (): HTMLElement => {
  const wrap = document.createElement('div');
  wrap.classList.add('status-word-wrap');
  wrap.innerHTML = statusWord.isHard.icon;
  const tooltipWrap = document.createElement('div');
  tooltipWrap.classList.add('tooltip-wrap');
  const title = document.createElement('span');
  title.classList.add('tooltip-title');
  title.innerHTML = statusWord.isHard.text;
  tooltipWrap.append(title);
  wrap.append(tooltipWrap);

  if (authName.textContent) {
    wrap.style.display = 'block';
  }
  return wrap;
};

export const markHardWord = (): void => {
  const btns = document.querySelectorAll<HTMLElement>('.fa-bookmark');
  btns.forEach((el) => el.addEventListener('click', () => {
    el.classList.add('active');
  }));

};
