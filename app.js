let carObj = {name: 'BMW', color: 'red', year: 2020}

console.log(carObj)

let body = document.querySelector('body')

let carName = carObj.name

debugger

let name = document.createElement('p')
name.innerText = carObj.name

let color = document.createElement('p')
color.innerText = carObj.color

let year = document.createElement('p')
year.innerText = carObj.year

body.appendChild(name)
body.appendChild(color)
body.appendChild(year)