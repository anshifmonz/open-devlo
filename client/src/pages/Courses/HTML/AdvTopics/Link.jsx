import { Fragment } from 'react';
import data from '../data/Link.json';
import InlineSyntaxHighlight from '../../../../components/syntaxHighlight/InlineSyntax';

function Link() {
  return (
    <>
      <h1 className='fs-10 mgb-8'>HTML Link Tag</h1>
      
      <h2 className="fs-7 mgt-8 mgb-4">Basic Structure</h2>
      <p className="fw-5 mgb-3 lh-3">The <InlineSyntaxHighlight lang={'html'} code={"<link>"} /> tag is a self-closing tag, meaning it doesn’t have a closing tag like <InlineSyntaxHighlight lang={'html'} code={"<link></link>"} />, It’s mostly placed within the <InlineSyntaxHighlight lang={'html'} code={"<head>"} /> section of an HTML document.</p>
      <InlineSyntaxHighlight lang={'html'} code={'<link rel="stylesheet" href="styles.css">'} classes={'pad'}/>
      {
        <div>
          <h2 className="fs-7 mgt-8 mgb--4">{data.Attributes.title}</h2>
          {
            data.Attributes.Attrs.map((attr, j) => (
              <Fragment key={j}>
                <p className='fw-5 mgb-3 lh-1 mgt-8 num-indent'><b className='fs-5'>{j + 1}. {attr.attr}:</b> <span dangerouslySetInnerHTML={{ __html: attr.desc }} /></p>
                { attr.values &&
                  <>
                    <p className='fw-7 mgb-3 lh-1 mgl-6'>Common Values:</p>
                    { 
                      attr.values.map((value, k) => (
                        <p className='fw-4 mgb-2 lh-1' style={{ marginLeft: "3em" }} key={k}>
                          <span dangerouslySetInnerHTML={{ __html: value.value }} />: {value.desc}
                        </p>
                      ))
                    }
                  </>
                }
                <InlineSyntaxHighlight lang={'html'} code={attr.InCode} classes={'mgl-6 mgb-8 pad'}/>
              </Fragment>
            ))
          }
        </div>
      }
      {
        <div>
          <h2 className="fs-7 mgt-8 mgb--4">{data.Uses.title}</h2>
          {
            data.Uses.uses.map((use, i) => (
              <div key={i}>
                <h3 className='mgt-8'>{use.title}</h3>
                <p className='fw-5 mgb-2 lh-1 mgt-3 mgl-4'>{use.desc}</p>
                <InlineSyntaxHighlight lang={'html'} code={use.InCode} classes={'mgl-4 pad'}/>
              </div>
            ))
          }
        </div>
      }
    </>   
  )
}

export default Link;
