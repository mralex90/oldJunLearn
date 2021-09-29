let numberOne = document.querySelector('.number')
let button = document.querySelector('.button')
let result = document.querySelector('.result')

button.addEventListener('click', function(){

    if(numberOne.value > 20){
        result.innerText = numberOne.value

    }
})