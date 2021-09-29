let numberOne = document.querySelector('.number-one')
let numberTwo = document.querySelector('.number-two')

let plusButton = document.querySelector('.plus')
let minusButton = document.querySelector('.minus')
let divideButton = document.querySelector('.divide')
let multiplyButton = document.querySelector('.multiply')

let resultText = document.querySelector('.result')

plusButton.addEventListener('click', function(){

    let numOne = parseInt(numberOne.value)
    // let numTwo = parseInt(numberTwo.value)
    let numTwo 

    let sum = numOne + numberTwo

    resultText.innerText = sum

})