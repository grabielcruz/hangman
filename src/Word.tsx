

type WordProps = {
  isLoser: boolean
  currentWord: string
  inputLetters: string[]
}

const Word = ({isLoser, currentWord, inputLetters} : WordProps) => {
  return (
    <div style={{
      textTransform: "uppercase",
      fontWeight: "bold",
      fontSize: "2.5em",
      display: "flex",
      gap: ".5em",
      fontFamily: "monospace"
    }}>
      {currentWord.split("").map((letter, index) => {
        const touched = inputLetters.includes(letter)
        return <div key={index} style={{
          borderBottom: ".25em solid black", 
          textAlign: "center", 
          padding: ".25em",
          minWidth: ".5em",
          color: !touched && isLoser ? "red" : "black"
          }}>
          {touched || isLoser ? letter : ""}
        </div>}
      )}
    </div>
  )
}

export default Word