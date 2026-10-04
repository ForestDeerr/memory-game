import { numberOfMovesCount, numberOfPairsCount } from "../counters-section.js";
import {
  addCardEventListeners,
  cardElements,
  gridSection,
} from "../grid-section.js";
import { resetFlippedCardsCount } from "./flip-cards.js";
import { resetQuantityMoves } from "./move-counter.js";
import { shuffleCards } from "./shuffle-cards.js";

function resetSettingGame() {
  numberOfMovesCount.textContent = 0;
  numberOfPairsCount.textContent = 0;
  resetFlippedCardsCount();
  resetQuantityMoves();

  cardElements.forEach((element) => {
    element.classList.remove("flip");
  });

  const shuffledCards = [...cardElements].sort(() => Math.random() - 0.5);
  gridSection.replaceChildren(...shuffledCards);
  addCardEventListeners(cardElements);
}

export { resetSettingGame };
