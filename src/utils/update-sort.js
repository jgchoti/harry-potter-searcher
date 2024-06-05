import { state } from "../../data/state.js";

export const updateSort = (sortOrder = 'ascending') => {
    const selectorSort = document.getElementById('selector-sort');
    if (selectorSort) {
        state.sort.sortBy = selectorSort.value
    } else if (state.type === "characters" || state.type === 'spells' || state.type === 'potions') {
        state.sort.sortBy = 'name'
    } else {
        state.sort.sortBy = 'title'
    }

    if (sortOrder === 'ascending') {
        state.sort.sortOrder = true
    } else {
        state.sort.sortOrder = false
    }
};