import React, { useState, useEffect, useCallback } from "react";
import GuessGrid from "./components/GuessGrid";
import Keyboard from "./components/Keyboard";
import GameIntro from "./components/GameIntro";
import GameOver from "./components/GameOver";
import { getColorStatuses } from "./functions/logic";
import { getRandomWord } from "./functions/words";
import { updateKeyColors } from "./functions/keyboard";
import { useKeyboardInput } from "./hooks/useKeyboardInput";

const App = () => {
  const [answer, setAnswer] = useState("");
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState("intro");
  const [keyColors, setKeyColors] = useState({});

  const isGameActive = gameStatus === "playing";

  useEffect(() => {
    if (gameStatus === "playing") {
      setAnswer(getRandomWord());
    }
  }, [gameStatus]);

  const handleKeyInput = useCallback(
    (key) => {
      if (!isGameActive) return;

      if (/^[A-Z]$/.test(key) && currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + key);
        return;
      }

      if (key === "BACKSPACE") {
        setCurrentGuess((prev) => prev.slice(0, -1));
        return;
      }

      if (key === "ENTER" && currentGuess.length === 5) {
        const statuses = getColorStatuses(currentGuess, answer);
        setKeyColors((prev) => updateKeyColors(prev, currentGuess, statuses));

        const nextGuesses = [...guesses, currentGuess];
        setGuesses(nextGuesses);
        setCurrentGuess("");

        if (currentGuess === answer) {
          setGameStatus("won");
        } else if (nextGuesses.length === 6) {
          setGameStatus("lost");
        }
      }
    },
    [isGameActive, currentGuess, answer, guesses]
  );

  useKeyboardInput(isGameActive, handleKeyInput);

  const restartGame = () => {
    setCurrentGuess("");
    setGuesses([]);
    setKeyColors({});
    setGameStatus("playing");
  };

  return (
    <div className="app">
      {gameStatus === "intro" && (
        <GameIntro setShowModal={() => setGameStatus("playing")} />
      )}

      {gameStatus !== "intro" && (
        <>
          <GuessGrid
            guesses={guesses}
            currentGuess={currentGuess}
            answer={answer}
          />

          <Keyboard onKeyPress={handleKeyInput} keyStatuses={keyColors} />

          {(gameStatus === "won" || gameStatus === "lost") && (
            <GameOver
              answer={answer}
              hasWon={gameStatus === "won"}
              restartGame={restartGame}
            />
          )}
        </>
      )}
    </div>
  );
};

export default App;
