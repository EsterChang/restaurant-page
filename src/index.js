import {init as initHome} from "../src/tabs/home.js";
import {init as initMenu} from "../src/tabs/menu.js";
import {init as initContact} from "../src/tabs/contact.js";

const homeTab = document.querySelector(".home-button");
const menuTab = document.querySelector(".menu-button");
const contactTab = document.querySelector(".contact-button");

homeTab.addEventListener("click", () => {
    initHome();
})
menuTab.addEventListener("click", () => {
    initMenu();
})
contactTab.addEventListener("click", () => {
    initContact();
})
