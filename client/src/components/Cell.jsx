const Cell = ({ text, status = "none" }) => {
  return <div className={`cell ${status}`}>{text}</div>
}

export default Cell;