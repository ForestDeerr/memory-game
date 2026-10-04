import { formatDate } from "../utils/format-date.js";
import { getGameResults } from "../utils/get-game-results.js";

function createLeadersTable() {
  const games = getGameResults();

  if (games.length === 0) {
    const message = document.createElement("p");
    message.textContent = "Записей нет";

    return message;
  }

  const leaders = games.map((game, index) => ({
    place: index + 1,
    moves: game.moves,
    date: formatDate(game.date),
  }));

  const table = document.createElement("table");
  table.className = "leaders-table";

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const placeHeader = document.createElement("th");
  placeHeader.textContent = "Место";

  const movesHeader = document.createElement("th");
  movesHeader.textContent = "Ходы";

  const dateHeader = document.createElement("th");
  dateHeader.textContent = "Дата";

  headerRow.append(placeHeader, movesHeader, dateHeader);
  thead.append(headerRow);

  const tbody = document.createElement("tbody");

  leaders.forEach((leader) => {
    const row = document.createElement("tr");

    const place = document.createElement("td");
    place.textContent = leader.place;

    const moves = document.createElement("td");
    moves.textContent = leader.moves;

    const date = document.createElement("td");
    date.textContent = leader.date;

    row.append(place, moves, date);
    tbody.append(row);
  });

  table.append(thead, tbody);

  return table;
}

export { createLeadersTable };
