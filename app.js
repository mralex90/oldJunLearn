let myButton = document.querySelector('.my-button')
let myInput = document.querySelector('.my-input')
let myHeader = document.querySelector('.header')

 

myButton.addEventListener('click', function(){

    let inputValue = myInput.value

    myHeader.innerText = `Привет ${inputValue}`
})