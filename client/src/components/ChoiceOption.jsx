
const ChoiceOption = ({ content, size, selected, onSelect }) => {
    const isImage = content.startsWith("/images/") || content.startsWith("images/")

    return (
        <div className={`choice ${selected ? "selected" : ""}`}
            onClick={onSelect} >

            {isImage ? (
                <img src={content} alt="" className={`choice-img ${size || ""}`} />
            ) : (
                <span className="choice-text">{content}</span>
            )}
        </div>
    )
}
export default ChoiceOption