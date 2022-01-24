const openMenu = document.querySelector(".open-menu-button");
const closeMenu = document.querySelector(".close-menu-button");
const navBar = document.querySelector(".navigation-bar");
const sectionCards = document.querySelectorAll(".section-card"); 
const navBarItems = document.querySelectorAll(".navigation-bar-item"); 
const themeSwitchContainer = document.querySelector(".theme-switch-container");
const themeSwitchSlider = document.querySelector(".theme-switch-slider");

function surfaceColor() {
	return getComputedStyle(document.documentElement).getPropertyValue("--surface-color");
}
function surfaceColorHighlighted() {
	return getComputedStyle(document.documentElement).getPropertyValue("--surface-color-highlighted");
}
function primaryColor() {
	return getComputedStyle(document.documentElement).getPropertyValue("--primary-color");
}
function primaryColorHighlighted() {
	return getComputedStyle(document.documentElement).getPropertyValue("--primary-color-highlighted");
}

openMenu.addEventListener("click", () => {
	navBar.style.display = "flex";
});

closeMenu.addEventListener("click", () => {
	navBar.style.display = "none";
});

sectionCards.forEach(element => {
	element.addEventListener("mouseenter", () => {
		element.style.backgroundColor = surfaceColorHighlighted();
		element.style.transform = "scale(1.1)";
	});
});

sectionCards.forEach(element => {
	element.addEventListener("mouseleave", () => {
		element.style.backgroundColor = surfaceColor();
		element.style.transform = "scale(1)";
	});
});

navBarItems.forEach(element => {
	element.addEventListener("mouseenter", () => {
		element.style.backgroundColor = primaryColorHighlighted();
	});
});

navBarItems.forEach(element => {
	element.addEventListener("mouseleave", () => {
		element.style.backgroundColor = primaryColor();
	});
});

darkModeOn = true;
themeSwitchContainer.addEventListener("click", () => {
	darkModeOn = !darkModeOn;
	themeSwitchSlider.style.transform = darkModeOn ? "translateX(2rem)" : "translateX(0rem)";
	document.documentElement.className = darkModeOn ? "dark" : "light";

	sectionCards.forEach(element => {
		element.style.backgroundColor = surfaceColor();
	});

	navBarItems.forEach(element => {
		element.style.backgroundColor = primaryColor();
	});
});