import { userInputHandler } from "../handlers/user-input-handler.js";

export const textInputListener = (id) => {
    const inputEl = document.getElementById(id)
    inputEl.addEventListener('keydown', (event) => {

        if (event.key === 'Enter') {
            userInputHandler()
        }
    });
}