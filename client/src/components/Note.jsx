import '../../styles/Courses/note.css'

function Note({ text, classes }) {
  return (
    <div id="note" className={classes ? classes : null}>
      <strong>Note:</strong>
      <span>
        {text}
      </span>
    </div>
  )
}

export default Note;
