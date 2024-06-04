import { state } from "../../data/state.js"
import { setData } from "../utils/set-data.js"

export const paginatorHandler = (event) => {
    const pageSelect = event.target.id
    let newPage = state.pagination.currentPage
    if (pageSelect === 'first') {
        newPage = 1
    } else if (pageSelect === 'last') {
        newPage = state.pagination.totalPages
    } else if (pageSelect === 'next') {
        newPage = Math.min(newPage + 1, state.pagination.totalPages)
    } else {
        newPage = Math.max(newPage - 1, 1)
    }
    state.pagination.currentPage = newPage
    setData()
}