export const renderError = (message) => {
    const sortContainer = document.getElementById('sort')
    sortContainer.innerHTML = ""

    const outputContainer = document.getElementById('output')
    outputContainer.innerHTML = ""

    const pEl = document.createElement('p')
    pEl.classList.add('error-message')
    pEl.innerText = message
    outputContainer.appendChild(pEl)

    const imgEl = document.createElement('img')
    imgEl.classList.add('error-img')
    imgEl.src = ' https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGFvZ2h6aTRnYjRlODJ1aDhqNXRlODZweWFxNjZwdmswYzdvZmowbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/720g7C1jz13wI/200.webp'
    outputContainer.appendChild(imgEl)

}