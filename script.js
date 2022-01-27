/*
const busca = document.getElementById("busca")



busca.addEventListener('focus', function(){
    this.removeAttribute('placeholder')
    console.log('oi')
})
*/

const btnMenu = document.querySelector('.btnMenu')

function toggleMenu(){
const menu = document.querySelector('.menu')
menu.classList.toggle('active')
}

btnMenu.addEventListener('click', toggleMenu)

