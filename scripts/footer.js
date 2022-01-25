const goToTopButton = document.querySelector(".go-to-top-button");
const highlightItems = document.querySelectorAll(".highlight-item"); 

function primaryColor() {
	return getComputedStyle(document.documentElement).getPropertyValue("--primary-color");
}
function primaryColorHighlighted() {
	return getComputedStyle(document.documentElement).getPropertyValue("--primary-color-highlighted");
}

goToTopButton.addEventListener("click", () => {
	document.body.scrollTop = 0; // for safari
	document.documentElement.scrollTop = 0; // for others
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