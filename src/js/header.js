function createHeader() {
  const header = document.createElement("header");

  const newGameBtn = document.createElement("button");
  newGameBtn.textContent = "Новая Игра";

  const leaderBoardBtn = document.createElement("button");
  leaderBoardBtn.textContent = "Таблица лидеров";

  header.append(newGameBtn, leaderBoardBtn);

  return header;
}

export { createHeader };
