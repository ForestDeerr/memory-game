let hasFlippedCard = false;
let firstCard, secondCard;
let isLockBoard = false;
let quantityMoves = 0;
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
    // moveCounter();
    checkFlipCards();
    // checkFinishGame();
  }
}

function checkFlipCards() {
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    flippedCardsCount = flippedCardsCount + 2;
    setTimeout(() => {
      FlippedCardSongTrue.play();
    }, 500);
  } else {
    isLockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      isLockBoard = false;
      firstCard = null;
      FlippedCardSongFalse.play();
    }, 1000);
  }
}

export { flipCard };
