let navbar__menu = document.querySelector('.navbar__menu');
let drawer__container = document.querySelector('.drawer__container');
let drawer__clear = document.querySelector('.drawer__clear');

if(navbar__menu){
    navbar__menu.addEventListener('click', ()=>{
        drawer__container.classList.add('drawer__position-right');
    })
}

if(drawer__clear){
    drawer__clear.addEventListener('click', ()=>{
        drawer__container.classList.remove('drawer__position-right')
    })
}