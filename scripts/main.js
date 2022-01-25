const openMenu = document.querySelector(".open-menu-button");
const closeMenu = document.querySelector(".close-menu-button");
const navBar = document.querySelector(".navigation-bar");
const sectionCards = document.querySelectorAll(".section-card"); 
const themeSwitchContainer = document.querySelector(".theme-switch-container");
const themeSwitchSlider = document.querySelector(".theme-switch-slider");
const highlightItems = document.querySelectorAll(".highlight-item"); 

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
		element.style.transform = "scale(1.1)";
	});
});

sectionCards.forEach(element => {
	element.addEventListener("mouseleave", () => {
		element.style.transform = "scale(1)";
	});
});

highlightItems.forEach(element => {
	element.addEventListener("mouseenter", () => {
		element.style.backgroundColor = primaryColorHighlighted();
	});
});

highlightItems.forEach(element => {
	element.addEventListener("mouseleave", () => {
		element.style.backgroundColor = primaryColor();
	});
});

darkModeOn = true;
themeSwitchContainer.addEventListener("click", () => {
	darkModeOn = !darkModeOn;
	themeSwitchSlider.style.transform = darkModeOn ? "translateX(2rem)" : "translateX(0rem)";
	document.documentElement.className = darkModeOn ? "dark" : "light";

	highlightItems.forEach(element => {
		element.style.backgroundColor = primaryColor();
	});
});