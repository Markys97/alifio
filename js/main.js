let burger= document.querySelector('.header__burger');
let header_mobile= document.querySelector('.header__mobile');
let header_close= document.querySelector('.header__close');


burger.addEventListener('click',e=>{
    header_mobile.classList.add('open-menu')
})
header_close.addEventListener('click',e=>{
    header_mobile.classList.remove('open-menu')
})