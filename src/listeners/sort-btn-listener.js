import { sortHandler } from '../handlers/sort-handler.js';

export const sortBtnListener = (id) => {
    document.getElementById(id).addEventListener('click', sortHandler);
};
