import { state } from "../../data/state.js";
import { renderFilter } from "../components/render-filter.js";
import { updateFilters } from "../utils/update-filters.js";
import { updateSort } from "../utils/update-sort.js";

export const typeChangeHandler = (searchTerm) => {
    state.type = document.getElementById('selector-types').value;

    state.filter = [];
    state.filterCount = 1;

    updateSort()
    updateFilters()

    const filterContainer = document.getElementById('filter');
    filterContainer.innerHTML = '';
    renderFilter()
};