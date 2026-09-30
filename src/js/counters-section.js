const movesCount = 0;
const pairsFound = 0;

function createCountersSection() {
  const countersSection = document.createElement("section");
  countersSection.className = "counters";

  const numberOfMoves = document.createElement("div");
  numberOfMoves.className = "counter";

  const numberOfMovesTitle = document.createElement("p");
  numberOfMovesTitle.textContent = "Число ходов";

  const numberOfMovesCount = document.createElement("p");
  numberOfMovesCount.textContent = movesCount;

  numberOfMoves.append(numberOfMovesTitle, numberOfMovesCount);

  const numberOfPairs = document.createElement("div");
  numberOfPairs.className = "counter";

  const numberOfPairsTitle = document.createElement("p");
  numberOfPairsTitle.textContent = "Найдено пар";

  const numberOfPairsCount = document.createElement("p");
  numberOfPairsCount.textContent = pairsFound;

  numberOfPairs.append(numberOfPairsTitle, numberOfPairsCount);

  countersSection.append(numberOfMoves, numberOfPairs);

  return countersSection;
}
export { createCountersSection };
