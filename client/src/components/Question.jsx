import ChoiceOption from "./ChoiceOption"

const Question=({ question, onAnswerSelect})=>{
    // if (!question) return null
    const isImagePrompt = question.prompt.startsWith("/images/") || question.prompt.startsWith("images()")
    return(
    <div className="Question">
            {isImagePrompt ? (
                <img src={question.prompt} alt="" className="question-img" />
            ) : (   
                <h2>{question.prompt}</h2>
            )}
            <div className="options">
             {question.options.map((option, index)=>(
                <ChoiceOption key={index} content= {option.content} size={option.size} onSelect={() => onAnswerSelect(option)}   />
            ))}
            </div>
        </div> 
    )
}
export default Question
