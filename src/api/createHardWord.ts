import {BASE_URL} from "../consts";
import {state} from "../state";

export const createHardWord = async (userId: string, wordId: string): Promise<void> => {
    const token = state.token;
    const rawResponse = await fetch(`${BASE_URL}/users/${userId}/words/${wordId}`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({difficulty: 'hard'})
    });
    const content = await rawResponse.json();

    console.log(content);
};


