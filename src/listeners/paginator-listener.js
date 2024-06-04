import { paginatorHandler } from '../handlers/paginator-handler.js';

export const paginatorListener = (id) => {
    document.getElementById(id).addEventListener('click', paginatorHandler);
};

