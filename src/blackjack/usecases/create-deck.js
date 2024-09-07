/**
 * Create a new shuffle deck
 * @returns {array<string>} Example: ['2D', 'JS', AH']
 */

export const createDeck = () => {
  let deck = [];

  const suits = ["C", "H", "D", "S"];
  const specials = ["J", "K", "Q", "A"];

  for (let i = 2; i <= 10; i++) {
    for (const suit of suits) {
      deck.push(i + suit);
    }
  }

  for (const special of specials) {
    for (const suit of suits) {
      deck.push(special + suit);
    }
  }

  deck.sort(() => Math.random() - 0.5);

  return deck;
};
