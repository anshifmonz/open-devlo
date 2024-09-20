import { useRef, useState } from 'react';

import '../../../styles/Courses/html/code.css';
import { PlayButtonIcon, EditIcon } from './Icons';
import ShowResult from './ShowResult';
import Copy from './Copy';
import CodeEditor from './CodeEditor';

function SyntaxHighlight({ code, classes, restriction }) {
  
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

  return (
    <div className={classes ? `html-code-container ${classes}` : "html-code-container"}>
      <div className="code-head">
        <span>HTML</span>
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

export default SyntaxHighlight;
