import createContent from "./contentCreator";

const contentDiv = document.getElementById("content");

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const contactBtn = document.getElementById("contact-btn");

homeBtn.addEventListener("click", navigateToHome);
menuBtn.addEventListener("click", () => console.log("menu button"));
contactBtn.addEventListener("click", () => console.log("contact button"));

createContent();

function navigateToHome() {
    contentDiv.textContent = "";
    createContent();
}