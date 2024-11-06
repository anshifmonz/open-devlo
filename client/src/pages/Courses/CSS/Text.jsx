import data from './data/text.json';
import { textCode } from './data/codes';
import InlineSyntaxHighlight from '../../../components/syntaxHighlight/InlineSyntax';
import CodePlayground from '../../../components/syntaxHighlight/CodePlayground'

function Text() {
  return (
    <>
      <h1 className='fs-10 mgb-8'>{data.title}</h1>
      <p className='fw-5 mgb-1 lh-2'>{data.desc}</p>

      {
        data.methods.map((method, i) => (
          <div className={method.title} key={i}>
            <h2 className='fs-7 mgt-8 mgb-4'>{method.title}</h2>
            {
              method.properties.map((property, i) => (
                <div className='property' key={i}>
                  <p className='fw-5 mgb-1 lh-2 mgt-6'><strong><code>{property.name}</code>: </strong>{property.desc}</p>
                  {
                    property.name === 'Media Queries'
                    ? <CodePlayground code={{css: textCode[property.code].css, html: textCode[property.code].html }} langs={'CSS HTML'} />
                    : <InlineSyntaxHighlight lang={'css'} code={property.code} />                  
                  }
                </div>
              ))
            }
          </div>

        ))
      }
      <div className="Typography Tips">
        <h2 className='fs-7 mgt-8 mgb-4'>Typography Tips</h2>
        <p className='fw-5 mgb-1 lh-2'><strong>Use relative units: </strong>like <code>em</code> or <code>rem</code> for font sizes to ensure better scalability.</p>
        <p className='fw-5 mgb-1 lh-2'><strong>Limit the number of fonts: </strong>to keep loading times fast and design cohesive.</p>
        <p className='fw-5 mgb-1 lh-2'><strong>Hierarchy: </strong>Use different font sizes and weights to create a clear hierarchy and improve readability.</p>
      </div>
    </>
  )
}

export default Text;
