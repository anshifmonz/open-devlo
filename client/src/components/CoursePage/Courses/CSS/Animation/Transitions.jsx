import data from '../data/transition.json';
import SHighlight from '../Higlight/SHighlight';
import { transitionCode } from '../data/css';

function Transitions() {
  return (
    <>
     <h1 className='fs-10 mgb-8'>CSS Transition</h1> 
     <p className='fw-5 mgb-1 lh-2'>CSS transitions allows to change the value of a property over a specified duration, creating smooth animations between two states. Transitions are easy to implement, gives a visually appealing way to make web elements interactive.</p>
    
      {
        data.transition.map((item, i) => (
          <div key={i} className={item.title.toLocaleLowerCase().replace(' ', '-')}>
            <h2 className='fs-7 mgt-8 mgb-4' dangerouslySetInnerHTML={{ __html: item.title }}></h2>
            <p className='fw-5 mgb-1 lh-2' dangerouslySetInnerHTML={{ __html: item.desc }}></p>
            {item?.points && 
              <ul className='mgl-6 mgb-5'>
                {
                  item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))
                }
              </ul>  
            }
            {
              item?.bold && 
                <div key={i} className='mgl-5 mgt-5 mgb-3'>
                  {item.bold.map((item, i) => (
                    <p className='fw-5 mgb-2 lh-2'><b>{item.bold}</b>: {item.desc}</p>
                  ))}
                </div>
            }
            <SHighlight code={transitionCode[item.example]} />
            {
              item?.bold1 && <div key={i} className='mgt-5 mgb-3'>
                {item.bold1.map((item, i) => (
                  <p className='fw-5 mgb-2 lh-2'><b>{item.bold}</b>: {item.desc}</p>
                ))}
            </div>
            }
            {item?.additional && <p className='fw-5 mgb-1 lh-2 mgt-7' dangerouslySetInnerHTML={{ __html: item.additional }}></p>}
          </div>
        ))
      }
    </>
  )
}

export default Transitions;
