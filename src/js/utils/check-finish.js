import { cards } from "../../assets/memory-cards.js";
import { createModal } from "../modal-windows/modal-windows.js";
import { winnerContent } from "../modal-windows/winner-content.js";

const QUANTITY_CARDS = Object.keys(cards).length;

function checkFinishGame(flippedCardsCount) {
  if (flippedCardsCount === QUANTITY_CARDS * 2) {
    endGame();
  }
}

function endGame() {
  let modal;
  const content = winnerContent(() => modal.close());
  modal = createModal("Winners", content);
}

export { checkFinishGame };
