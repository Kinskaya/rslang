export const createUser = async (user: {
  name: string;
  email: string;
  password: string;
}): Promise<void> => {
  const rawResponse = await fetch("http://localhost:9000/users", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const content = await rawResponse.json();

  console.log(content);
};
