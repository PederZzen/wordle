import React from 'react'
import { GameOverContainer } from './style'

function GameOver({ answer }) {
  return (
    <GameOverContainer>
        <h2>Game Over!</h2>
        <p>The word was {answer}.</p>
        <button className="button" onClick={() => window.location.reload()}>Play Again</button>
    </GameOverContainer>
  )
}

export default GameOver