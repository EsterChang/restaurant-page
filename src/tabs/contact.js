export function init() {
    const content = document.getElementById('content');

    const contact = document.createElement("div");
    contact.setAttribute("class", "contact");
    content.appendChild(contact);

    const email = document.createElement("div");
    email.setAttribute("class", "email");
    email.textContent = "Contact us by email at ester@email.com";

    contact.appendChild(email);
}
