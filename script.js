let headBurger = document.querySelector('.header_burger');
let headBurgerLineOne = document.querySelector('.header_burger_line_one');
let headBurgerLineTwo = document.querySelector('.header_burger_line_two');
let headBurgerLineThree = document.querySelector('.header_burger_line_three');
let headBurgerContent = document.querySelector('.head_burger_content');

let footBurger = document.querySelector('.footer_burger');
let footBurgerLineOne = document.querySelector('.footer_burger_line_one');
let footBurgerLineTwo = document.querySelector('.footer_burger_line_two');
let footBurgerLineThree = document.querySelector('.footer_burger_line_three');
let footBurgerContent = document.querySelector('.footer_burger_content');

headBurger.addEventListener('click', () => {
    if (headBurgerLineOne.className === 'header_burger_line_one') {
        headBurgerLineOne.classList.add('head_active');
    } else {
        headBurgerLineOne.classList.remove('head_active');
    };

    if (headBurgerLineTwo.className === 'header_burger_line_two') {
        headBurgerLineTwo.classList.add('head_active_two');
    } else {
        headBurgerLineTwo.classList.remove('head_active_two');
    };

    if (headBurgerLineThree.className === 'header_burger_line_three') {
        headBurgerLineThree.classList.add('head_active_three');
    } else {
        headBurgerLineThree.classList.remove('head_active_three');
    };

    if (headBurgerContent.className === 'head_burger_content') {
        headBurgerContent.classList.add('head_active_four');
    } else {
        headBurgerContent.classList.remove('head_active_four');
    };
});

footBurger.addEventListener('click', () => {
    if (footBurgerLineOne.className === 'footer_burger_line_one') {
        footBurgerLineOne.classList.add('foot_active');
    } else {
        footBurgerLineOne.classList.remove('foot_active');
    };

    if (footBurgerLineTwo.className === 'footer_burger_line_two') {
        footBurgerLineTwo.classList.add('foot_active_two');
    } else {
        footBurgerLineTwo.classList.remove('foot_active_two');
    };

    if (footBurgerLineThree.className === 'footer_burger_line_three') {
        footBurgerLineThree.classList.add('foot_active_three');
    } else {
        footBurgerLineThree.classList.remove('foot_active_three');
    };

    if (footBurgerContent.className === 'footer_burger_content') {
        footBurgerContent.classList.add('foot_active_four');
    } else {
        footBurgerContent.classList.remove('foot_active_four');
    };
});