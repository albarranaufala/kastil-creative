const burgerBtn = document.querySelector('.burger');
const clearBtn = document.querySelector('.clear');
const navbar = document.querySelector('nav');

burgerBtn.addEventListener('click', function(e){
    navbar.classList.add('responsive');
})
clearBtn.addEventListener('click', function(e){
    navbar.classList.remove('responsive');
})