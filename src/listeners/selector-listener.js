import { selectorHandler } from "../handlers/selector-handler.js"

export const selectorListener = (id) => {
    document.getElementById(id).addEventListener('change', (event) => {
        event.preventDefault()
        selectorHandler(event)
    })
}