let menu = document.querySelector('#menu-icon');
let navber =document.querySelector('.navbar');

menu.onclick=() => {
    menu.classList.toggle('bx-x');
    navber.classList.toggle('active');
}

window.onscroll=() => {
    menu.classList.remove('bx-x');
    navber.classList.remove('active');
}