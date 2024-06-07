import { state } from "../../data/state.js"
import { modifyText } from "../utils/modify-text.js"

export const renderPageResult = () => {
    const outputContainer = document.getElementById('output')
    const searchResultContainer = document.createElement('div')
    searchResultContainer.id = 'container-search-result'


    state.data.map(item => {
        const container = document.createElement('div')
        container.classList.add('item-card')

        const titleEl = document.createElement('h3')
        let nameType = item.attributes.name || item.attributes.title
        titleEl.textContent = nameType
        container.appendChild(titleEl)

        const imageSource = item.attributes.image || item.attributes.poster || item.attributes.cover;
        if (imageSource) {
            const imgEl = document.createElement('img');
            imgEl.src = imageSource;
            container.appendChild(imgEl);
        }

        const textContainer = document.createElement('div')
        textContainer.classList.add('container-card-info')
        container.appendChild(textContainer)

        const ulEl = document.createElement('ul')
        textContainer.appendChild(ulEl)

        for (const key in item.attributes) {
            if (item.attributes[key] !== null && item.attributes[key].length !== 0 && key !== 'name' && key !== 'slug' && key !== 'image') {
                const liEl = document.createElement('li')
                if (key === 'wiki') {
                    const aEl = document.createElement('a')
                    aEl.href = item.attributes['wiki']
                    aEl.target = "_blank"
                    aEl.innerHTML = `More Info about... ${nameType}`
                    liEl.appendChild(aEl)
                } else {
                    let text = modifyText(key)
                    liEl.innerHTML = `<strong>${text}</strong>: ${item.attributes[key]}`
                }
                ulEl.appendChild(liEl)
            }

        }
        searchResultContainer.appendChild(container)
    })
    outputContainer.appendChild(searchResultContainer)
}