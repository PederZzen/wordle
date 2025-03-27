import { useEffect } from "react";
import { GameOverContainer } from "./style";

const GameOver = ({ hasWon, answer, restartGame }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        restartGame();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [restartGame]);

  return (
    <GameOverContainer>
      <p>
        {hasWon
          ? "You guessed it!"
          : `Game Over. The correct word was: ${answer}`}
      </p>
      <button className="button" onClick={restartGame}>
        Play Again
      </button>
    </GameOverContainer>
  );
};

export default GameOver;
