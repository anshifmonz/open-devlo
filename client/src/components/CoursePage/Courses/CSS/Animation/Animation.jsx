import data from '../data/animation.json';
import { animationCode } from '../data/codes'
import SHighlight from '../Higlight/SHighlight';
function Animation() {
  return (
    <>
      <h1 className='fs-10 mgb-8'>CSS Animation</h1>
      <p className='fw-5 mgb-1 lh-2'>CSS animations bring web pages to life by dynamically changing element styles over time, enhancing user experience with smooth transitions and effects. There are two main ways to create animations in CSS.</p>

      {
        data.map((item, i) => (
          <div>
            <h2 className='fs-7 mgt-8 mgb-4'>{item.title}</h2>
            <p className='fw-5 mgb-1 lh-2' dangerouslySetInnerHTML={{ __html: item.desc }}></p>
            <h3 className='mgt-6 mgb-2'>{item.sHead}</h3>
            <SHighlight code={animationCode[item.syntax]} classes={'mgb-5'} restriction={'noResult noEdit noCopy'} />
            { item.values &&
              item.values.map((item, i) => (
                <p key={i} className='fw-5 mgb-2 lh-2' dangerouslySetInnerHTML={{ __html: `<b>${item.title}</b>: ${item.desc}` }}></p>
              ))
            }
            { item.desc1 && <p className='fw-5 mgb-1 lh-2'>{item.desc1}</p> }
            <h3 className='mgt-8 mgb-2'>Example:</h3>
            <SHighlight code={animationCode[item.example]} />
            <p className='fw-5 mgb-1 lh-2 mgt-5' dangerouslySetInnerHTML={{ __html: item.explain }}></p>
          </div>
        ))
      }
    </>
  )
}

export default Animation;
