import React, { useRef } from 'react';
import { highlighter } from '../../utils/codeBlockHelper';

const InlineSyntaxHighlight = ({ code, lang, classes }) => {
  const codeRef = useRef(null);
  const highlightedCode = highlighter(code, lang)

  function copyToClipboard() {
    if (codeRef.current) {
      const textToCopy = codeRef.current.textContent;
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          setCopy(true);
          setTimeout(() => {
            setCopy(false);
          }, 3000);
        })
        .catch((err) => {
          console.error('Failed to copy text: ', err);
        });
    }
  };

  return (
    <span>
      <code 
          ref={codeRef} 
          className={ classes ? `language-html inline-code ${classes}` : "language-html inline-code"} 
          onClick={copyToClipboard} 
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
          title='Click to Copy'>
      </code>
    </span>
  );
};

export default InlineSyntaxHighlight;
