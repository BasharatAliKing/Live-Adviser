const menuBar = document.querySelector('#menu-bar');
const menuSec = document.querySelector('.navbar');

menuBar.addEventListener('click', () =>{
    if(menuSec.style.display == "block"){
        menuSec.style.display = "none";
    } else{
        menuSec.style.display = "block";
    }

    if(menuBar.classList.contains('bx-menu')){
        menuBar.classList.remove('bx-menu');
        menuBar.classList.add('bx-x');
    } else {
        menuBar.classList.remove('bx-x');
        menuBar.classList.add('bx-menu');
    }
});