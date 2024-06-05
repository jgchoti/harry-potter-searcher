import { userInputHandler } from '../handlers/user-input-handler.js';

export const btnListener = (id) => {
    document.getElementById(id).addEventListener('click', userInputHandler);
};

