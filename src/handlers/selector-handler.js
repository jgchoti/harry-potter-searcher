import { state } from "../../data/state.js";
import { setData } from "../utils/set-data.js";
import { updateFilters } from "../utils/update-filters.js";
import { updatePageSize } from "../utils/update-page-size.js";
import { updateSort } from "../utils/update-sort.js";
import { typeChangeHandler } from "./type-change-handler.js";

export const selectorHandler = (event) => {
    const outputContainer = document.getElementById('output');
    outputContainer.innerHTML = '';
    const id = event.target.id;

    if (id === 'types') {
        typeChangeHandler();
    } else if (id === 'selector - page - size') {
        updatePageSize(Number(event.target.value));
    } else {
        updateFilters();
        updateSort();
    }
    setData();
};
