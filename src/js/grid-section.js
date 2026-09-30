import { cards } from "../assets/memory-cards.js";

function createGridSection() {
  const gridSection = document.createElement("section");
  gridSection.className = "grid-section";

  for (let i = 1; i <= 2; i++) {
    Object.entries(cards).forEach(([name, image]) => {
      const card = document.createElement("div");
      card.className = "card";

      const img = document.createElement("img");
      img.className = "front-face";
      img.src = image;
      img.alt = name;

      card.append(img);
      gridSection.append(card);
    });
  }
  return gridSection;
}

export { createGridSection };
