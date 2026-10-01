const leaders = [
  {
    place: 1,
    moves: 8,
    date: "29.09.2026",
  },
  {
    place: 2,
    moves: 8,
    date: "30.09.2026",
  },
  {
    place: 3,
    moves: 10,
    date: "27.09.2026",
  },
  {
    place: 4,
    moves: 12,
    date: "01.10.2026",
  },
  {
    place: 5,
    moves: 15,
    date: "28.09.2026",
  },
];

function createLeadersTable() {
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
