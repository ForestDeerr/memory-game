function shuffleCards(cards) {
  const QUANTITY_CARDS = cards.length;
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * QUANTITY_CARDS);
    card.style.order = randomPos;
  });
}

export { shuffleCards };
