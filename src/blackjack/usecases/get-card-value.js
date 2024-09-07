
  export const getCardValue = (card) => {
    const value = card.slice(0, -1);
    return Number(isNaN(value) ? (value === "A" ? 11 : 10) : value);
  };