let hamburger = document.querySelector('.hamburger');
let menuContent = document.querySelector('.nav-list');
hamburger.addEventListener('click',()=>{
    menuContent.classList.toggle('toggle');
    hamburger.classList.toggle('ham-toggle');
})