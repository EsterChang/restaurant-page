export function init() {
    const content = document.getElementById('content');

    const menu = document.createElement("div");
    menu.setAttribute("class", "menu");
    content.appendChild(menu);

    const pizza = document.createElement("div");
    pizza.setAttribute("class", "menu-item");
    pizza.textContent = "Pizza";

    const tacos = document.createElement("div");
    tacos.setAttribute("class", "menu-item");
    tacos.textContent = "Tacos";

    menu.appendChild(pizza);
    menu.appendChild(tacos);
}