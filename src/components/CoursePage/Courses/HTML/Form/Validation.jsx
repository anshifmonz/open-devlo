import { Fragment } from 'react';
import InlineSyntaxHighlight from '../../../syntaxHighlight/InlineSyntax';

function Validation({ data }) {
  return (
    <div className="form-validation">
      <h2 className='fs-7 mgt-8 mgb-4'>Form Validation</h2>
      {
        data.map((item, i) => (
          <Fragment key={i}>
            <p className='fw-5 mgb-1 lh-2 mgt-8'>{i + 1}. <b>{item.title}</b>: {item.desc}</p>
            {item.attr1 
              ? <p className='fw-5 mgb-2 lh-2 mgl-5'><code>{item.attr}</code> and <code>{item.attr1}</code>: {item.desc}</p> 
              : item.attrs 
              ? item.attrs.map((attr, i) => (
                <p className='fw-5 mgb-2 lh-2 mgl-5' key={i}><strong><code>{attr.title}</code></strong>: {attr.desc}</p>
              ))
              : <p className='fw-5 mgb-2 lh-2 mgl-5' key={i}><code>{item.attr}</code>: {item.desc}</p>   
            }
            <InlineSyntaxHighlight code={item.ex} classes={"mgl-6 pad"} />
          </Fragment>
        ))
      }
    </div>
  )
}

export default Validation;
