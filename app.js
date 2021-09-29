let myInput = document.createElement('input')
myInput.setAttribute('type', 'number')

let myButton = document.createElement('button')
myButton.innerText = 'Показать'

let myParag = document.createElement('p')
myParag.innerText = 'Здесь что-то написано'


let body = document.querySelector('body')
body.appendChild(myInput)
body.appendChild(myButton)
body.appendChild(myParag)