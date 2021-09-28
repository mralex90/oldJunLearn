let myButton = document.querySelector('.my-button')
let myInput = document.querySelector('.my-input')
let myHeader = document.querySelector('.header')

 

myButton.addEventListener('click', function(){
    myHeader.innerText = "Привет " + myInput.value
})