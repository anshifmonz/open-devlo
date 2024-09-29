import React, { useRef } from 'react';
import { highlighter, copyToClipboard } from '../../utils/codeBlockHelper';

const InlineSyntaxHighlight = ({ code, lang, classes }) => {
  const codeRef = useRef(null);
  const highlightedCode = highlighter(code, lang)

  return (
    <span>
      <code 
          ref={codeRef} 
          className={ classes ? `language-html inline-code ${classes}` : "language-html inline-code"} 
          onClick={() => copyToClipboard(codeRef)} 
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
          title='Click to Copy'>
      </code>
    </span>
  );
};

export default InlineSyntaxHighlight;
