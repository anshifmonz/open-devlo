import { useRef } from 'react';
import { calculateRightDivWidth, calculateTabButtonsWidth, tabActivater } from '../../../utils/codeBlockHelper';
import { EditIcon, PlayButtonIcon } from '../Icons';
import Copy from '../Copy';

function CodeHead({ codeRef, langs, setActiveLang, restriction, editFunc, resultFunc, result }) {

  const tabButtons = useRef(null);
  langs = langs.split(' ')

  return (
    <div className="code-head">
      <div ref={tabButtons} className="tab-buttons" style={calculateTabButtonsWidth(langs)}>
        {
          langs.map((item, i) => (
            <div 
              key={i} id={item} className={langs.length === 1 ? 'tab-button' : i === 0 ? 'tab-button active' : 'tab-button'} 
              onClick={() => tabActivater(item, setActiveLang, tabButtons, langs)}>
              <span>{item}</span>
            </div>
          ))
        }
      </div>
      <div className="right" style={calculateRightDivWidth(restriction)}>
          {!restriction?.includes('noEdit') && <EditIcon func={editFunc}/>}
          {!restriction?.includes('noResult') && <PlayButtonIcon func={resultFunc} result={result}/>}
          <Copy codeRef={codeRef}/>
      </div>
    </div>
  )
}

export default CodeHead;
