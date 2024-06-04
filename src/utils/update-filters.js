import { state } from "../../data/state.js";

export const updateFilters = () => {
    const elements = document.querySelectorAll('input');
    state.filterCount = elements.length;
    state.filter = []

    for (let i = 0; i <= state.filterCount; i++) {
        const selectorFilter = document.getElementById(`selector-filter-${i}`);
        const selectorFilterBy = document.getElementById(`selector-filter-by-${i}`);
        const searchTerm = document.getElementById(`input-text-${i}`);
        if (selectorFilter && selectorFilterBy) {
            let filter = {
                filterType: selectorFilter.value,
                filterBy: selectorFilterBy.value ? selectorFilterBy.value : 'cont',
                searchTerm: searchTerm ? searchTerm.value : ""
            };
            state.filter.push(filter);
        }
    }
};