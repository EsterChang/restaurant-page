export function init() {
    const content = document.getElementById('content');

    const home = document.createElement("div");
    home.setAttribute("class", "home");
    content.appendChild(home);

    const title = document.createElement("div");
    title.setAttribute("class", "title");
    title.textContent = "Ester's Restaurant";

    home.appendChild(title);
}
