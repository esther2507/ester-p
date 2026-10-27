import Cell from "./Cell";
import { words } from "../data/words";

const WordsBoard= ({group, level})=>{
    const list = words[group][level]
    return(
         <div className="words-board">
            {list.map((word, index)=>(
                <Cell key={index} text= {word} />
            ))}
         </div>
    )
}
export default WordsBoard