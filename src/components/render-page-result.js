import { state } from "../../data/state.js"

export const renderPageResult = () => {
    const outputContainer = document.getElementById('output')
    const searchResultContainer = document.createElement('div')
    searchResultContainer.id = 'container-search-result'
    console.log(state.data)
    state.data.map(item => {
        const container = document.createElement('div')
        container.classList.add('item-card')

        if (state.type === "characters") {
            const titleEl = document.createElement('h3')
            titleEl.textContent = item.attributes.name
            container.appendChild(titleEl)

            if (item.attributes.image) {
                const imgEl = document.createElement('img')
                imgEl.src = item.attributes.image
                container.appendChild(imgEl)
            }

            const textContainer = document.createElement('div')
            textContainer.id = 'container-card-info'
            container.appendChild(textContainer)

            // let info = {
            //     'alias names': item.attributes.alias_names,
            //     'animagus': item.attributes.animagus,
            //     'blood status': item.attributes.blood_status,
            //     born: item.attributes.born,
            //     died: item.attributes.died,
            //     'eye color': item.attributes.eye_color,
            //     gender: item.attributes.gender,
            //     'hair color': item.attributes.hair_color,
            //     'height': item.attributes.height,
            //     'house': item.attributes.house,
            //     'jobs': item.attributes.jobs,
            //     'marital status': item.attributes.marital_status,
            //     nationality: item.attributes.nationality,
            //     'family_members': item.attributes.family_members,
            //     patronus: item.attributes.patronus,
            //     'romances': item.attributes.romances,
            //     'titles': item.attributes.titles,
            //     'wands': item.attributes.wands,
            //     'weight': item.attributes.weight,
            // }

            const ulEl = document.createElement('ul')
            textContainer.appendChild(ulEl)

            for (const key in item.attributes) {

                if (item.attributes[key] !== null && item.attributes[key].length !== 0 && key !== 'name' && key !== 'slug') {

                    const liEl = document.createElement('li')
                    if (key === 'wiki') {
                        const aEl = document.createElement('a')
                        a.href = item.attributes[key]
                        ulEl.appendChild(liEl)
                    }
                    liEl.innerHTML = item.attributes[key]
                    ulEl.appendChild(liEl)
                }

            }
        }

        searchResultContainer.appendChild(container)
    })
    outputContainer.appendChild(searchResultContainer)
}