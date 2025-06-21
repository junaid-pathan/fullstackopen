const Note = ({ note,toggleimportance }) => {
  const label = note.important? 'make not important':'make important'
  return (
  <li>
    {note.content}
    <button onClick={toggleimportance}>{label}</button>
  </li>
  )}

export default Note