import { numberOfPairsCount } from "../counters-section.js";
import { moveCounter } from "./move-counter.js";

let hasFlippedCard = false;
let firstCard, secondCard;
let isLockBoard = false;
let flippedCardsCount = 0;

function flipCard() {
  if (isLockBoard === true) return;
  if (this === firstCard) return;

  this.classList.add("flip");
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
  } else {
    secondCard = this;
    hasFlippedCard = false;
    moveCounter();
    checkFlipCards();
    // checkFinishGame();
  }
}

function checkFlipCards() {
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    flippedCardsCount = flippedCardsCount + 1;
    numberOfPairsCount.textContent = flippedCardsCount;
  } else {
    isLockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      isLockBoard = false;
      firstCard = null;
    }, 1000);
  }
}

export { flipCard };
