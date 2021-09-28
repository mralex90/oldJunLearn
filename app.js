function add(a, b, c) {
    return a + b + c
}

function greeting(something) {

    return `Hi ${something}`
}

let headerOne = document.querySelector('.header')

headerOne.innerText = add(1, 2, 3)

