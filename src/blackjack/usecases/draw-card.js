/**
 * Draw a poker card inside a Div Element
 * @param {string} card
 * @param {HTMLDivElement} container
 */

export const drawCard = (card, container) => {
  const image = document.createElement("img");
  image.src = `/js-vite-blackjack/assets/cards/${card}.png`;
  image.classList.add("carta");
  container.appendChild(image);
};
