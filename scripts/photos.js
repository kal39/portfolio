const photos = document.querySelectorAll(".photo");
const bgShade = document.querySelector(".background-shade");
const closeButton = document.querySelector(".close-button");

function getElementProperties(element) {
  var style = [];
  var o = getComputedStyle(element);
  for (var i = 0; i < o.length; i++) {
    style.push([o[i], o.getPropertyValue(o[i])]);
  }
  return style;
}

function setElementProperties(element, style) {
  for (var i = 0; i < style.length; i++) {
    element.style.setProperty(style[i][0], style[i][1]);
  }
}

var openPhoto = null;
var openPhotoProperties = null;

photos.forEach((element) => {
  element.addEventListener("click", () => {
    // idk why I need to do this
    if (openPhoto != null) {
      setElementProperties(openPhoto, openPhotoProperties);
      openPhoto.style.width = "100%";
      openPhoto.style.height = "100%";
    }

    openPhoto = element;
    openPhotoProperties = getElementProperties(openPhoto);

    zoom =
      Math.min(
        innerWidth / openPhoto.naturalWidth,
        innerHeight / openPhoto.naturalHeight
      ) * 0.9;

    openPhoto.style.position = "fixed";
    openPhoto.style.zIndex = "4";
    openPhoto.style.width = openPhoto.naturalWidth * zoom + "px";
    openPhoto.style.height = openPhoto.naturalHeight * zoom + "px";
    openPhoto.style.top = "50%";
    openPhoto.style.left = "50%";
    openPhoto.style.transform = "translate(-50%, -55%)";
    openPhoto.style.cursor = "default";

    bgShade.style.display = "block";
    closeButton.style.display = "block";
  });
});

closeButton.addEventListener("click", () => {
  setElementProperties(openPhoto, openPhotoProperties);
  // to support phone rotations
  openPhoto.style.width = "100%";
  openPhoto.style.height = "100%";

  bgShade.style.display = "none";
  closeButton.style.display = "none";
});
