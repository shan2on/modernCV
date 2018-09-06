//call DOM items
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menuBtn");
const menuNav = document.querySelector(".menuNav");
const menuBrand = document.querySelector(".menuBrand");

//create Array of objects renamed to plural containing all
const navItems = document.querySelectorAll("navItem");

//show initial state of menu
let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);

//function
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBrand.classList.add("show");

    //forEachLoop for Transition\
    navItems.forEach(item => item.classList.add("show"));
    //Menu State reset Loop
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBrand.classList.remove("show");
    //Menu State reset Loop
    showMenu = false;
  }
}
