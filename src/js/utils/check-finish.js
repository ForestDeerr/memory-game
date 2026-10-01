import { cards } from "../../assets/memory-cards.js";

const QUANTITY_CARDS = Object.keys(cards).length;

function checkFinishGame(flippedCardsCount) {
  if (flippedCardsCount === QUANTITY_CARDS * 2) {
    endGame();
  }
}

function endGame() {
  alert("Dct");
}

export { checkFinishGame };
