import { Dispatch, SetStateAction, isValidElement } from "react"
import styles from "./Keyboard.module.css"

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

type KeyboardProps = {
  isFinished: boolean
  currentWord: string
  inputLetters: string[]
  setInputLetters: Dispatch<SetStateAction<string[]>>
}

const Keyboard = ({isFinished, currentWord, inputLetters, setInputLetters} : KeyboardProps) => {

  const markLetter = (letter: string) => {
    if (isFinished) return
    setInputLetters(prev => [...prev, letter])
  }

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(50px, 1fr))",
      gap: ".5rem",
      alignSelf: "stretch"
    }}>{letters.map((letter) => {
      const isDisabled = inputLetters.includes(letter)
      const isMatch = currentWord.split("").includes(letter)
      return <button disabled={isDisabled || isFinished} onClick={() => markLetter(letter)} 
        className={`${styles.btn} ${isDisabled && isMatch && styles.btnMatched} ${isDisabled && !isMatch && styles.btnMissed}`} key={letter}>
        {letter}
      </button>
    }
      )}
    </div>
  )
}

export default Keyboard