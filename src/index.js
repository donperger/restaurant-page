import createContent from "./contentCreator"
import loadMenu from "./menuModule";
import loadContact from "./contactModule";
import "./contact.css";
import "./home.css";
import "./menu.css";

const contentDiv = document.getElementById("content");

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const contactBtn = document.getElementById("contact-btn");

homeBtn.addEventListener("click", navigateToHome);
menuBtn.addEventListener("click", navigateToMenu);
contactBtn.addEventListener("click", navigateToContact);

createContent();

function navigateToHome() {
    contentDiv.textContent = "";
    createContent();
}

function navigateToMenu() {
    contentDiv.innerText = "";
    loadMenu();
}

function navigateToContact() {
    contentDiv.innerText = "";
    loadContact();
}