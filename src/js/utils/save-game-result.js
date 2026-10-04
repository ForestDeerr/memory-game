import { getGameResults } from "./get-game-results.js";

const LEADERS_KEY = "memory-game-leaders";

function saveGameResult(moves) {
  const results = getGameResults();

  results.push({
    moves,
    date: new Date().toISOString().split("T")[0],
  });

  results.sort((a, b) => {
    if (a.moves !== b.moves) {
      return a.moves - b.moves;
    }

    return a.date.localeCompare(b.date);
  });

  localStorage.setItem(LEADERS_KEY, JSON.stringify(results.slice(0, 10)));
}

export { saveGameResult, LEADERS_KEY };
