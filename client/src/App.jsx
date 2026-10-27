import LattersBoard from "./components/LattersBoard"
import "./App.css"
import WordsBoard from "./components/WordsBoard"
import ChoiceOption from "./components/ChoiceOption"
import Question from "./components/Question"
import { sentencesBoard1 } from "./data/sentences"

function App() {

  return (
    <>
   <LattersBoard />
   <WordsBoard group="chirik" level="simple" />
   <ChoiceOption content="שלום"/>
   <Question question={sentencesBoard1[0]}/>
   </>
  )
}

export default App
