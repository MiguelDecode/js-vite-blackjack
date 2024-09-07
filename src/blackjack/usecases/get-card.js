export const getCard = (deck) => {
  if (deck.length === 0) {
    throw new Error("No hay cartas en la baraja.");
  }
  return deck.pop();
};
