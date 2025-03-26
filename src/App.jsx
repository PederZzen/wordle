import React, { useEffect, useState } from 'react'
import Guess from './components/Guess'
import Keyboard from './components/Keyboard'
import wordList from './assets/words.json'

const App = () => {
  const [answer, setAnswer] = useState('')
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState([]);


  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toUpperCase();
  
      if (/^[A-Z]$/.test(key) && currentGuess.length < 5) {
        setCurrentGuess(prev => prev + key);
      }
  
      if (key === 'ENTER') { 
        if (currentGuess.length === 5) {
          setGuesses(prev => [...prev, currentGuess]);
          setCurrentGuess('');
        }
      }
      if (key === 'BACKSPACE') { 
        setCurrentGuess(prev => prev.slice(0, -1))
       }
    };
  
    window.addEventListener('keydown', handleKeyDown);
  
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentGuess]);

  useEffect(() => {
    const words = wordList;
    const word = words[Math.floor(Math.random() * words.length)]
    setAnswer(word)
  }, [])

  return (
    <div className='app'>
      <div className='board'>
      {
        new Array(6).fill(0).map((_, index) => {
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
        })
      }

      </div>
      <Keyboard />
      <p>Current word is: {answer}</p>
    </div>
  )
}

export default App