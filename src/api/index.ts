import { word } from './templates/word';
// import { createUser } from './api/createUser';
import { getAllWords } from './api/getAllWords';
// import { getUser } from './utils/getUser';
// import { getWord } from './api/getWord';
import './styles/style.css';
import { logIn } from './api/logIn';
import { TUser } from './types';
// import { createWord } from './api/createWord';

const userLogin: TUser = {
  email: 'mail5@mail.se',
  password: 'qwerty123',
};

const data = getAllWords();

// const newUser = createUser('mail5@mail.se', 'qwerty123');
// const wordssss = getWord('5e9f5ee35eb9e72bc21af4a9');

const wrapper = document.createElement('div');
wrapper.id = 'wrapper';
const header = document.createElement('div');
header.id = 'header';
const footer = document.createElement('div');
const main = document.createElement('div');
main.id = 'main';
footer.id = 'footer';
header.innerHTML = 'header';
footer.innerHTML = 'footer';

wrapper.append(header, main, footer);

word();
export const tokenUser = logIn(userLogin);
// const wordID = wordIdUser(tokenUser,"wordid","wordalgo");
// const wordID = wordIdUser1(tokenUser,Tword);

// createWord(
//   userId: '5ec993df4ca9d600178740ae',
//   wordId: '5e9f5ee35eb9e72bc21af716',
//   word: 'weak',
//     token: tokenUser
// );
document.body.append(wrapper);
