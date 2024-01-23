const box = document.querySelector('.box')
const btn1= document.querySelector('.btn1')
const btn2= document.querySelector('.btn2')

btn1.addEventListener('click',boxfunction)
btn2.addEventListener('click',remove)

function boxfunction(){
    box.classList.add('b')
}
function remove(){
   box.classList.remove('b')
}