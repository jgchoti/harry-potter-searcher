import { state } from "../../data/state.js";

export const updateFilters = (type = '') => {
    state.filter = [];
    if (type === 'reset') {
        state.filterCount = 1;
        let filter = {
            filterType: state.type === 'characters' || state.type === 'potions' || state.type === 'spells' ? 'name' : 'title',
            filterBy: 'cont',
            searchTerm: ""
        };
        state.filter.push(filter);
    } else {
        for (let i = 1; i <= state.filterCount; i++) {
            const selectorFilter = document.getElementById(`selector-filter-${i}`);
            const selectorFilterBy = document.getElementById(`selector-filter-by-${i}`);
            const searchTerm = document.getElementById(`input-text-${i}`);

            if (selectorFilter && selectorFilterBy) {
                let filter = {
                    filterType: selectorFilter.value,
                    filterBy: selectorFilterBy.value || 'cont',
                    searchTerm: searchTerm ? searchTerm.value : ""
                };
                state.filter.push(filter);
            }
        }

        if (state.filter.length === 0) {
            let defaultFilter = {
                filterType: state.type === 'characters' || state.type === 'potions' || state.type === 'spells' ? 'name' : 'title',
                filterBy: 'cont',
                searchTerm: ""
            };
            state.filter.push(defaultFilter);
            state.filterCount = 1;
        }
    }
    console.log(state);
};
