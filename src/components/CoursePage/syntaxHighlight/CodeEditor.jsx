import { useEffect } from "react";

function CodeEditor({codeRef, edit, setResultCode, code}) {

  // Cursor point to the first line of code when edit button clicked
  useEffect(() => {
    if (edit && codeRef.current) {
      codeRef.current.focus();

      const range = document.createRange();
      const sel = window.getSelection();
      range.setStart(codeRef.current, 0);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }, [edit]);

  // Live update when code change
  function codeChange(e) {
    setResultCode(e.target.innerText)
  }

  return (
    <code className="language-html scroll-bar" 
    ref={codeRef} 
    contentEditable={edit} 
    onInput={codeChange}>
      {code}
    </code>
  )
}

export default CodeEditor;
