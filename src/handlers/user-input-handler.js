import { state } from "../../data/state.js"
import { renderError } from "../components/render-error.js"
import { setData } from "../utils/set-data.js"

export const userInputHandler = () => {
    const inputValue = document.getElementById("user-input-text").value.trim()

    if (inputValue.length === 0) {
        renderError('empty input')
    }
    const type = document.getElementById("types").value
    state.type = type
    state.searchTerm = inputValue
    state.pagination.currentPage = 1
    setData()
}