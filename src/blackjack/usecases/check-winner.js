/**
 * Check which player is the winner
 * @param {array<number>} playersPoints Example: [0,0]
 */

export const checkWinner = (playersPoints) => {
  if (playersPoints[0] === playersPoints[1]) {
    console.warn("Ambos jugadores tienen la misma puntuación");
  } else if (playersPoints[1] > 21) {
    console.warn("Jugador gana");
  } else {
    console.warn("Computadora gana");
  }
};
