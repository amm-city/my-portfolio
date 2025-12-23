import { loadFrameworks } from "/fetch-json-data/framework.js";
import { loadCertificates } from "/fetch-json-data/certi.js";
import { loadLanguages } from "/fetch-json-data/languages.js";
import { loadProjects } from "/fetch-json-data/project.js";

document.addEventListener("DOMContentLoaded", function () {
  loadCertificates();
  loadFrameworks();
  loadLanguages();
  loadProjects();
});

//Navbar open and close
const navMenu = document.querySelector(".nav-menu");

function openMenu() {
    navMenu.style.right = 0;
}
function closeMenu() {
    navMenu.style.right = "-100%";
}
window.openMenu = openMenu;
window.closeMenu = closeMenu;

//Scroll Spy
const navlinks = document.querySelectorAll(".nav-menu .nav-item .nav-link");
const sections = document.querySelectorAll("section");

function scrollSpy() {
    const currentScrollPosition = window.scrollY + 59;

    navlinks.forEach(link => {
        link.classList.remove("active");
    });

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = section.offsetTop + section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if(currentScrollPosition >= sectionTop && currentScrollPosition < sectionBottom) {
            const matchedLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if(matchedLink) {
                matchedLink.classList.add("active");
            }
        }
    });
}
document.addEventListener("scroll", scrollSpy);
window.addEventListener("load", scrollSpy);