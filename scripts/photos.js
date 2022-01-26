const photos = document.querySelectorAll(".photo"); 
const bgShade = document.querySelector(".background-shade");
const closeButton = document.querySelector(".close-button");

openPhoto = null;
photos.forEach(element => {
	element.addEventListener("click", () => {
		openPhoto = element;

		zoom = Math.min(innerWidth / openPhoto.naturalWidth, innerHeight / openPhoto.naturalHeight) * 0.9

		openPhoto.style.position= "fixed";
		openPhoto.style.zIndex= "4";
		openPhoto.style.width= (openPhoto.naturalWidth * zoom) + "px";
		openPhoto.style.top= "50%";
		openPhoto.style.left= "50%";
		openPhoto.style.transform = "translate(-50%, -50%)";
		openPhoto.style.cursor = "default";

		bgShade.style.display = "block";
		closeButton.style.display = "block";
	});
});

closeButton.addEventListener("click", () => {
	openPhoto.style.all = "initial"
	openPhoto.style.marginTop = "min(max(5%, 1rem), 2rem)";
	openPhoto.style.borderRadius = "1rem";
	openPhoto.style.width = "100%";
	openPhoto.style.cursor = "pointer";

	bgShade.style.display = "none";
	closeButton.style.display = "none";
});