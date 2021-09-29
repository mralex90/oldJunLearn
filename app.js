let numberOne = document.querySelector('.number')
let button = document.querySelector('.button')
let result = document.querySelector('.result')

button.addEventListener('click', function(){

    let price = 100
    let age = numberOne.value

    //Если младше 8 лет, цена = 0
    if(age < 8){
        price = 0
    } 

    // Если младше 20 лет, цена = цена -20%
    if(age < 20){
        price = price * 0.8
    }

    if(age > 20){
        price = price
    }

    result.innerText = `Цена билета равна ${price}`

})