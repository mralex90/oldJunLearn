let numberOne = document.querySelector('.number-one')
let numberTwo = document.querySelector('.number-two')

let plusButton = document.querySelector('.plus')
let minusButton = document.querySelector('.minus')
let divideButton = document.querySelector('.divide')
let multiplyButton = document.querySelector('.multiply')

let clearButton = document.querySelector('.clear')

let resultText = document.querySelector('.result')

clearButton.addEventListener('click', function(){
    resultText.innerText = ''
    numberOne.value = ''
    numberTwo.value = ''
})

plusButton.addEventListener('click', function(){

    let numOne = parseInt(numberOne.value)
    let numTwo = parseInt(numberTwo.value)
    

    let sum = numOne + numTwo

    resultText.innerText = sum

})

minusButton.addEventListener('click', function(){

    let numOne = parseInt(numberOne.value)
    let numTwo = parseInt(numberTwo.value)
    

    let minus = numOne - numTwo

    resultText.innerText = minus

})

divideButton.addEventListener('click', function(){

    let numOne = parseInt(numberOne.value)
    let numTwo = parseInt(numberTwo.value)
    

    let divide = numOne / numTwo

    resultText.innerText = divide

})

multiplyButton.addEventListener('click', function(){

    let numOne = parseInt(numberOne.value)
    let numTwo = parseInt(numberTwo.value)
    

    let multiply = numOne * numTwo

    resultText.innerText = multiply

})