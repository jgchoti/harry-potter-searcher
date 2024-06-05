import { state } from "../../data/state.js"
import { renderError } from "../components/render-error.js"
import { setData } from "../utils/set-data.js"
import { updateFilters } from "../utils/update-filters.js"
import { updateSort } from "../utils/update-sort.js"

export const userInputHandler = () => {
    const type = document.getElementById("selector-types").value
    state.type = type
    state.pagination.currentPage = 1

    updateFilters()
    updateSort()
    setData()
}