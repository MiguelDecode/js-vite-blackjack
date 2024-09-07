import { checkWinner, createDeck, drawCard, getCard, getCardValue } from "./usecases/";

const game = (() => {
  "use strict";

  // VARIABLES
  let deck = [];
  let playersPoints = [];

  // HTML REFERENCES
  const newGameBtn = document.getElementById("new-game");
  const getCardBtn = document.getElementById("get-card");
  const stopGameBtn = document.getElementById("stop-game");
  const pointsDisplay = document.querySelectorAll("small");
  const cardsContainers = document.querySelectorAll(".cards-container");

  const initGame = (players = 1) => {
    console.clear();
    deck = createDeck();

    playersPoints = [0, 0];

    pointsDisplay.forEach((display) => (display.textContent = 0));
    cardsContainers.forEach((container) => (container.innerHTML = ""));

    getCardBtn.disabled = false;
    stopGameBtn.disabled = false;
  };

  const playerTurn = (turn) => {
    const card = getCard(deck);
    playersPoints[turn] = playersPoints[turn] + getCardValue(card);
    pointsDisplay[turn].textContent = playersPoints[turn];
    drawCard(card, cardsContainers[turn]);
  };

  const computerPlay = () => {
    do {
      playerTurn(playersPoints.length - 1);
    } while (playersPoints[1] <= playersPoints[0]);

    checkWinner(playersPoints);
  };

  // EVENT LISTENERS
  getCardBtn.addEventListener("click", () => {
    playerTurn(0);

    if (playersPoints[0] > 21) {
      getCardBtn.disabled = true;
      stopGameBtn.disabled = true;
      console.warn("Computadora gana, has superado los 21 puntos");
    } else if (playersPoints[0] === 21) {
      getCardBtn.disabled = true;
      stopGameBtn.disabled = true;
      computerPlay();
    }
  });

  stopGameBtn.addEventListener("click", () => {
    getCardBtn.disabled = true;
    stopGameBtn.disabled = true;
    computerPlay();
  });

  newGameBtn.addEventListener("click", initGame);

  return {
    newGame: initGame,
  };
})();
