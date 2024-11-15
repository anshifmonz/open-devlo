import data from './data/background.json';
import { backgroundCode } from './data/codes';
import InlineSyntaxHiglight from '../../../components/syntaxHighlight/InlineSyntax';
import CodePlayground from '../../../components/syntaxHighlight/CodePlayground';

function Background() {
  return (
    <div>
      <h1 className='fs-10 mgb-8'>CSS Background</h1>
      <p className='fw-5 mgb-1 lh-2'>The background properties allow you to control the background color, image, position, and other aspects of an element's background</p>
    
      {
        data.properties.map((property, i) => (
          <div key={i} className={property.name.toLowerCase().replace(' ', '-')}>
            <h2 className='fs-7 mgt-8 mgb-3'>{property.name}</h2>
            <p className='fw-5 mgb-1 lh-2' dangerouslySetInnerHTML={{__html: property.desc}}></p>
            {
              property.code
              ? <InlineSyntaxHiglight lang={'css'} code={property.code} />
              : property.SyCode
              && <CodePlayground code={{css: backgroundCode[property.SyCode].css, html: backgroundCode[property.SyCode].html }} langs={'CSS HTML'} classes={'mgt-5 mgb--2'} />
            }
            {
              property.values &&
              <>
                <h3 className='mgt-5 mgb-2'>Values:</h3>
                {property.valueDesc && <p className='fw-5 mgb-3 lh-2'>{property.valueDesc}</p> }
                {  
                  property.values.map((value, i) => (
                    !value.desc
                    ? <p key={i} className='fw-5 mgb-2 lh-2 mgl-6' dangerouslySetInnerHTML={{__html: `<b>-</b> ${value.value}`}}></p>
                    : <p key={i} className='fw-5 mgb-2 lh-2 mgl-6'><code>{value.value}</code>: {value.desc}</p>
                  ))
                }
              </>
            }
            {property.extraDesc && <p className='fw-5 mgb-1 lh-2 mgt-5' dangerouslySetInnerHTML={{__html: property.extraDesc}}></p> }
            {property.extraCode && <InlineSyntaxHiglight lang={'css'} code={property.extraCode} /> }
          </div>
        ))
      }
    </div>
  )
}

export default Background;
