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

    const SORT_ORDER_BTN = {
        'ascending': '<i class="fa-solid fa-arrow-down-a-z"></i>',
        'descending': '<i class="fa-solid fa-arrow-up-a-z"></i>'
    }
    for (const key in SORT_ORDER_BTN) {
        const buttonEL = document.createElement('button')
        buttonEL.innerHTML = SORT_ORDER_BTN[key]
        buttonEL.id = key
        sortContainer.appendChild(buttonEL)
        sortBtnListener(buttonEL.id)
    }


    if (state.sort.sortOrder) {
        document.getElementById('ascending').classList.add('active');
        document.getElementById('descending').classList.remove('active');
    } else {
        document.getElementById('ascending').classList.remove('active');
        document.getElementById('descending').classList.add('active');
    }

    selectorListener(id);
};



