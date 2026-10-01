import { createGameSection } from "./game-section.js";
import { createGridSection } from "./grid-section.js";
import { createHeader } from "./header.js";

function createMainPage(cards) {
  document.body.append(
    createHeader(),
    createGameSection(),
    createGridSection(cards),
  );
}

export { createMainPage };
