const title1 = document.getElementById('title1')
const title2 = document.getElementById('title2')
const title3 = document.getElementById('title3')

const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')




btn1.addEventListener('click',mybtu)
btn2.addEventListener('mouseover',mybutton)
btn3.addEventListener('mouseleave',button)


function mybtu () {
    console.log("first");
    title1.innerText = "Name:Srinath.D \n Address: no,mari amman koil street py-9 \n Mobile No:9790111056";
    title1.style.color= "gray"
}
function mybutton () {
    console.log("first");
    title2.innerText = "Pets care \n Travelling new place \n Trucking camp";
    title2.style.color= "darkblue"
}
function button () {
    console.log("first");
    title3.innerText = "3-years in Datamatics \n Banking process \n Team Management";
    title3.style.color= "black"
}