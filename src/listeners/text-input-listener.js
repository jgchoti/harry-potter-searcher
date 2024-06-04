import { userInputHandler } from "../handlers/user-input-handler.js";
export const textInputListener = () => {
    document.getElementById('user-input-text').addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            userInputHandler()
        }
    });
}