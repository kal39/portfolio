const openMenu = document.querySelector(".open-menu-button");
const closeMenu = document.querySelector(".close-menu-button");
const navBar = document.querySelector(".navigation-bar");
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