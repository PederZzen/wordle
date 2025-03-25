import React, { useEffect, useState } from 'react'
import Guess from './components/Guess'
import Keyboard from './components/Keyboard'
import wordList from './assets/words.json'

const App = () => {
  const [answer, setAnswer] = useState('')

  useEffect(() => {
    const words = wordList;
    const word = words[Math.floor(Math.random() * words.length)]
    setAnswer(word)
  }, [])

  return (
    <div className='app'>
      <div className='board'>
        {
          new Array(6).fill(0).map((_, index) => (
            <Guess key={index} guess={"paprr"} answer={answer} isGuessed={true}/> 
          ))
        }
      </div>
      <Keyboard />
      <p>Current word is: {answer}</p>
    </div>
  )
}

export default App