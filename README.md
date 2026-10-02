Memory Game
📌 About the project

Memory Game is a browser-based card matching game developed as part of the RS School JavaScript / Front-end course.

The goal of the game is to find all matching pairs of cards using the minimum possible number of moves.

The application is implemented using HTML, CSS and JavaScript without JavaScript frameworks or libraries.

🎮 Game functionality
The game starts automatically when the page is loaded.
The game board contains 16 cards — 8 matching pairs.
Cards are randomly shuffled at the beginning of each game.
All cards initially appear face down.
A player can open two cards during one move.
If the cards match, they remain open.
If the cards do not match, they remain visible for approximately one second and then are automatically closed.
While unmatched cards are being displayed, other cards cannot be opened.
The number of moves and found pairs is displayed during the game.
When all 8 pairs are found, a victory modal window is displayed.
The victory window shows the final number of moves.
The player can start a new game without reloading the page.
The Leaderboard contains completed games sorted by the number of moves.
Leaderboard results are stored in localStorage and remain available after page reload.
The leaderboard displays the player's place, number of moves and game date.
If there are no saved results, the leaderboard displays a corresponding message.
🛠 Technologies
HTML5
CSS3
JavaScript (ES6+)
DOM API
LocalStorage

The application is divided into modules responsible for game logic, card generation, shuffling, counters, modal windows, leaderboard and local storage.

🚀 Getting started

Clone the repository:

git clone https://github.com/ForestDeerr/memory-game.git

Go to the project directory:

cd memory-game

Install dependencies:

npm install

Start the development server:

npm run dev

Open the application in your browser using the address provided by Vite.

🌐 Deploy

Open the deployed application

👨‍💻 Author

Yegor Gerasimchik

GitHub: ForestDeerr
🎓 Course

This project was created as part of the RS School JavaScript / Front-end course.

RS School
