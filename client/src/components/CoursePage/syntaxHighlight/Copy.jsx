import { useState } from 'react';
import { CopyIcon, TickIcon } from './Icons';

function Copy({codeRef}) {

  const [isCopy, setCopy] = useState(false);

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
    <div className="copy-btn" onClick={copyToClipboard}>
      {isCopy ? (
        <>
          <TickIcon /> Copied
        </>
      ) : (
        <>
          <CopyIcon /> Copy code
        </>
      )}
    </div>
  )
}

export default Copy;
