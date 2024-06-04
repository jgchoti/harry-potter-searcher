import { state } from "../../data/state.js"
import { setData } from "../utils/set-data.js"
export const selectorHandler = (event) => {
    const id = event.target.id
    if (id === 'types') {
        state.type = event.target.value
        if (['characters', 'potions', 'spells'].includes(state.type)) {
            state.filter.nameType = 'name';
        } else {
            state.filter.nameType = 'title';
        }
    } else if (id === 'filter') {
        state.filter.filterBy = event.target.value
    } else if (id === 'sort') {
        state.sort.sortBy = event.target.value
    }
    else {
        state.pagination.pageSize = Number(event.target.value)
    }
    setData()
}

