import React, { useEffect, useRef } from "react";

function CodeEditor({ codeRef, edit, setResultCode, code }) {
  const selectionRef = useRef(null);

  // Cursor point to the first line of code when edit button clicked
  useEffect(() => {
    if (edit && codeRef.current) {
      codeRef.current.focus();
      
      // aaplying previous selection if available
      if (selectionRef.current) {
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(selectionRef.current);
      } else {

        // default cursor to start
        const range = document.createRange();
        range.setStart(codeRef.current, 0);
        range.collapse(true);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      }
    }
  }, [edit]);

  // Live update when code changes
  const codeChange = (e) => {
    setResultCode(e.target.innerText);

    // save current selection range
    const sel = window.getSelection();
    if (sel.rangeCount > 0) {
      selectionRef.current = sel.getRangeAt(0);
    }
  };

  return (
    <code
      className="language-html scroll-bar"
      ref={codeRef}
      contentEditable={edit}
      onInput={codeChange}
      suppressContentEditableWarning={true}
    >
      {code}
    </code>
  );
}

export default CodeEditor;
