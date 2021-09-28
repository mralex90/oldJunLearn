let myButton = document.querySelector('.my-button')
let myInput = document.querySelector('.my-input')
let myHeader = document.querySelector('.header')

myButton.addEventListener('click', function(){
    
    let amount = parseInt(myInput.value)
    let VAT = 0.15

    myHeader.innerText = `Сумма НДС с ${amount} равна ${amount * VAT}` 
})


// let myButton = document.querySelector('.my-button')
// let myInput = document.querySelector('.my-input')
// let myHeader = document.querySelector('.header')
// let mySecondInput = document.querySelector('.input-two')
 

// myButton.addEventListener('click', function(){

//     let inputValue = parseInt(myInput.value)

//     let secondInputValue = parseInt(mySecondInput.value)

//     myHeader.innerText = inputValue + secondInputValue

//     //myHeader.innerText = `${secondInputValue} ${inputValue}`
// })