import wordList from "../assets/words.json";

export const getRandomWord = () => {
  const word = wordList[Math.floor(Math.random() * wordList.length)];
  return word.toUpperCase();
};
