export const createUser = async () => {
  const rawResponse = await fetch('http://localhost:9000/user', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ 'name': 'IvanKo', 'email': 'Warlock_86@mail.ru', 'password': 'Malinovka_4ever' }),
  });
  const content = await rawResponse.json();

  console.log(content);
};

createUser();

export const loginUser = async (user:any) => {
  const rawResponse = await fetch('http://localhost:9000/user', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  const content = await rawResponse.json();

  console.log(content);
};

export const getWords = async () => {
  const rawResponse = await fetch('http://localhost:9000/words', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const content = await rawResponse.json();

  console.log(content);
};

getWords();
