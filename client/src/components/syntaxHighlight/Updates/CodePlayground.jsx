import { useRef, useState } from 'react';
import CodeHead from './CodeHead';
import CodeEditor from './CodeEditor';
import CodePreview from './CodePreview';
import useCodeState from '../../../hooks/useCodeState';

import '../../../styles/Courses/code.css';

function CodePlayground({ code, classes, restriction, langs }) {
  const { htmlCode, cssCode, jsCode, setHtmlCode, setCssCode, setJsCode } = useCodeState(code);
  const [ activeLang, setActiveLang ] = useState(langs.split(' ')[0]);
  const [ result, setResult ] = useState(false);
  const [ edit, setEdit ] = useState(false);
  
  const codeRef = useRef(firstCodeValue);
  const firstCodeValue = Object.values(code)[0];

  const toggleResult = () => setResult(!result);
  const toggleEdit = () => setEdit(!edit);
  
  return (
    <div className="code-block">
      <div className={classes ? `code-container ${classes}` : "code-container"}>
        <CodeHead 
          codeRef={codeRef} langs={langs} setActiveLang={setActiveLang} restriction={restriction} 
          editFunc={toggleEdit} resultFunc={toggleResult} result={result}
        />
        <CodeEditor 
          codeRef={codeRef} edit={edit} activeLang={activeLang}
          setHtml={setHtmlCode} setCss={setCssCode} setJs={setJsCode} 
          html={htmlCode} css={cssCode} js={jsCode} 
        />
      </div>
      <CodePreview result={result} html={htmlCode} css={cssCode} js={jsCode} />
    </div>
  )
}

export default CodePlayground;
