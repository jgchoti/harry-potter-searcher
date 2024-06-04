import { state } from "../../data/state.js"

export const renderPageResult = () => {
    const outputContainer = document.getElementById('output')

    state.data.map(item => {
        const container = document.createElement('div')

        const titleEl = document.createElement('h3')
        titleEl.textContent = `${state.filter.nameType === 'name' ? item.attributes.name : item.attributes.title}`

        container.appendChild(titleEl)
        outputContainer.appendChild(container)
    })

}