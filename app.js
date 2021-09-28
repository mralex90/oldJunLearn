let carOne = "BMW"
let carTwo = "Audi"
let carThree = "Tesla"

let cars = ["BMW", "Audi", "Tesla"]   //массив
//cars.push("Mers")
// cars.pop()
cars.shift()
cars.unshift("Mers")

let myCars = document.querySelector('.cars')
myCars.innerText = cars
    
let car = document.querySelector('.car')
let myCar = {model: "Audi", year: 2020, color: "black"}
car.innerText = `Model is ${myCar.model} color ${myCar.color} and year is ${myCar.year}`

let addText = document.querySelector('.add-text')
// let firstName = "Oldest"
// let lastName = "Junior"
// let age = 30 

let person = {firstName: "Oldest", lastName: "Junior", age:30}

let fullName = `${person.firstName} ${person.lastName} ${person.age} `
    
addText.innerText = fullName

let yourGreatMinus = document.querySelector(".minus")
yourGreatMinus.innerText = 15 - 2
    
let myHeader = document.querySelector(".header")
myHeader.innerText = "Hi"

let myName = document.querySelector(".name")
myName.innerText = "Oleksandr"
    
let yourPlus = document.querySelector(".plus")
innerText = 21 + 41
    
let numberOne = 10
let numberTwo = 15
let mySum = numberOne + numberTwo

let sumElement = document.querySelector(".sum")
sumElement.innerText = mySum

let multElement = document.querySelector(".multiply")
multElement.innerText = 5 * 10