import { useCallback, useEffect, useState } from "react"
import Drawing from "./Drawing"
import Keyword from "./Keyboard"
import Word from "./Word"

import words from './words.json'

const OPPORTUNITIES = 6

const genWord = () => words[Math.floor(Math.random() * words.length)].toUpperCase()

const App = () => {

    const [currentWord, setCurrentWord] = useState<string>(genWord)
    const [inputLetters, setInputLetters] = useState<string[]>([])

    const misses: number = inputLetters.filter(letter => !currentWord.split("").includes(letter)).length
    const isLoser = misses === OPPORTUNITIES
    const isWinner = currentWord.split("").every(word => inputLetters.includes(word))
    const isFinished = isWinner || isLoser

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
      if (isFinished) {
        if (e.key === "Enter") {
          setCurrentWord(genWord())
          setInputLetters([])
        } else
          return 
      } 
      if (e.key.match(/^[a-zA-Z]$/)) {
        setInputLetters(prev => {
          if (prev.includes(e.key.toUpperCase())) return prev
          return [...prev, e.key.toUpperCase()]
        })
      }
    }, [setInputLetters, currentWord, inputLetters])

    useEffect(() => {
      window.addEventListener("keydown", handleKeyDown)

      return () => {
        window.removeEventListener("keydown", handleKeyDown)
      }
    }, [handleKeyDown])

    return <div style={bodyStyles}>
      {isWinner && "Has ganado, felicitaciones"}
      {isLoser && "Has perdido :(, vuelve a intentarlo"}
      <Drawing misses={misses} />
      <Word isLoser={isLoser} currentWord={currentWord} inputLetters={inputLetters} />
      <Keyword isFinished={isFinished} currentWord={currentWord} inputLetters={inputLetters} setInputLetters={setInputLetters}/>
    </div>
}
  
  export default App

  const bodyStyles: React.CSSProperties = {
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    gap: "2.5rem",
    margin: "0 auto",
    alignItems: "center",
  }
  