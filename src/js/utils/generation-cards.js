function generationCards(cards) {
  const cardsPairs = Object.entries(cards).flatMap(([name, image]) => [
    { name, image },
    { name, image },
  ]);

  return cardsPairs;
}

export { generationCards };
