const goToTopButton = document.querySelector(".go-to-top-button");

goToTopButton.addEventListener("click", () => {
	document.body.scrollTop = 0; // for safari
	document.documentElement.scrollTop = 0; // for others
});