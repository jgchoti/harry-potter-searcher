import { userInputHandler } from '../handlers/user-input-handler.js';

export const btnListener = () => {
    document.getElementById('submit-btn').addEventListener('click', userInputHandler);
};

