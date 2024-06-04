import { state } from "../../data/state.js"
import { apiService } from "../api-calls/api-service.js"
import { renderError } from "../components/render-error.js"
import { renderPageResult } from "../components/render-page-result.js"
import { renderPaginator } from "../components/render-paginator.js"
import { renderSort } from "../components/render-sort.js"
export const setData = async (inputValue) => {
    const outputContainer = document.getElementById('output')
    outputContainer.innerHTML = ''

    try {
        const response = await apiService(inputValue)
        // console.log(response.data)

        if (response.data.length === 0) {
            renderError('Not Found!')
            throw new Error('Not Found!')
        }
        state.pagination.totalResults = response.meta.pagination.records
        state.pagination.totalPages = Math.ceil(state.pagination.totalResults / state.pagination.pageSize)

        state.data = []
        state.data = response.data
        console.log(state)

        renderSort()
        renderPageResult()
        renderPaginator()
    } catch (error) {
        throw new Error(error.message)
    }
}