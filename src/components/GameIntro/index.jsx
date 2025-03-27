import { GameIntroContainer } from "./style";

function GameIntro({ setShowModal }) {
  return (
    <GameIntroContainer>
      <div>
        <h2>How To Play</h2>
        <h3>Guess the 5-letter word in 5 tries.</h3>
      </div>
      <ul>
        <li>You have five guesses</li>
        <li>All words must be a 5-letter word</li>
        <li>
          The color of the tiles will change to show how close your guess was to
          the word.
        </li>
      </ul>
      <h4>Examples</h4>
      <div className="examples">
        <div className="example-container">
          <div className="example">
            <span className="green">G</span>
            <span>R</span>
            <span>A</span>
            <span>P</span>
            <span>E</span>
          </div>
          <p>
            <b>G</b> is in the word and the right place
          </p>
        </div>
        <div className="example-container">
          <div className="example">
            <span>P</span>
            <span className="yellow">I</span>
            <span>Z</span>
            <span>Z</span>
            <span>A</span>
          </div>
          <p>
            <b>I</b> is in the word but not in the right place
          </p>
        </div>
        <div className="example-container">
          <div className="example">
            <span>T</span>
            <span>R</span>
            <span className="gray">A</span>
            <span>I</span>
            <span>N</span>
          </div>
          <p>
            <b>A</b> is not in the word
          </p>
        </div>
      </div>
      <div>
        <button className="button" onClick={() => setShowModal(false)}>
          Start Game
        </button>
      </div>
    </GameIntroContainer>
  );
}

export default GameIntro;
