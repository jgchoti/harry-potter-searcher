import { selectorHandler } from "../handlers/selector-handler.js"

export const selectorListener = (id) => {
    console.log(id)
    document.getElementById(id).addEventListener('change', (event) => selectorHandler(event))
}