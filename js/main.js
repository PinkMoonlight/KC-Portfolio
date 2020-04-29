//*****NAVIGATION TOGGLE FOR PHONE MENU*****//

//HAMBURGER MENU CLICK 

// 1. Get DOM elements
// 2. Write handle event function
// 3. Set up event listeners

let menu = document.querySelector("navigation__icon");
let closeButton = document.querySelector("phone-nav__close_icon");
let phoneNav = document.querySelector("phone-nav");

let menuToggle = (e) => {
    //let menuOpen = false;

    console.log(e.target);
    if(e.target === menu) {
        phoneNav.toggleAttribute(".menu-open");
        menu.toggleAttribute(".invisible");
    } else if(e.target === closeButton) {
        phoneNav.toggleAttribute(".menu-open");
        menu.toggleAttribute(".invisible");
    }
};

menu.addEventListener("onClick", menuToggle);
closeButton.addEventListener("onClick", menuToggle);

