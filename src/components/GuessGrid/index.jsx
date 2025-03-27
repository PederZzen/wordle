import Guess from "../Guess";

const GuessGrid = ({ guesses, currentGuess, answer }) => {
  return (
    <div>
      {Array.from({ length: 6 }, (_, i) => {
        const guess = guesses[i] || (i === guesses.length ? currentGuess : "");
        const isGuessed = i < guesses.length;

        return (
          <Guess key={i} guess={guess} answer={answer} isGuessed={isGuessed} />
        );
      })}
    </div>
  );
};

export default GuessGrid;
