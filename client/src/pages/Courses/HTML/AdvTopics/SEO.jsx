import InlineSyntaxHighlight from '../../../../components/syntaxHighlight/InlineSyntax';
import CodePlayground from '../../../../components/syntaxHighlight/Updates/CodePlayground';
import data from '../data/seo.json';
import {SEOCode} from '../data/html';
import { Fragment } from 'react';

function SEO() {
  return (
    <div>
      <h1 className='fs-10 mgb-7'>{data.title}</h1>
      <p className='fw-5 mgb-1 lh-2'>{data.desc}</p>

      {
        data.methods.map((method, i) => (
          <Fragment key={i}>
            <h2 className='fs-7 mgt-8 mgb-5'>{i + 1}. {method.title}</h2>
            <p className='fw-5 mgb-1 lh-2'>{method.desc}</p>
            <ul className='fw-5 mgb-4 lh-2 mgl-5 mgt-3'>
              {
                method.consider.map((tip, i) => (
                  <li key={i}><span dangerouslySetInnerHTML={{__html: tip}}></span></li>
                ))
              }
            </ul>
            {
              method.code.includes('Sitemap') 
              ? <p className='fw-5 mgb-1 lh-2 mgl-2' dangerouslySetInnerHTML={{__html: method.code}}></p>
              : method.code.includes('<') 
              ? <InlineSyntaxHighlight lang={'html'} code={method.code} classes={'mgl-1 pad'}/>
              : <CodePlayground code={{html: SEOCode[method.code]}} classes={'mgt-4'} restriction={'noEdit'} langs={'HTML'} />
            }
          </Fragment>
        ))
      }
    </div>
  )
}

export default SEO;
