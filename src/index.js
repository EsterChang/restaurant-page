import {init as initHome} from "../src/tabs/home.js";
import {init as initMenu} from "../src/tabs/menu.js";
import {init as initContact} from "../src/tabs/contact.js";
import './style.css';

const content = document.getElementById('content');

const homeTab = document.querySelector(".home-button");
const menuTab = document.querySelector(".menu-button");
const contactTab = document.querySelector(".contact-button");

initHome();

homeTab.addEventListener("click", () => {
    reset();
    initHome();
})
menuTab.addEventListener("click", () => {
    reset();
    initMenu();
})
contactTab.addEventListener("click", () => {
    reset();
    initContact();
})


function reset() {
    content.textContent = "";
}