import openModalAuth from './modalWindowAuth';

const data = {
  src: './logo.jpg',
  name: 'Не авторизован',
};

const authLogo = document.createElement('img');

const authorization = () => {
  const container = document.createElement('div');

  authLogo.src = data.src;
  authLogo.style.width = '100px';
  const authName = document.createElement('span');
  authName.textContent = data.name;
  document.body.insertAdjacentElement('beforeend', container);
  container.insertAdjacentElement('beforeend', authName);
  container.insertAdjacentElement('beforeend', authLogo);
};

authLogo.addEventListener('click', openModalAuth);

export default authorization;
