import { List } from './data/html';
import data from './data/List.json'
import InlineSyntaxHighlight from '../../../components/syntaxHighlight/InlineSyntax';
import SyntaxHighlight from '../../../components/syntaxHighlight/SyntaxHighlight'

function Lists() {
  return (
    <>
      <h1 className='fs-10 mgb-6'>HTML List</h1>
      <p className="fw-5 mgb-1 lh-2">HTML lists are used to group and organize content into a list format. There are three types of lists:</p>

      {
        data.map((item, index) => (
          <>
            <h2 className='fs-7 mgt-8 mgb-4'>{index + 1}. {item.heading}</h2>
            <p className="fw-5 mgb-4 lh-2">{item.p}</p>
            {
              item.tag 
              ? <> 
                  <p className='fw-5 mgb-1 lh-2 pdl-4'><b>Tag: <InlineSyntaxHighlight code={item.tag} /></b></p> 
                  <p className='fw-5 mgb-1 lh-2 pdl-4'><b>List item tag: <InlineSyntaxHighlight code={item.liTag} /></b></p>
                  <SyntaxHighlight code={item.tag === '<ul>' ? List.uList : List.oList} classes={"mgl-4"} />
                </>
              : <> 
                  <p className='fw-5 mgb-1 lh-2 pdl-4'><b>Tag for List: <InlineSyntaxHighlight code={item.dTag} /></b></p>
                  <p className='fw-5 mgb-1 lh-2 pdl-4'><b>Tag for Term: <InlineSyntaxHighlight code={item.dliTag} /></b></p>
                  <p className='fw-5 mgb-1 lh-2 pdl-4'><b>Tag for Description: <InlineSyntaxHighlight code={item.dTagDesc} /></b></p>
                  <SyntaxHighlight code={List.descList} classes={"mgl-4"} />
                </>
            }
          </>
        ))
      }

      <h2 className='fs-7 mgt-8 mgb-4'>Nested Lists</h2>
      <p className="fw-5 mgb-1 lh-2">Lists can be nested inside each other to create hierarchical/ranked or levels/layers structures.</p>
      <h3 className='mgt-6 mgb-2'>Example:</h3>
      <SyntaxHighlight code={List.nestedList} />

      <h2 className='fs-7 mgt-10 mgb--4'>Attributes for List</h2>

      <h3 className='mgt-8 mgb-2'>1. The <code>type</code> attribute (for ordered lists): Specifies the type of numbering</h3>
      <p className="fw-5 mgb-1 lh-2 mgl-5"><b>Values for type attribute:</b></p>
      <ul className='mgl-8 mgb-4'>
        <li className='mgl-6'><b>1-</b>  Numbers (default)</li>
        <li className='mgl-6'><b>a-</b>  Lowercase letters</li>
        <li className='mgl-6'><b>A-</b>  Uppercase letters</li>
        <li className='mgl-6'><b>i-</b>  Lowercase roman numerals</li>
        <li className='mgl-6'><b>I-</b>  Uppercase roman numerals</li>
      </ul>
      <SyntaxHighlight code={List.type} classes={"mgl-4"} />

      <h3 className='mgb-4 mgt-8'>2. The <code>start</code> attribute (for ordered lists):  Specifies the starting number for the list.</h3>
      <SyntaxHighlight code={List.start} classes={"mgl-4"} />

      <h3 className='mgt-10 mgb-2'>Example Combining All List Types</h3>
      <SyntaxHighlight code={List.allTogether} />
    </>
  )
}

export default Lists;
