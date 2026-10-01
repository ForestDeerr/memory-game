import { backFaceCard } from "../assets/memory-cards.js";
import { flipCard } from "./utils/flip-cards.js";

const cardElements = [];

function createGridSection(cards) {
  const gridSection = document.createElement("section");
  gridSection.className = "grid-section";

  cards.forEach((element) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.framework = element.name;

    const frontFace = document.createElement("img");
    frontFace.className = "front-face";
    frontFace.src = element.image;
    frontFace.alt = element.name;

    const backFace = document.createElement("img");
    backFace.className = "back-face";
    backFace.src = backFaceCard;

    card.append(frontFace, backFace);
    gridSection.append(card);
    cardElements.push(card);
  });

  addCardEventListeners(cardElements);

  return gridSection;
}

function addCardEventListeners(cardElements) {
  cardElements.forEach((card) => card.addEventListener("click", flipCard));
}

export { createGridSection };
