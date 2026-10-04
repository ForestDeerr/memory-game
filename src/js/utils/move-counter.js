import { numberOfMovesCount } from "../counters-section.js";

let quantityMoves = 0;

function resetQuantityMoves() {
  quantityMoves = 0;
}

function moveCounter() {
  quantityMoves += 1;
  numberOfMovesCount.textContent = quantityMoves;
}

export { moveCounter, quantityMoves, resetQuantityMoves };
