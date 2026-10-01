import { cards } from "../assets/memory-cards.js";
import { createMainPage } from "./main-page.js";
import { generationCards } from "./utils/generation-cards.js";
import { shuffleCards } from "./utils/shuffle-cards.js";

const newCards = generationCards(cards);
shuffleCards(newCards);

createMainPage(newCards);
