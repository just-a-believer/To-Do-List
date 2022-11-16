//Selectors
let inputField = document.getElementById('new_task_input')
let addToDoButton = document.getElementById('addButton')
let clearList = document.getElementById('clearButton')
let outputField = document.getElementById('todoList')

//Event Listeners
addToDoButton.addEventListener('click', function () {
    let listItem = document.createElement('li')
    listItem.innerHTML = inputField.value
    outputField.appendChild(listItem)
    inputField.value = ""
    listItem.addEventListener('click', function () {
        listItem.style.textDecoration = 'line-through'
    })
    listItem.addEventListener('dblclick', function () {
        outputField.removeChild(listItem)
    })
})

clearList.addEventListener('click', function () {
    let clear = document.getElementById('todoList')
    clear.remove()
})

window.addEventListener('load', function () {
    alert('Click To-Do to cross out \n Double click to remove')
})