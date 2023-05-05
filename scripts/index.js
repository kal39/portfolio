const sectionCards = document.querySelectorAll(".section-card");

sectionCards.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    element.style.transform = "scale(1.1)";
  });
});

sectionCards.forEach((element) => {
  element.addEventListener("mouseleave", () => {
    element.style.transform = "scale(1)";
  });
});
