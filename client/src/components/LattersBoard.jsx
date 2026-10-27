import Cell from "./Cell";
import { lettersBoard1 } from "../data/letters";

const LattersBoard= ()=>{
    return(
        <div className="letters-board">
            {lettersBoard1.map((letter, index)=>(
                <Cell key={index} text={letter}/>
            ))}
        </div>
    )
}
export default LattersBoard