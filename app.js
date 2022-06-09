const url = 'https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=7'

function createWrapper() {
    const wrapper = createNode('div')
    wrapper.classList.add('wrapper')
    const body = document.querySelector('body')
    body.prepend(wrapper)
}
function sendRequest(url) {
    return fetch(url)
        .then(response => {
            return response.json()
        })
}
function createNode(element) {
    return document.createElement(element);
}

function buildCard(node) {
    let div = createNode('div')
    let span = createNode('h4')
    let p = createNode('p')
    let checkBox = createNode('input')

    div.classList.add('card')
    span.classList.add('title')
    p.classList.add('paragraph')
    checkBox.classList.add('check-box')

    span.innerHTML = node.title
    p.innerHTML = node.body
    checkBox.setAttribute("type", "checkbox")
    checkBox.id = node.id

    checkBox.addEventListener('change', (e) => {
        e.target.parentNode.classList.toggle('active')
    })

    div.appendChild(span)
    div.appendChild(p)
    div.appendChild(checkBox)
    let wrapper = document.querySelector('.wrapper')
    wrapper.appendChild(div)
}
sendRequest(url)
    .then(data => {
        createWrapper()
        let array = data
        array.map(item => {
            buildCard(item)
        })
    })
    .catch(err => console.log(err))