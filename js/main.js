let burgerMenu = document.getElementById('burger-menu')
let burgerMenuClose = document.getElementById('burger-menu-close')
let navBlock = document.querySelector('.nav-block')
let navBarLink = document.querySelectorAll('.nav-bar-link')

burgerMenu.onclick = function() {
    burgerMenu.classList.remove('active')
    burgerMenuClose.classList.add('active')
    navBlock.classList.add('active')
};

burgerMenuClose.onclick = function() {
    burgerMenu.classList.add('active')
    burgerMenuClose.classList.remove('active')
    navBlock.classList.remove('active')
};

navBarLink.forEach((item) => {
    item.onclick = () => {
        burgerMenu.classList.add('active')
        burgerMenuClose.classList.remove('active')
        navBlock.classList.remove('active')
    }
})
