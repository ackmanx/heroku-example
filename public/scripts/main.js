document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('/passthrough')
    const json = await response.json()

    const meatyContainer = document.querySelector('#meaty-container')

    json.forEach(item => {
        const listItem = document.createElement('li')
        const node = document.createTextNode(item)
        listItem.appendChild(node)
        meatyContainer.appendChild(listItem)
    })
})
