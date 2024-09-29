import data from '../data/keyframes.json';
import { keyframesCode } from '../data/codes';
import CodePlayGround from '../../../../components/syntaxHighlight/Updates/CodePlayground';
import InlineSyHiglight from '../Higlight/InlineSyHiglight';
import { Fragment } from 'react';

function Keyframes() {
  return (
    <>
      <h1 className='fs-10 mgb-8'>CSS Keyframes</h1>
      <p className='fw-5 mgb-1 lh-2'>CSS <b>keyframes</b> define style changes at specific points during an animation, enabling dynamic transitions like movement, rotation, scaling, and fading.</p>

      {
        data.map((item, i) => (
          <div key={i}>
            <h2 className='fs-7 mgt-8 mgb-4' dangerouslySetInnerHTML={{ __html: item.title }}></h2>
            <p className='fw-5 mgb-2 lh-2' dangerouslySetInnerHTML={{ __html: item.desc }}></p>
            { item?.properties && item.properties.map((item, i) => (
              <Fragment key={i}>
                <p className={i === 0 ? 'fw-5 mgb-2 lh-2 mgt-4' : 'fw-5 mgb-2 lh-2 mgt-7'}>{i+1}. <code>{item.name}</code>: {item.desc}</p>
                { item?.values && item.values.map((value, i) => (
                  <p className='fw-5 mgb-1 lh-2 mgl-4'><b>{value.name}</b>: {item.desc}</p>
                ))}
                {
                  item?.examples
                  ? item.examples.map((ex, i) => (
                    <Fragment key={i}>
                      <p className='fw-5 mgb-1 lh-2 mgl-4'><InlineSyHiglight code={`${ex}`} /><br /></p>
                    </Fragment>
                    ))
                  : <p className='fw-5 mgb-1 lh-2 mgl-4'><InlineSyHiglight code={item.example} /></p>
                }
              </Fragment>
              )) 
            }
            { item.example && <CodePlayGround code={{css: keyframesCode[item.example]}} langs={'CSS'} /> }
            { item.explain && <p className='fw-5 mgb-1 lh-2 mgt-5' dangerouslySetInnerHTML={{ __html: item.explain }}></p> }
            { item.explains && item.explains.map((item, i) =>  (
                <p key={i} className='fw-5 mgb-1 lh-2'><code>{item.name}</code>: {item.desc}</p>
              )) 
            }
          </div>
        ))
      }
    </>
  )
}

export default Keyframes;
