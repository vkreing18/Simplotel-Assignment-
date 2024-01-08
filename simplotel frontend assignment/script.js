document.addEventListener("DOMContentLoaded", function () {
    const menuHamburger = document.querySelector(".menu-hamburger");
    const navLinks = document.querySelector(".nav-links");
    const mobileMenuContainer = document.querySelector(".mobile-menu-container");
  
    menuHamburger.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-menu");
      mobileMenuContainer.style.display = mobileMenuContainer.style.display === "none" ? "flex" : "none";
    });
  
    window.addEventListener("resize", () => {
      if (window.innerWidth > 600) {
        navLinks.style.display = "flex";
        mobileMenuContainer.style.display = "none";
      } else {
        navLinks.style.display = navLinks.classList.contains("mobile-menu") ? "flex" : "none";
        mobileMenuContainer.style.display = "none";
      }
    });
  });
  