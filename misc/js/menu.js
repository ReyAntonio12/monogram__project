document.addEventListener("DOMContentLoaded", (event) => {
    let button = document.querySelector('.header__menu');
    let hamburger = document.querySelector('.header__menu .menu__btn--open');
    let exit = document.querySelector('.header__menu .menu__btn--close');
    let aside = document.querySelector('.header__nav');

    button.addEventListener("click", (event) => {

        let visible = document.querySelector('.header__nav--visible');

        if(!visible){
            aside.classList.add('header__nav--visible');
            hamburger.style.opacity = 0;
            exit.style.opacity = 1;
        } else{
            aside.classList.remove('header__nav--visible');
            hamburger.style.opacity = 1;
            exit.style.opacity = 0;
        }
    });

    window.addEventListener("resize", (event) => {
        let size = parseInt(document.body.clientWidth);

        if(size <= 1010){
            aside.classList.remove('header__nav--visible');
            hamburger.style.opacity = 1;
            exit.style.opacity = 0;
        }
    });
});