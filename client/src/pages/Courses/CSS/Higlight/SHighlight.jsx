import { useEffect, useRef, useState } from 'react';
import hljs from 'highlight.js';
import css from 'highlight.js/lib/languages/css';
import '../../../../styles/Courses/code.css';
import { PlayButtonIcon, EditIcon } from '../../../../components/syntaxHighlight/Icons';
import ShowResult from '../../../../components/syntaxHighlight/ShowResult';
import Copy from '../../../../components/syntaxHighlight/Copy';
import CodeEditor from '../../../../components/syntaxHighlight/CodeEditor';

hljs.registerLanguage('html', css);

function SHighlight({ code, classes, restriction }) {
  
  const codeRef = useRef(code);
  const [result, setResult] = useState(false);
  const [edit, setEdit] = useState(false);
  const [resultCode, setResultCode] = useState();
  
  function showResult() {
    // converting to non-editable
    setEdit(false)
    
    setResult(!result)
    if (codeRef.current) {
      setResultCode(codeRef.current.textContent);
    }
  }
  
  function makeEdit() {
    setEdit(!edit)
  }

  function calculateRightDivWidth() {
    if (restriction) {
      if (restriction.includes('noEdit') && restriction.includes('noResult')) {
        return { width: "100px" };
      }
      if (restriction.includes('noEdit') || restriction.includes('noResult')) {
        return { width: "125px" };
      }
    }
    return { width: "160px" };
  };
  
  // Not highlighting when live code change (create new element), Idk why
  useEffect(() => {
    if (codeRef.current && codeRef.current.dataset.highlighted !== 'yes') {
      hljs.highlightElement(codeRef.current);
    }
  }, [resultCode]);

  return (
    <div className={classes ? `html-code-container ${classes}` : "html-code-container"}>
      <div className="code-head">
        <span>CSS</span>
        <div className="right" style={calculateRightDivWidth()}>
          {!restriction?.includes('noEdit') && <EditIcon func={makeEdit}/>}
          {!restriction?.includes('noResult') && <PlayButtonIcon func={showResult} result={result}/>}
          <Copy codeRef={codeRef}/>
        </div>
      </div>
      <pre>
        <CodeEditor codeRef={codeRef} edit={edit} setResultCode={setResultCode} code={code} />
      </pre>
      <ShowResult result={result} resultCode={resultCode}/>
    </div>
  );
};

export default SHighlight;
