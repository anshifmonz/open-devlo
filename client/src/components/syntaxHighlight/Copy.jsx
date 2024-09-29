import { useState } from 'react';
import { CopyIcon, TickIcon } from './Icons';
import { copyToClipboard } from '../../utils/codeBlockHelper';

function Copy({codeRef}) {

  const [isCopy, setCopy] = useState(false);

  return (
    <div className="copy-btn" onClick={() => copyToClipboard(codeRef, setCopy)}>
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
