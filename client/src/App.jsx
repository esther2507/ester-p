import LattersBoard from "./components/LattersBoard"
import "./App.css"
import WordsBoard from "./components/WordsBoard"
import ChoiceOption from "./components/ChoiceOption"
import Question from "./components/Question"
import { sentencesBoard1, sentencesBoard2, sentencesBoard3 } from "./data/sentences"
import { useState } from "react"

const boards = [sentencesBoard1, sentencesBoard2, sentencesBoard3]
function App() {
  const [currentBoardIndex, setCurrentBoardIndex] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentBoard = boards[currentBoardIndex]
  const current = () => {
    if (currentIndex === currentBoard.length - 1) {
      if (currentBoardIndex < boards.length - 1) {
        setCurrentBoardIndex(currentBoardIndex + 1)
        setCurrentIndex(0)
      } else {
        alert("All boards completed")
      }
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handleAnswer = (answer) => {
    if (answer.isCorrect === true) {
      console.log("correct")
      current()
    }
    else {
      console.log("wrong answer")
      current()
    }
  }

  if (!currentBoard || !currentBoard[currentIndex]) {
    return (
      <div style={{ textAlign: "center", fontSize: "2rem", marginTop: "50px", direction: "rtl" }}>
      </div>
    )
  }
  return (
    <>
      <LattersBoard />
      <WordsBoard group="chirik" level="simple" />
      <Question
        question={currentBoard[currentIndex]}
        onAnswerSelect={handleAnswer} />
    </>
  )
}
export default App
