import { state } from "../../data/state.js"

export const renderPageResult = () => {
    const outputContainer = document.getElementById('output')
    const searchResultContainer = document.createElement('div')
    searchResultContainer.id = 'container-search-result'

    state.data.map(item => {
        const container = document.createElement('div')
        container.classList.add('item-card')
        const titleEl = document.createElement('h3')
        titleEl.textContent = `${state.type === "characters" || state.type === 'spells' || state.type === 'potions' ? item.attributes.name : item.attributes.title}`

        container.appendChild(titleEl)
        searchResultContainer.appendChild(container)
    })
    outputContainer.appendChild(searchResultContainer)
}