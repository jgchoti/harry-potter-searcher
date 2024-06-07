import { state } from "../../data/state.js"
import { selectorListener } from "../listeners/selector-listener.js"
import { paginatorListener } from "../listeners/paginator-listener.js"
import { BTN_PAGINATOR } from '../../data/constant.js'

export const renderPaginator = () => {
    const outputContainer = document.getElementById('output')
    const searchResultContainer = document.getElementById('container-search-result')

    const PAGE_POSITION = ['top', 'bottom']

    PAGE_POSITION.forEach(position => {
        const container = document.createElement('div')
        container.id = `paginator-${position}`
        if (position === 'top') {
            outputContainer.insertBefore(container, searchResultContainer)
        } else {
            outputContainer.appendChild(container)
        }
        const containerPageSize = document.createElement('div')
        containerPageSize.classList.add('container-page-size')
        const labelEl = document.createElement('label')
        labelEl.htmlFor = `selector-page-size-${position}`
        labelEl.innerText = 'Results per page'
        containerPageSize.appendChild(labelEl)

        const selectEl = document.createElement('select')
        selectEl.id = `selector-page-size-${position}`
        for (let i = 1; i <= state.pagination.totalResults; i++) {
            const optionEl = document.createElement('option')
            optionEl.value = i
            optionEl.innerText = i
            if (i === state.pagination.pageSize) {
                optionEl.selected = true
            }
            selectEl.appendChild(optionEl)
        }
        containerPageSize.appendChild(selectEl)
        container.appendChild(containerPageSize);
        selectorListener(selectEl.id)


        const containerPageInfo = document.createElement('div')
        containerPageInfo.classList.add('container-page-info')
        const pEl = document.createElement('p')
        pEl.innerText = `Page ${state.pagination.currentPage} of ${state.pagination.totalPages}`
        containerPageInfo.appendChild(pEl)
        container.appendChild(containerPageInfo)

        const containerBtn = document.createElement('div')
        containerBtn.classList.add('container-page-btn')
        for (const key in BTN_PAGINATOR) {
            const buttonEL = document.createElement('button');
            buttonEL.innerHTML = BTN_PAGINATOR[key];
            buttonEL.id = key + '-' + position;
            containerBtn.appendChild(buttonEL);
        }
        container.appendChild(containerBtn);
        const buttons = containerBtn.querySelectorAll('button')
        buttons.forEach(btn => paginatorListener(btn.id))

    })






}