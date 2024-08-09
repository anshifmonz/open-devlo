import { Fragment } from "react";
import SyntaxHighlight from "../../syntaxHighlight/SyntaxHighlight";
import InlineSyntaxHighlight from "../../syntaxHighlight/InlineSyntax";
import data from './data/Attribute'
import { Attr } from './data/html'

function Attributes() {
  return (
    <>
      <h1>HTML Attributes</h1>
      <p>HTML attributes provide additional information about HTML elements. They are always specified in the opening tag of an element and are written as name-value pairs. <InlineSyntaxHighlight code={'<tagname attribute="value">Content</tagname>'} /></p>
      
      {
        data.map((item, index) => (
          <Fragment key={item.id}>
            <h3>{index + 1}. {item.h3}</h3>
            <p className="inside-ex">{item.p}</p>
            <InlineSyntaxHighlight code={item.code} inside={true} />
          </Fragment>
        ))
      }

      <h3>Example of putting all these together</h3>
      <SyntaxHighlight code={Attr.allTogether} />
    </>
  )
}

export default Attributes;
