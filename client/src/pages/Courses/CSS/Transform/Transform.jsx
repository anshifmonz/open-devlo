import data from '../data/transform.json';
import { transformCode } from '../data/codes';
import CodePlayGround from '../../../../components/syntaxHighlight/CodePlayground';

function Transform() {
  return (
    <>
      <h1 className='fs-10 mgb-8'>CSS Transform</h1>
      <p className='fw-5 mgb-1 lh-2'>CSS transforms modify an element's appearance and position through translation, rotation, scaling, and skewing. 3D transforms add depth, creating 3D visual effects.</p>

      {
        data.map((item, i) => (
          <div key={i}>
            <h2 className='fs-7 mgt-8 mgb-4'>{item.title}</h2>
            <p className='fw-5 mgb-2 lh-2' dangerouslySetInnerHTML={{ __html: item.desc }}></p>
            <CodePlayGround code={{css: transformCode[item.example].css, html: transformCode[item.example].html}} langs={'CSS HTML'} />
            <p className='fw-5 mgt-6 lh-2'>For more detail about {item.title}, See <a href={item.link}>here</a></p>
          </div>
        ))
      }
    </>
  )
}

export default Transform;
