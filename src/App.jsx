import React, { useEffect, useState } from 'react';
import Guess from './components/Guess';
import Keyboard from './components/Keyboard';
import wordList from './assets/words.json';

const App = () => {
  const [answer, setAnswer] = useState('');
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const word = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
    setAnswer(word);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (gameOver) return;

      const key = e.key.toUpperCase();

      if (/^[A-Z]$/.test(key) && currentGuess.length < 5) {
        setCurrentGuess(prev => prev + key);
      }

      if (key === 'BACKSPACE') {
        setCurrentGuess(prev => prev.slice(0, -1));
      }

      if (key === 'ENTER' && currentGuess.length === 5) {
        const nextGuesses = [...guesses, currentGuess];
        setGuesses(nextGuesses);
        setCurrentGuess('');

        if (currentGuess === answer || nextGuesses.length === 6) {
          setGameOver(true);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentGuess, guesses, answer, gameOver]);

  return (
    <div className="app">
      <div>
        {new Array(6).fill().map((_, index) => {
          const guess = guesses[index] || (index === guesses.length ? currentGuess : "");
          const isGuessed = index < guesses.length;

          return (
            <Guess
              key={index}
              guess={guess}
              answer={answer}
              isGuessed={isGuessed}
            />
          );
        })}
      </div>

      <Keyboard />
      {gameOver && (
        <p>
          {guesses.includes(answer)
            ? '🎉 You guessed it!'
            : `🔚 Game Over. The word was: ${answer}`}
        </p>
      )}
      {answer}
    </div>
  );
};

export default App;
