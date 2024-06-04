import { addFilterHandler } from '../handlers/add-filter-handler.js';

export const addFilterListener = (id) => {
    document.getElementById(id).addEventListener('click', addFilterHandler);
};
