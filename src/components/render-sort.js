import { state } from "../../data/state.js"
import { selectorListener } from "../listeners/selector-listener.js"
import { sortBtnListener } from "../listeners/sort-btn-listener.js"
export const renderSort = () => {
    const outputContainer = document.getElementById('output')
    const sortContainer = document.createElement('div')
    sortContainer.id = ' sort-container'
    outputContainer.appendChild(sortContainer)

    const SORT_OPTION = {
        'books': {
            'title': 'Title',
            'pages': 'Page',
            'release_date': 'Release Date',
        },
        'characters': {
            'name': 'Name',
            'house': 'House',
            'nationality': 'Nationality',
            'alias_names': 'Alias Names',
        },
        'movies': {
            'title': 'Title',
            'release_date': 'Release Date',
            'running_time': 'Running Time'
        },
        'potions': {
            'name': 'Name',
            'ingredients': 'ingredients',
            'effect': 'Effect'
        },
        'spells': {
            'name': 'Name',
            'category': 'Category',
            'light': 'Light',
        }
    }
    const id = 'sort'
    const labelEl = document.createElement('label')
    labelEl.htmlFor = id
    labelEl.innerText = 'Sort By'
    sortContainer.appendChild(labelEl)

    const selectEl = document.createElement('select')
    selectEl.id = id
    for (const key in SORT_OPTION[state.type]) {
        const optionEl = document.createElement('option')
        optionEl.value = key
        optionEl.innerText = SORT_OPTION[state.type][key]
        if (key === state.sort.sortBy) {
            optionEl.selected = true
        }
        selectEl.appendChild(optionEl)
    }
    sortContainer.appendChild(selectEl)

    const SORT_ORDER_BTN = ['ascending', 'descending']

    SORT_ORDER_BTN.forEach(item => {
        const buttonEL = document.createElement('button')
        buttonEL.innerHTML = item
        buttonEL.id = item
        sortContainer.appendChild(buttonEL)
        sortBtnListener(buttonEL.id)
    })

    selectorListener(id)

}

