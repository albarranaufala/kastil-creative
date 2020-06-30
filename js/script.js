const burgerBtn = document.querySelector('.burger');
const clearBtn = document.querySelector('.clear');
const navbar = document.querySelector('nav');
const body = document.querySelector('body');

burgerBtn.addEventListener('click', function(e){
    navbar.classList.add('responsive');
    body.classList.add('overflow-hidden');
})
clearBtn.addEventListener('click', function(e){
    navbar.classList.remove('responsive');
    body.classList.remove('overflow-hidden');
})