import data from '../data/3d-Transform.json';
import { threeDTransform } from '../data/codes';
import CodePlayGround from '../../../../components/syntaxHighlight/CodePlayground';


function Transform() {
  return (
    <>
     <h1 className='fs-10 mgb-8'>3D Transforms</h1> 
     <p className='fw-5 mgb-1 lh-2'>3D transforms in CSS extend 2D transforms by adding a third axis: the Z-axis. This allows you to create more complex and visually engaging effects by rotating, scaling, or translating elements in 3D space, giving the illusion of depth.</p>

      {
        data.map((item, i) => (
          <div key={i}>
            <h2 className='fs-7 mgt-10 mgb-4'>{item.title}</h2>
            { item.desc && <p className='fw-5 mgb-1 lh-2' dangerouslySetInnerHTML={{ __html: item.desc }}></p>}
            {
              item.params?.map((param, i) => (
                <p key={i} className='fw-5 mgb-1 lh-2 mgl-4' dangerouslySetInnerHTML={{ __html: `<code>${param.name}</code>: ${param.desc}` }}></p>
              ))
            }
            {
              item.funcs?.map((func, i) => (
                <div key={i}>
                  <h3 className={i === 0 ? 'mgt-8 mgb-2' : 'mgt-10 mgb-2'}>{i+1}. The <code>{func.title}</code> Function</h3>
                  { func.desc && <p className='fw-5 mgb-1 lh-2' dangerouslySetInnerHTML={{ __html: func.desc }}></p> }
                  { func.descs &&
                    func.descs.map((desc, i) => (
                      <p key={i} className='fw-5 mgb-1 lh-2' dangerouslySetInnerHTML={{ __html: desc }}></p>
                    ))
                  }
                  <CodePlayGround code={{css: threeDTransform[func.example].css, html: threeDTransform[func.example].html}} langs={'CSS HTML'} classes={'mgt-4'} />
                </div>
              ))
            }
            {
              item?.props &&
              <div>
                <h3 className='mgt-6 mgb-2'>Properties:</h3>
                {
                  item.props?.map((prop, i) => (
                    <div key={i}>
                      <p key={i} className={i === 0 ? 'fw-5 mgb-1 lh-2 mgt-4' : 'fw-5 mgb-1 lh-2' } dangerouslySetInnerHTML={{ __html: `${i+1}. <code>${prop.name}</code>: ${prop.desc}` }}></p>
                      { prop.example &&  <CodePlayGround code={{css: threeDTransform[prop.example].css, html: threeDTransform[prop.example].html}} langs={'CSS HTML'} classes={'mgb-7'} /> }
                    </div>
                  ))
                }
              </div>
            }
            { item.example && <CodePlayGround code={{css: threeDTransform[item.example].css, html: threeDTransform[item.example].html}} langs={'CSS HTML'} classes={'mgt-3'} /> }
            { item.explain && <p className='fw-5 mgt-6 lh-2'>{item.explain}</p> }
          </div>
        ))
      }
    </>
  )
}

export default Transform
