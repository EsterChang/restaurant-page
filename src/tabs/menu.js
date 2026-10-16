export function init() {
    const PIZZA_IMAGE_URL = "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=962&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
    const TACOS_IMAGE_URL = "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

    const content = document.getElementById('content');

    const menu = document.createElement("div");
    menu.setAttribute("class", "menu");
    content.appendChild(menu);

    const pizza = document.createElement("div");
    pizza.setAttribute("class", "menu-item");
    pizza.textContent = '12" Pizza - $20';

    const pizza_img = document.createElement("img");
    pizza_img.src = PIZZA_IMAGE_URL;

    const tacos = document.createElement("div");
    tacos.setAttribute("class", "menu-item");
    tacos.textContent = "Tacos - 3 for $10";

    const tacos_img = document.createElement("img");
    tacos_img.src = TACOS_IMAGE_URL;

    menu.appendChild(pizza);
    menu.appendChild(pizza_img);
    menu.appendChild(tacos);
    menu.appendChild(tacos_img);
}