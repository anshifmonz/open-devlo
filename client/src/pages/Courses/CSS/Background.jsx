import data from './data/background.json';
import { backgroundCode } from './data/codes';
import InlineSyHiglight from './Higlight/InlineSyHiglight';
import CodePlayground from '../../../components/syntaxHighlight/Updates/CodePlayground';

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
              ? <InlineSyHiglight code={property.code} />
              : property.SyCode
              && <CodePlayground code={{css: backgroundCode[property.SyCode]}} langs={'CSS'} restriction={'noEdit noResult'} classes={'mgt-5 mgb--2'} />
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
            {property.extraCode && <InlineSyHiglight code={property.extraCode} /> }
          </div>
        ))
      }
    </div>
  )
}

export default Background;
