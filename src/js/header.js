import { resetSettingGame } from "./utils/reset-setting-game.js";

function createHeader() {
  const header = document.createElement("header");

  const newGameBtn = document.createElement("button");
  newGameBtn.textContent = "Новая Игра";

  newGameBtn.addEventListener("click", resetSettingGame);

  const leaderBoardBtn = document.createElement("button");
  leaderBoardBtn.textContent = "Таблица лидеров";

  header.append(newGameBtn, leaderBoardBtn);

  return header;
}

export { createHeader };
