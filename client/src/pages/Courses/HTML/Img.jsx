import { Fragment } from "react";

import CodePlayground from "../../../components/syntaxHighlight/CodePlayground";
import InlineSyntaxHighlight from "../../../components/syntaxHighlight/InlineSyntax";
import { Img } from './data/html';
import data from './data/img.json';

function Images() {
  return (
    <>
      <h1 className='fs-10 mgb-7'>HTML Images</h1>
      <p className="fw-5 lh-2 mgb-3">Images are inserted to a web page using the <InlineSyntaxHighlight lang={'html'} code={"<img>"} /> tag, It’s a self-closing tag, meaning it doesn’t require a closing tag. </p>

      <InlineSyntaxHighlight lang={'html'} code={'<img src="image.jpg" alt="Description of the image">'} classes={'pad'} />

      <h2 className='fs-7 mgt-8 mgb--4'>Key Attributes of img Tag</h2>
      {
        data.attributes.map((item, i) => (
          <Fragment key={i}>
            <h3 className='mgt-8 mgb-2'>{i + 1}. The <code>{item.attr}</code> attribute</h3>
            <p className="fw-5 mgb-1 lh-2 mgl-5">{item.desc}</p>

            <InlineSyntaxHighlight lang={'html'} code={item.ex} classes={"mgl-6 pad"}/>
          </Fragment>
        ))
      }

      <h2 className='fs-7 mgt-8 mgb-4'>Responsive Images</h2>
      {
        data.RImage.map((item, i) => (
          <Fragment key={i}>  
            {item.tag 
            ? <h3 className='mgt-8 mgb-2'>The <InlineSyntaxHighlight lang={'html'} code={`<${item.tag}>`} /> tag</h3>
            : <h3 className='mgt-8 mgb-2'>The <code>{item.attr}</code> attribute</h3>}
            <p className="fw-5 mgb-1 lh-2 mgl-5">{item.desc}</p>

            {item.ex.includes('<') 
            ? <InlineSyntaxHighlight lang={'html'} code={item.ex} classes={"mgl-6 pad"} />
            : <CodePlayground code={{html: Img[item.ex]}} classes={"mgl-4"} langs={'HTML'} />}
          </Fragment>
        ))
      }
    </>
  )
}

export default Images;
