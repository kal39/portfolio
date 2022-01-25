const sectionCards = document.querySelectorAll(".section-card");
const highlightItems = document.querySelectorAll(".highlight-item"); 

function primaryColor() {
	return getComputedStyle(document.documentElement).getPropertyValue("--primary-color");
}

function primaryColorHighlighted() {
	return getComputedStyle(document.documentElement).getPropertyValue("--primary-color-highlighted");
}

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