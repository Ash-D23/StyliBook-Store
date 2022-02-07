let navbar__menu = document.querySelector('.navbar__menu');
let drawer__container = document.querySelector('.drawer__container');
let drawer__clear = document.querySelector('.drawer__clear');

let filter__view = document.querySelector('.filter__view');
let filters = document.querySelector('.filters')

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

if(filter__view){
    filter__view.addEventListener('click', ()=>{
        filters.classList.toggle('display-filters')
    })
}