import { createLeadersTable } from "./modal-windows/leaders-content.js";
import { createModal } from "./modal-windows/modal-windows.js";
import { resetSettingGame } from "./utils/reset-setting-game.js";

function createHeader() {
  const header = document.createElement("header");

  const newGameBtn = document.createElement("button");
  newGameBtn.textContent = "Новая Игра";
  newGameBtn.addEventListener("click", resetSettingGame);

  const leaderBoardBtn = document.createElement("button");
  leaderBoardBtn.textContent = "Таблица лидеров";

  leaderBoardBtn.addEventListener("click", () => {
    const leadersContent = createLeadersTable();

    createModal("Лидеры", leadersContent);
  });

  header.append(newGameBtn, leaderBoardBtn);

  return header;
}

export { createHeader };
