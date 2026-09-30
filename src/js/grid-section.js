import { cards } from "../assets/memory-cards.js";
import { shuffleCards } from "./utils/shuffle-cards.js";

const cardElements = [];

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
      cardElements.push(card);
    });
  }

  shuffleCards(cardElements);

  gridSection.append(...cardElements);
  return gridSection;
}

export { createGridSection };
