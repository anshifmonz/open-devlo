import { Fragment } from 'react';

import CodePlayground from '../../../components/syntaxHighlight/Updates/CodePlayground';
import InlineSyntaxHighlight from '../../../components/syntaxHighlight/InlineSyntax';
import data from './data/Multimedia.json';
import { MultimediaCode } from './data/html';

function Multimedia() {
  return (
    <>
      <h1 className='fs-10 mgb-8'>{data.title}</h1>
      {
        data.sections.map((item, i) => (
          <div className={item.title} key={i}>
            <h2 className='fs-7 mgt-8 mgb-4'>{item.title}</h2>
            <p className="fw-5 mgb-1 lh-2" dangerouslySetInnerHTML={{__html: item.desc}}></p>
            {
              item.eles
              ? item.eles.map((item, i) => (
                <Fragment key={i}>
                  {
                    item.ele.includes('SVG') 
                    ? <p className="fw-5 mgb-2 lh-2 mgt-6"><b>The {item.ele}:</b></p>
                    : <p className="fw-5 mgb-2 lh-2 mgt-6"><b>The</b> <InlineSyntaxHighlight code={item.ele} /> <b>Element:</b></p>
                  }
                  <p className="fw-5 lh-2 mgl-4 mgb-1 mgt-3">{item.desc}</p>
                  {
                    item.InCode
                    ? <InlineSyntaxHighlight code={item.InCode} classes={"mgl-4"}/>
                    : <CodePlayground code={{html: MultimediaCode[item.SyCode]}} classes={"mgl-4 mgt-3"} langs={'HTML'} />
                  }
                </Fragment>
              ))
              : item.ele1
              ? <p className="fw-5 mgb-1 lh-2 mgt-1"><b>The</b> <InlineSyntaxHighlight code={item.ele} /> and <InlineSyntaxHighlight code={item.ele1} /> <b>Element:</b> {item.def}</p>
              : <p className="fw-5 mgb-1 lh-2"><b>The</b> <InlineSyntaxHighlight code={item.ele} /> <b>Element:</b> {item.def}</p>
            }
            {
              item.attrs &&
                <>
                  <h3 className='mgt-5 mgb-2'>Attributes</h3>
                  {item.attrs.map((attr, i) => (
                    <Fragment key={i}>
                      <p className="fw-5 mgb-1 lh-2 mgl-3"><code>{attr.attr}</code>: {attr.desc}</p>
                    </Fragment>
                  ))}
                </>
            }
            {
              item.SyCode
              ? <CodePlayground code={{html: MultimediaCode[item.SyCode]}} classes={"mgt-4"} langs={'HTML'} />
              : item.InCode
              && <InlineSyntaxHighlight code={item.InCode} />
            }
          </div>
        ))
      }
    </>
  )
}

export default Multimedia;
