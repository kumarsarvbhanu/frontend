// const element = document.getElementById('animals')
// const elements = document.getElementsByClassName('item')
// const elements = document.getElementsByTagName('item')
// console.log(elements.length)
// const element = elements[0]
// for (const element of elements) {
//     element.innerHTML = "changed text"
// }

const element = document.querySelectorAll('li[title]')
element.innerHTML = "changed text"

const elements = document.querySelectorAll('*[title]')
for (const element of elements) {
    element.innerHTML = "changed text"
}

function buttonFocusFunc() {
    console.log("this was clicked")
}