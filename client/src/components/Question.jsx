import ChoiceOption from "./ChoiceOption"

const Question=({ question })=>{
    return(
        <div className="Question" >
            <h2>{question.prompt}</h2>
            <div className="options">
             {question.options.map((option, index)=>(
                <ChoiceOption key={index} content= {option.content} size={option.size}/>
            ))}
            </div>
        </div>
        
    )
}
export default Question