import React, { useState, useEffect } from 'react';
import Guess from './components/Guess';
import Keyboard from './components/Keyboard';
import wordList from './assets/words.json';
import { getColorStatuses } from './utils/logic';
import GameIntro from './components/GameIntro';
import GameOver from './components/GameOver';

const App = () => {
  const [answer, setAnswer] = useState('');
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [keyColors, setKeyColors] = useState({});
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    if (!showModal) {
      const word = wordList[Math.floor(Math.random() * wordList.length)];
      setAnswer(word.toUpperCase());
    }
  }, [showModal]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      handleKeyInput(e.key.toUpperCase());
    };

    if (!showModal) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  });

  const handleKeyInput = (key) => {
    if (gameOver) return;

    if (/^[A-Z]$/.test(key) && currentGuess.length < 5) {
      setCurrentGuess((prev) => prev + key);
      return;
    }

    if (key === 'BACKSPACE') {
      setCurrentGuess((prev) => prev.slice(0, -1));
      return;
    }

    if (key === 'ENTER' && currentGuess.length === 5) {
      const statuses = getColorStatuses(currentGuess, answer);
      updateKeyColors(currentGuess, statuses);

      const nextGuesses = [...guesses, currentGuess];
      setGuesses(nextGuesses);
      setCurrentGuess('');

      if (currentGuess === answer || nextGuesses.length === 6) {
        setGameOver(true);
      }
    }
  };

  const updateKeyColors = (guess, statuses) => {
    setKeyColors((prev) => {
      const updated = { ...prev };
      const priority = { gray: 0, yellow: 1, green: 2 };

      guess.split('').forEach((letter, i) => {
        const newColor = statuses[i];
        const oldColor = updated[letter];
        if (!oldColor || priority[newColor] > priority[oldColor]) {
          updated[letter] = newColor;
        }
      });

      return updated;
    });
  };

  return (
    <div className="app">
      {showModal && (
        <GameIntro setShowModal={setShowModal} />
      )}

      {!showModal && (
        <>
          <div>
            {Array.from({ length: 6 }, (_, i) => {
              const guess = guesses[i] || (i === guesses.length ? currentGuess : '');
              const isGuessed = i < guesses.length;

              return (
                <Guess
                  key={i}
                  guess={guess}
                  answer={answer}
                  isGuessed={isGuessed}
                />
              );
            })}
          </div>

          <Keyboard onKeyPress={handleKeyInput} keyStatuses={keyColors} />

          {gameOver && (
            <GameOver answer={answer} />
          )}
        </>
      )}
    </div>
  );
};

export default App;
