import { Fragment } from "react";
import CodePlayground from "../../../components/syntaxHighlight/Updates/CodePlayground"
import InlineSyntaxHighlight from "../../../components/syntaxHighlight/InlineSyntax"
import { Text } from "./data/html";
import data from './data/Text.json';

function HtmlText() {
  return (
    <>
        <h1 className='fs-10 mgb-8'>HTML Text</h1>
        <hr />
  
        <h2 className='fs-7  mgt-8 mgb-4'>Formatting Text</h2>
        <p className="fw-5 mgb-1 lh-2">Formatting text in HTML involves using various tags and elements to style and structure text on a web page.</p>
        {
          data.map((item, i) => (
            <Fragment key={i}>
              <h3 className='mgt-8 mgb-2'>{i + 1}. The {item.tag} tag</h3>
              <p className="fw-5 mgb-1 lh-2 mgl-6">{item.p}</p>
              <InlineSyntaxHighlight lang={'html'} code={item.code} classes={"mgl-6 pad"} />
            </Fragment>
          ))
        }

        <h3 className='mgt-8 mgb-2'>Example with all of these Tags</h3>
        <CodePlayground code={{html: Text.allTogether}} langs={'HTML'} />
    </>
  )
}

export default HtmlText;
