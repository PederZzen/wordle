import React from 'react'
import { GameIntroContainer } from './style'

function GameIntro({ setShowModal}) {
  return (
    <GameIntroContainer>
      <h2>Welcome to Wordle-ish!</h2>
      <p>Guess the 5-letter word in 5 tries.</p>
      <ul>
        <li>🟩 Green: correct letter, correct spot</li>
        <li>🟨 Yellow: correct letter, wrong spot</li>
        <li>⬜ Gray: letter not in the word</li>
      </ul>
      <button className='button' onClick={() => setShowModal(false)}>Start Game</button>
  </GameIntroContainer>
  )
}

export default GameIntro