import { Fragment } from 'react'
import CodePlayground from '../../../components/syntaxHighlight/Updates/CodePlayground';
import InlineSyntaxHighlight from '../../../components/syntaxHighlight/InlineSyntax';
import data from './data/Links.json'
import { LinksCode } from './data/html'

function Links() {
  return (
    <>
      <h1 className='fs-10 mgb-6'>HTML Links</h1> 
      <p className="fw-5 mgb-1 lh-2">HTML links are used to create hyperlinks that connect web pages or resources.</p>

      <p id='attributes-of-anchor-tag' className='fw-5 mgb-1 lh-2 mgt-2'>The anchor tag <InlineSyntaxHighlight lang={'html'} code={"<a>"} /> creates hyperlinks. The `href` attribute specifies the URL of the page or resource the link points to.</p>
      <InlineSyntaxHighlight lang={'html'} code={`<a href="https://www.example.com">Visit Example</a>`} classes={'pad'} />
    
      <h2 className='fs-7 mgt-8 mgb--4'>Attributes of Anchor Tag</h2>
      {
        data.map((item, index) => (
          item.type ? null :
          item.values 
          ? <Fragment key={index}>
              <p className='fw-5 mgb-1 lh-2 mgt-6'>{index + 1}. <b><code>{item.attr}</code>:</b> {item.def}</p>
              <ul className='mgl-8 mgb-2'>
                  {item.values.map((value, index) => (
                    value.childrens 
                    ? <Fragment key={index}>
                        <p className='fw-5 mgb-1 lh-2 mgt-4'><b><code>{value.name}</code></b>: {value.desc}</p>
                        <p className='fw-5 mgb-1 lh-2 mgl-3'>Use cases:</p>
                        {
                          value.childrens.map((child, index)=> (
                            <p className='fw-5 mgb-1 lh-2 mgl-6' key={index}>{child}</p>
                          ))
                        }
                      </Fragment>
                    : <li key={index} style={{marginBottom: ".5rem"}}><b>{value.name}:</b> {value.desc}</li>
                  ))}
              </ul>
              <InlineSyntaxHighlight lang={'html'} code={item.code} classes={"mgl-6 pad"}/>
            </Fragment>
          : <Fragment key={index}>
              <p className='fw-5 mgb-1 lh-2 mgt-8'>{index + 1}. <b><code>{item.attr}</code>:</b> {item.def}</p>
              <InlineSyntaxHighlight lang={'html'} code={item.code} classes={"mgl-6 pad"}/>
            </Fragment>
        ))
      }

      <h2 className='fs-7 mgt-8 mgb-4'>Linking to Different Types of Resources</h2>

      {
        data.map((item) => (
          item.type &&
          <Fragment key={item.id}>
            <p className='fw-5 mgb-1 lh-2' style={item.id !== 0 ? {marginTop: "2rem"} : null}>{item.id + 1}. <b>{item.heading}</b></p>
            <p className='fw-5 mgb-1 lh-2 mgl-6'>{item.def}</p>
            <InlineSyntaxHighlight lang={'html'} code={item.code} classes={"mgl-6 pad"}/>
          </Fragment>
        ))
      }

      <h3 className='mgt-8 mgb-2'>Example Combining Various Link Types</h3>

      <CodePlayground code={{html: LinksCode.allTogether}} langs={'HTML'} />
    </>
  )
}

export default Links;
