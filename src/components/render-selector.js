import { state } from "../../data/state.js"

export const renderSelector = (id, option = {}) => {
    const selectEl = document.createElement('select')
    selectEl.id = id
    for (const key in option) {
        const optionEl = document.createElement('option')
        optionEl.value = key
        optionEl.innerText = option[key]
        if (key === state.sort.sortBy) {
            optionEl.selected = true
        }
        selectEl.appendChild(optionEl)
    }
    return selectEl
}