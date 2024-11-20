//  ==========================
//     Mobile Menu Dropdown
//  ==========================
const menuIcon = document.querySelector("[menuIcon]");
const menu = document.querySelector("[menu]");

menuIcon.addEventListener( "click", () => {
    menuIcon.classList.toggle("pressed");
    menu.classList.toggle("pressed");
});


//  ==========================
//   Background Slider Logic
//  ==========================
const body = document.querySelector("body");
const icon_container = document.querySelector("[iconContainer]");
const slider = document.querySelector("[slider]");

icon_container.addEventListener( "click", () => {
    if(slider.classList.contains("pressed")) { body.style.backgroundColor = "var(--black)";}
    else { body.style.backgroundColor = "var(--white)";}

    slider.classList.toggle("pressed"); 
});

