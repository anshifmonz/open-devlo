import { Fragment } from "react";

import InlineSyntaxHighlight from "../../../../components/syntaxHighlight/InlineSyntax"
import CodePlayground from "../../../../components/syntaxHighlight/CodePlayground";
import data from '../data/Meta.json';
import { MetaTag } from '../data/html';

function Meta() {
  return (
    <>
      <h1 className='fs-10 mgb-8'>Meta Tag</h1>
      <p className='fw-5 mgb-1 lh-2'>Meta tags provide metadata (information about data) to the browser and search engines. They are typically used in the <InlineSyntaxHighlight lang={'html'} code={"<head>"} /> section of an HTML document and help with SEO, page rendering, and content descriptions.</p> 
    
      <h2 className='fs-7 mgt-8 mgb-4'>Basic Structure</h2>
      <p className="fw-5 mgb-1 lh-2">Meta tags are self-closing and look like this:</p>
      <InlineSyntaxHighlight lang={'html'} code={'<meta name="description" content="This is an example of a meta tag.">'} classes={'pad'} />
    
      <div className="meta-attributes">
        {
          data.sections.map((item, i) => (
            <Fragment key={i}>
              <h2 className="fs-7 mgt-8 mgb-4">{item.title}</h2>
              {
                item.Attrs ?
                item.Attrs.map((attr, j) => (
                  <Fragment key={j}>
                    <h3 className='mgt-8'>{i + 1}. {attr.attr}</h3>
                    <p className="fw-5 mgb-1 lh-2 mgl-5 mgt-1">{attr.desc}</p>
                    <InlineSyntaxHighlight lang={'html'} code={attr.ex} classes={"mgl-5 pad"} />
                  </Fragment>
                ))
                : <>
                    <p className="fw-5 mgb-1 lh-2">{item.desc}</p>
                    {
                      item.SyCode 
                      ? <CodePlayground code={{html: MetaTag[item.SyCode]}} classes={'mgt-2'} restriction={'noEdit noResult'} langs={'HTML'} />
                      : <InlineSyntaxHighlight lang={'html'} code={item.InCode} classes={'mgt-2 pad'} />
                    }
                  </>
              }
            </Fragment>
          ))
        }
      </div>
    </>
  )
}

export default Meta
