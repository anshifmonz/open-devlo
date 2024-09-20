import React, { useEffect, useRef } from "react";
import { highlighter, codeChange, restoreCursorPosition } from "../../../../utils/codeBlockHelper";

function CodeEditor({ codeRef, edit, activeLang, setHtml, setCss, setJs, html, css, js }) {
  const selectionRef = useRef(null)

  useEffect(() => {
    if (edit && codeRef.current) {
      codeRef.current.focus();
      restoreCursorPosition(selectionRef, codeRef);
    }
  }, [edit]);

  useEffect(() => {
    if (codeRef.current) {
      let highlightedCode;
      switch (activeLang) {
        case 'HTML':
          highlightedCode = highlighter(html, 'html');
          break;
        case 'CSS':
          highlightedCode = highlighter(css, 'css');
          break;
        case 'Javascript':
          highlightedCode = highlighter(js, 'javascript');
          break;
        default:
          highlightedCode = '';
      }

      codeRef.current.innerHTML = highlightedCode;
      restoreCursorPosition(selectionRef, codeRef);
    }
  }, [html, css, js, activeLang]);

  return (
    <pre className="code-editor">
      <code
        className="scroll-bar"
        ref={codeRef}
        contentEditable={edit}
        onInput={(e) => {
          codeChange(e, setHtml, setCss, setJs, activeLang, selectionRef, codeRef)
        }}
        suppressContentEditableWarning={true}
      />
    </pre>
  );
}

export default CodeEditor;
