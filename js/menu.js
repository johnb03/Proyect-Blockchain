const navToogle = document.querySelector(".ham");
const navMenu = document.querySelector(".nav__menu");

navToogle.addEventListener("click", () => {
  navMenu.classList.toggle("nav__menu-visible");
  if (navMenu.classList.contains("nav__menu-visible")) {
    navToogle.setAttribute("aria-label", "Cerrar menu");
  } else {
    navToogle.setAttribute("aria-label", "Abrir Menu");
  }
});
