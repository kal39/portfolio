const openMenu = document.querySelector(".open-menu-button");
const closeMenu = document.querySelector(".close-menu-button");
const navBar = document.querySelector(".navigation-bar");

openMenu.addEventListener("click", () => {
  navBar.style.display = "flex";
});

closeMenu.addEventListener("click", () => {
  navBar.style.display = "none";
});
