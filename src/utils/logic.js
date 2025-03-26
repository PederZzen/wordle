// src/utils/logic.js

export const getColorStatuses = (guess, answer) => {
    const result = Array(5).fill("gray");
    const answerLetters = answer.split('');
    const guessLetters = guess.split('');
  
    for (let i = 0; i < 5; i++) {
      if (guessLetters[i] === answerLetters[i]) {
        result[i] = "green";
        answerLetters[i] = null;
        guessLetters[i] = null;
      }
    }
  
    for (let i = 0; i < 5; i++) {
      if (guessLetters[i] && answerLetters.includes(guessLetters[i])) {
        result[i] = "yellow";
        answerLetters[answerLetters.indexOf(guessLetters[i])] = null;
      }
    }
  
    return result;
  };
  