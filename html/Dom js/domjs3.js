const box1 = document.querySelector('.box1')

box1.addEventListener('click',box1function)

function box1function(){

    box1.classList.add('b1')
}

const box2 = document.querySelector('.box2')

box2.addEventListener('mouseover',box2fun)

function box2fun(){

    box2.classList.add('b2')
}

const box3 = document.querySelector('.box3')

box3.addEventListener('click',box3fun)

function box3fun(){

    box3.classList.add('b3')
}
const box4 = document.querySelector('.box4')

box4.addEventListener('mouseout',box4fun)

function box4fun(){

    box4.classList.add('b4')
}

const box5 = document.querySelector('.box5')

box5.addEventListener('click',box5fun)

function box5fun(){

    box5.classList.add('b5')
}