// script.js - small interactions for the portfolio

// 1. Get the elements we need from the page
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
const links = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("main section[id]");

// 2. Open and close the mobile menu
function setMenu(isOpen) {
  navLinks.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
}

navToggle.addEventListener("click", function () {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  setMenu(!isOpen);
});

// Close the menu after choosing a link
links.forEach(function (link) {
  link.addEventListener("click", function () {
    setMenu(false);
  });
});

// Close the menu with the Escape key and return focus to the button
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
    setMenu(false);
    navToggle.focus();
  }
});

// 3. Highlight the nav link of the section currently on screen
function highlightLink() {
  let currentId = "home";
  const checkLine = window.scrollY + 120; // a little below the fixed header

  sections.forEach(function (section) {
    if (section.offsetTop <= checkLine) {
      currentId = section.id;
    }
  });

  // At the very bottom of the page, highlight the last section
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
    currentId = sections[sections.length - 1].id;
  }

  links.forEach(function (link) {
    link.classList.toggle("active", link.getAttribute("href") === "#" + currentId);
  });
}

window.addEventListener("scroll", highlightLink);
highlightLink();

// 4. Show the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();
