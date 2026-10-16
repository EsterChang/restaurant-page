export function init() {
    const RESTAURANT_IMAGE_URL = "https://images.unsplash.com/photo-1772119044027-04e80adeda6b?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";

    const content = document.getElementById('content');

    const home = document.createElement("div");
    home.setAttribute("class", "home");
    content.appendChild(home);

    const title = document.createElement("h2");
    title.textContent = "Ester's Restaurant";

    const info = document.createElement("p");
    info.textContent = "Founded in 1998, Ester's Restaurant serves simple cuisine.";

    const image = document.createElement('img');
    image.src = RESTAURANT_IMAGE_URL;

    home.appendChild(title);
    home.appendChild(info);
    home.appendChild(image);
}
