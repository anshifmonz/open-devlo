import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js';

const InlineSyntaxHighlight = ({ code, inside }) => {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code]);

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
      <code ref={codeRef} className={ inside ? "language-html inline-code inside-ex" : "language-html inline-code"} onClick={copyToClipboard} title='Click to Copy'>
        {code}
      </code>
    </span>
  );
};

export default InlineSyntaxHighlight;
