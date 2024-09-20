import { useState } from "react";

function useCodeState(code) {
  const [ htmlCode, setHtmlCode ]     = useState(code.html || '')
  const [ cssCode, setCssCode ]       = useState(code.css || '')
  const [ jsCode, setJsCode ]         = useState(code.js || '')
  
  return { htmlCode, cssCode, jsCode, setHtmlCode, setCssCode, setJsCode}
}

export default useCodeState;
