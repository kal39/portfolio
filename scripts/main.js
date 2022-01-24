const openMenu = document.querySelector(".open-menu-button");
const closeMenu = document.querySelector(".close-menu-button");
const navBar = document.querySelector(".navigation-bar");
const sectionCards = document.querySelectorAll(".section-card"); 
const navBarItems = document.querySelectorAll(".navigation-bar-item"); 

const surfaceColor = getComputedStyle(document.documentElement).getPropertyValue("--surface-color");
const surfaceColorHighlighted = getComputedStyle(document.documentElement).getPropertyValue("--surface-color-highlighted");
const primaryColor = getComputedStyle(document.documentElement).getPropertyValue("--primary-color");
const primaryColorHighlighted = getComputedStyle(document.documentElement).getPropertyValue("--primary-color-highlighted");


openMenu.addEventListener("click", () => {
	navBar.style.display = "flex";
});

closeMenu.addEventListener("click", () => {
	navBar.style.display = "none";
});

sectionCards.forEach(element => {
	element.addEventListener("mouseenter", () => {
		element.style.backgroundColor = surfaceColorHighlighted;
		element.style.transform = "scale(1.1)";
	});
});

sectionCards.forEach(element => {
	element.addEventListener("mouseleave", () => {
		element.style.backgroundColor = surfaceColor;
		element.style.transform = "scale(1)";
	});
});

navBarItems.forEach(element => {
	element.addEventListener("mouseenter", () => {
		element.style.backgroundColor = primaryColorHighlighted;
	});
});

navBarItems.forEach(element => {
	element.addEventListener("mouseleave", () => {
		element.style.backgroundColor = primaryColor;
	});
});