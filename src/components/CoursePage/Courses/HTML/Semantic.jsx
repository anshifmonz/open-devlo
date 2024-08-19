import { Fragment } from 'react';
import data from './data/Semantic.json'
import { SemanticCode } from './data/html';
import SyntaxHighlight from "../../syntaxHighlight/SyntaxHighlight";
import InlineSyntaxHighlight from "../../syntaxHighlight/InlineSyntax";
import '../../../../styles/Courses/html/semantic.css'

function Semantic() {
  return (
    <div className="semantic-html">
      <h1 className='fs-10 mgb-6'>Semantic HTML</h1>
      <p className="fw-5 mgb-1 lh-2">Semantic HTML tags provide meaning to the web content. They clearly describe their purpose to the browser and developer, improving the structure and readability of the HTML document.</p>

      <div className="semantic-tags">
        <h2 className='fs-7 mgt-8 mgb--4'>Semantic Tags</h2>
        {
          data.tags.map((tag, i) => (
            <Fragment key={i}>
              <h3 className='mgt-8 mgb-5'>{i + 1}. {tag.heading}</h3>
              {tag.tags 
                ? tag.tags.map((item, i) => (
                    <Fragment key={i}>
                      <p className='fw-5 mgb-1 lh-2 mgl-4'><InlineSyntaxHighlight code={item.tag} />: {item.desc}</p>
                      {item.tag === '<figcaption>' && <SyntaxHighlight code={SemanticCode.figure} classes={"mgl-4 mgt-2"}/>}
                    </Fragment>
                  ))
                : <> 
                    <p className='fw-5 mgb-1 lh-2 mgl-4'><InlineSyntaxHighlight code={tag.tag} />: {tag.desc}</p>
                    <SyntaxHighlight code={SemanticCode[tag.tag.replace('<', '').replace('>', '')]} classes={"mgl-4 mgt-2"}/>
                  </>
              }
            </Fragment>
          ))
        }
      </div>
      
      <div className="why-use-semantic-tags mgb-8">
        <h2 className='fw-5 mgb-1 lh-2 fs-7 mgt-8 mgb-4'>Why Use Semantic Tags?</h2>
        {
          data.why.map((item, i) => (
            <p key={i} className='fw-5 mgb-1 lh-2 mgl-4 mgt-4'><strong>{item.title}</strong>: {item.desc}</p>
          ))
        }
      </div>

      <SyntaxHighlight code={SemanticCode.allTogether} />
    </div>
  )
}

export default Semantic;
