export const updateKeyColors = (prevColors, guess, statuses) => {
  const updated = { ...prevColors };
  const priority = { gray: 0, yellow: 1, green: 2 };

  guess.split("").forEach((letter, i) => {
    const newColor = statuses[i];
    const oldColor = updated[letter];
    if (!oldColor || priority[newColor] > priority[oldColor]) {
      updated[letter] = newColor;
    }
  });

  return updated;
};
