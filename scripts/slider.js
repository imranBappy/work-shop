'use strict';
(function () {
  const mobileMenu = document.getElementById("mobile-nav");
  document.getElementById("menu-btn").addEventListener("click", () => {
    if (!mobileMenu.style.display || mobileMenu.style.display == "none") {
      mobileMenu.style.display = "block";
    } else if (mobileMenu.style.display === "block") {
      mobileMenu.style.display = "none";
    }
  })
})()