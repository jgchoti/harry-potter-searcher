export const renderError = (message) => {
    const outputContainer = document.getElementById('output')
    const pEl = document.createElement('p')
    pEl.innerText = message
    outputContainer.appendChild(pEl)
}