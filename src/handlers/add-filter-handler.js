import { state } from "../../data/state.js";
import { renderFilter } from "../components/render-filter.js";
import { updateFilters } from "../utils/update-filters.js";

export const addFilterHandler = (event) => {
    const id = event.target.id;
    console.log(id);
    if (id === 'btn-add-filter') {

        state.filterCount++;
        console.log(state.filterCount);
        renderFilter();
        updateFilters('add');
    } else {
        renderFilter(true);
        updateFilters('reset');
    }
};
