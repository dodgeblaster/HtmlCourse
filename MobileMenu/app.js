// 1. Get HTML Elements
var openButton      = document.querySelector('#open-mobile-menu-button');
var closeButton     = document.querySelector('#close-mobile-menu-button');
var mobileMenu      = document.querySelector('#mobile-menu');



// 2. Define Abilities (Functions)
function openMenu() {
    mobileMenu.className = 'menu open';
}

function closeMenu() {
    mobileMenu.className = 'menu';
}



// 3. Wire everything up
openButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);
