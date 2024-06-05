export const renderError = (message) => {
    const outputContainer = document.getElementById('output')
    const pEl = document.createElement('p')
    pEl.className.add('error-message')
    pEl.innerText = message
    outputContainer.appendChild(pEl)
}