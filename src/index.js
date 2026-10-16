import {init as initHome} from "../src/tabs/home.js";
import {init as initMenu} from "../src/tabs/menu.js";
import {init as initContact} from "../src/tabs/contact.js";
import './style.css';

const content = document.getElementById('content');

const homeTab = document.querySelector('button[data-tab="home"]');
const menuTab = document.querySelector('button[data-tab="menu"]');
const contactTab = document.querySelector('button[data-tab="contact"]');
const tabs = document.querySelectorAll("button");

initHome();
homeTab.classList.add("active");

tabs.forEach(tab => {
    tab.addEventListener("click", (event) => {
        reset();
        tabs.forEach(tab => tab.classList.remove("active"));
        event.target.classList.add("active");

        if (event.target.dataset.tab == "home") {
            initHome();
        } else if (event.target.dataset.tab == "menu") {
            initMenu();
        } else if (event.target.dataset.tab == "contact") {
            initContact();
        }
    })
})


function reset() {
    content.textContent = "";
}