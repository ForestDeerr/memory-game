import { createCountersSection } from "./counters-section.js";

function createGameSection() {
  const gameSection = document.createElement("section");
  gameSection.className = "game-section";

  gameSection.append(createCountersSection());

  return gameSection;
}
export { createGameSection };
