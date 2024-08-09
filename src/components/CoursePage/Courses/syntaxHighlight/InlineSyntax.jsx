import React, { useEffect, useRef } from 'react';
import hljs from 'highlight.js';

const InlineSyntaxHighlight = ({ code, text }) => {
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
      <code ref={codeRef} className="language-html inline-code" onClick={copyToClipboard} title='Click to Copy'>
        {code}
      </code>
      {text && <span> {text}</span>}
    </span>
  );
};

export default InlineSyntaxHighlight;
