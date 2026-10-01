import { quantityMoves } from "../utils/move-counter.js";
import { resetSettingGame } from "../utils/reset-setting-game.js";

function winnerContent(closeModal) {
  const content = document.createElement("section");
  content.className = "winner-content-section";

  const title = document.createElement("div");
  title.className = "title-winners";

  const titleText = document.createElement("p");
  titleText.textContent = "Вы сделали ходов:";

  const countSteps = document.createElement("p");
  countSteps.textContent = quantityMoves;

  title.append(titleText, countSteps);

  const newGame = document.createElement("button");
  newGame.className = "modal-close";
  newGame.textContent = "Новая игра";

  newGame.addEventListener("click", () => {
    resetSettingGame();
    closeModal();
  });

  content.append(title, newGame);

  return content;
}

export { winnerContent };
