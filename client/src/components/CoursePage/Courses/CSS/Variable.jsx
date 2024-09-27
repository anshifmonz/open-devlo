import data from './data/variable.json';
import { variableCode } from './data/css';
import SHighlight from './Higlight/SHighlight';
import InlineSyHiglight from './Higlight/InlineSyHiglight';
import { Fragment } from 'react';

function Variable() {
  return (
    <>
      <h1 className='fs-10 mgb-8'>CSS Variables</h1>
      <p className='fw-5 mgb--4 lh-2'>CSS variables allows to store values and reuse them throughout your CSS. They enable better maintainability and flexibility by allowing centralized control of values.</p>

      {
        data.map((item, i) => (
          <div key={i}>
            <h2 className='fs-7 mgt-10 mgb-6'>{item.title}</h2>
            <p className='fw-5 mgb-1 lh-2' dangerouslySetInnerHTML={{ __html:item.desc }}></p>
            {
              item?.subHead && item.subHead.map((sub, i) => (
                <div key={i}>
                  <h3 className={i === 0 ? 'mgt-4 mgb-2' : 'mgt-8 mgb-2'}>{sub.title}</h3>
                  <SHighlight code={variableCode[sub.example]} classes={'mgt-4 mgb-6'} />
                  {
                    sub?.explains && sub.explains.map((explain, i) => (
                      typeof explain === 'object' && explain.syntax
                      ? <InlineSyHiglight code={explain.syntax} />
                      : <p key={i} className='fw-5 mgb-5 lh-2 mgt-2' dangerouslySetInnerHTML={{ __html: explain }}></p>
                    )) 
                  }
                  { sub?.explain && <p className='fw-5 mgb-1 lh-2' dangerouslySetInnerHTML={{ __html: sub.explain }}></p> }
                </div>
              ))
            }
            {
              item?.points &&
              <div className='mgt-5'>
                {
                  item.points.map((point, i) => (
                    <Fragment key={i}>
                      <p className='fw-5 mgb-1 lh-2' dangerouslySetInnerHTML={{ __html: `<b>${point.title}</b>: ${point.desc}` }}></p>
                      { point?.example && <SHighlight code={variableCode[point.example]} classes={'mgt-5'} /> }
                    </Fragment>
                  ))
                }
              </div>
            }
            { item?.syntax && <InlineSyHiglight code={item.syntax} /> }
            { item?.example && <SHighlight code={variableCode[item.example]} /> }
            { item?.explain && <p className='fw-5 mgb-1 lh-2 mgt-6' dangerouslySetInnerHTML={{ __html: item.explain }}></p> }
          </div>
        ))
      }
    </>
  )
}

export default Variable;
