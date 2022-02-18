const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(element => {
	element.addEventListener("mouseenter", () => {
		element.style.transform = "scale(1.05)";
	});
});

projectCards.forEach(element => {
	element.addEventListener("mouseleave", () => {
		element.style.transform = "scale(1)";
	});
});