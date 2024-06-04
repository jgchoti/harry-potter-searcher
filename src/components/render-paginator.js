import { state } from "../../data/state.js"
import { selectorListener } from "../listeners/selector-listener.js"
import { paginatorListener } from "../listeners/paginator-listener.js"
import { BTN_PAGINATOR } from '../../data/constant.js'

export const renderPaginator = () => {
    const outputContainer = document.getElementById('output')
    const container = document.createElement('div')
    container.id = 'paginator'
    outputContainer.appendChild(container)

    const labelEl = document.createElement('label')
    labelEl.htmlFor = 'selector-page-size'
    labelEl.innerText = 'Results per page'
    container.appendChild(labelEl)

    const selectEl = document.createElement('select')
    selectEl.id = 'selector-page-size'
    for (let i = 1; i <= state.pagination.totalResults; i++) {
        const optionEl = document.createElement('option')
        optionEl.value = i
        optionEl.innerText = i
        if (i === state.pagination.pageSize) {
            optionEl.selected = true
        }
        selectEl.appendChild(optionEl)
    }
    container.appendChild(selectEl)
    selectorListener(selectEl.id)

    const pEl = document.createElement('p')
    pEl.innerText = `Page ${state.pagination.currentPage} of ${state.pagination.totalPages}`
    container.appendChild(pEl)

    for (const key in BTN_PAGINATOR) {
        const buttonEL = document.createElement('button');
        buttonEL.innerText = BTN_PAGINATOR[key];
        buttonEL.id = key;
        container.appendChild(buttonEL);
        paginatorListener(buttonEL.id);
    }
}