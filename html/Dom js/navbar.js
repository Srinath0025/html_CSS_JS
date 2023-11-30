const openBtn = document.querySelector('#open-btn')
const closeBtn = document.querySelector('#close-btn')
const nav = document.querySelector('#nav')

const openbtn1 = document.querySelector('#open-btn1')
const closebtn1 = document.querySelector('#close-btn1')
const nav1 = document.querySelector('#nav1')

openBtn.addEventListener('click',openNav)
closeBtn.addEventListener('click',closeNav)

openbtn1 = addEventListener('click',opennav1)
closebtn1 = addEventListener('click',closenav1)

// document.addEventListener('click',closeNav)

function openNav(){
    nav.classList.add('open-nav')
}
function closeNav(){
    nav.classList.remove('open-nav')
}

function opennav1(){
    nav1.classList.add('open-nav1')
}
function closenav1(){
    nav1.classList.remove('open-nav1')
}