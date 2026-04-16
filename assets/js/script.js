document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const menuIcon = document.querySelector(".menu-toggle i");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");

      if (menuIcon) {
        menuIcon.classList.toggle("bx-menu");
        menuIcon.classList.toggle("bx-x");
      }
    });

    const navItems = navLinks.querySelectorAll("a");
    navItems.forEach((item) => {
      item.addEventListener("click", function () {
        navLinks.classList.remove("active");
        if (menuIcon) {
          menuIcon.classList.add("bx-menu");
          menuIcon.classList.remove("bx-x");
        }
      });
    });
  }
});