//*****NAVIGATION TOGGLE FOR PHONE MENU*****//

//HAMBURGER MENU CLICK 

// 1. Get DOM elements
// 2. Write handle event function
// 3. Set up event listeners

let menu = document.querySelector(".navigation__icon");
let closeButton = document.querySelector(".phone-nav__close_icon");
let phoneNav = document.querySelector(".phone-nav");
let menuLinks = document.querySelectorAll(".phone-nav__item");

let menuToggle = (e) => {
    //let menuOpen = false;
    console.log(e.target);

    phoneNav.classList.toggle("menu-open");
    menu.classList.toggle("navigation__invisible");
    //phoneNav.toggleAttribute(".menu-open");
    //menu.toggleAttribute(".invisible");
};

menu.addEventListener("click", menuToggle);
//menu.addEventListener("touchend", menuToggle);
closeButton.addEventListener("click", menuToggle);
//closeButton.addEventListener("touchend", menuToggle);
menuLinks.forEach(link => link.addEventListener('click', menuToggle));

