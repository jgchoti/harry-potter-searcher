import { state } from "../../data/state.js"
import { FILTER_OPTION } from "../../data/constant.js"
import { selectorListener } from "../listeners/selector-listener.js"
import { sortBtnListener } from "../listeners/sort-btn-listener.js"
import { renderSelector } from "./render-selector.js"

export const renderSort = () => {
    const sortContainer = document.getElementById('sort')
    sortContainer.innerHTML = ""

    const id = 'selector-sort'
    const labelEl = document.createElement('label')
    labelEl.htmlFor = id
    labelEl.innerText = 'Sort By'
    sortContainer.appendChild(labelEl)

    const selectEl = renderSelector(id, FILTER_OPTION[state.type])
    sortContainer.appendChild(selectEl)

    const SORT_ORDER_BTN = ['ascending', 'descending']

    SORT_ORDER_BTN.forEach(item => {
        const buttonEL = document.createElement('button')
        buttonEL.innerHTML = item
        buttonEL.id = item
        sortContainer.appendChild(buttonEL)
        sortBtnListener(buttonEL.id)
    })

    if (state.sort.sortOrder) {
        document.getElementById('ascending').classList.add('active');
    } else {
        document.getElementById('descending').classList.add('active');
    }


    selectorListener(id)

}

