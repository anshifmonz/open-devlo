import data from '../data/2d-Transform.json';
import { twoDTransfrom } from '../data/css';
import InlineSyHiglight from '../Higlight/InlineSyHiglight';
import SHighlight from '../Higlight/SHighlight';

function Transform() {
  return (
    <>
      <h1 className='fs-10 mgb-8'>2D Transforms</h1>
      <p className='fw-5 mgb--4 lh-2'>CSS <b>2D Transforms</b> allows to modify the position, size, shape, and orientation of an element on the X and Y axes. This capability makes it possible to translate, rotate, scale, and skew elements within two-dimensional space, creating dynamic and engaging layouts.</p>

      {
        data.map((item, i) => (
          <div key={i}>
            <h2 className='fs-7 mgt-10 mgb-4'>{item.title}</h2>
            <p className='fw-5 mgb-1 lh-2' dangerouslySetInnerHTML={{ __html: item.desc }}></p>
            <h3 className='mgt-6 mgb-2'>Syntax</h3>
            <InlineSyHiglight code={item.syntax} />
            <div key={i} className='mgt-4 mgl-4'>
              {
                item.params?.map((param, i) => (
                  <p key={i} className='fw-5 mgb-1 lh-1' dangerouslySetInnerHTML={{ __html: `<code>${param.name}</code>: ${param.desc}` }}></p>
                ))
              }
            </div>
            <SHighlight code={twoDTransfrom[item.example]} classes={'mgt-6'} />
          </div>
        ))
      }
    </>
  )
}

export default Transform;
