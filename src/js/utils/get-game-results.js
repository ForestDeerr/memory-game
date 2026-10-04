import { LEADERS_KEY } from "./save-game-result.js";

function getGameResults() {
  return JSON.parse(localStorage.getItem(LEADERS_KEY) || "[]");
}

export { getGameResults };
