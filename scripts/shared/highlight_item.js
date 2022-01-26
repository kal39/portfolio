const highlightItems = document.querySelectorAll(".highlight-item"); 

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

function primaryColor() {
	return getComputedStyle(document.documentElement).getPropertyValue("--primary-color");
}

function primaryColorHighlighted() {
	return getComputedStyle(document.documentElement).getPropertyValue("--primary-color-highlighted");
}