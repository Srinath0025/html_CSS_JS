const red = document.querySelector('.red')

red.addEventListener('click',redBoxFunction)

function redBoxFunction(){
    // red.style.height = '500px'
    red.classList.add('rb')
}

const blue = document.querySelector('.blue')

blue.addEventListener('mouseover',blueboxfun)

function blueboxfun(){
    blue.classList.add('bl')
}

let green = document.querySelector('.green')

green.addEventListener('mouseleave',greenbox)

function greenbox(){
    green.classList.add('gr')

}