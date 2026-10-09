// script.js - Portfolio Dynamic Interactions

document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");
  const links = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("main section[id]");

  function setMenuState(isOpen) {
    navLinks.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  }

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      setMenuState(!isOpen);
    });
  }

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      setMenuState(false);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && navToggle && navToggle.getAttribute("aria-expanded") === "true") {
      setMenuState(false);
      navToggle.focus();
    }
  });

  function highlightActiveNavLink() {
    let currentSectionId = "home";
    const scrollPosition = window.scrollY + 140;

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop;
      if (sectionTop <= scrollPosition) {
        currentSectionId = section.id;
      }
    });

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 5) {
      currentSectionId = sections[sections.length - 1].id;
    }

    links.forEach(function (link) {
      const href = link.getAttribute("href");
      if (href === "#" + currentSectionId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", highlightActiveNavLink);
  highlightActiveNavLink();

  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});