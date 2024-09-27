import { gridCode } from './data/codes';
import data from './data/grid.json';
import SHighlight from './Higlight/SHighlight';

function Grid() {
  return (
    <>
      <h1 className='fs-10 mgb-8'>CSS Grid</h1>
      <p className='fw-5 mgb-1 lh-2'>CSS Grid is a powerful layout system that provides a more efficient way to create complex web layouts compared to traditional methods like floats.</p>

      <p className='fw-5 mgb-1 lh-2 mgt-5'><b>Grid Container</b>: An element with <code>display</code> property is <code>grid</code> or <code>inline-grid</code>. It defines the grid context for its children.</p>
      <p className='fw-5 mgb-1 lh-2 mgt-2'><b>Grid Item</b>: A child element of a grid container. These items are placed into grid cells.</p>
    
      {
        data.g.map((item, i) => (
          <div key={i}>
            <h2 className='fs-7 mgt-10 mgb-4'>{item.title}</h2>
            {item.desc && <p className='fw-5 mgb-1 lh-2' dangerouslySetInnerHTML={{ __html: item.desc }}></p>}
            {item.example && <SHighlight code={gridCode[item.example]} /> }
            {item.desc1 && <p className='fw-5 mgb-1 lh-2 mgt-6'>{item.desc1}</p>}
            {item.example1 && <SHighlight code={gridCode[item.example1]} />}
            { item.subHead
              ? item.subHead.map((sub, i) => (
                <div key={i} className={sub.title.toLocaleLowerCase().replace(' ', '-')}>
                  <h3 className='mgt-7 mgb-2'>{sub.title}</h3>
                  <SHighlight code={gridCode[sub.example]} />
                </div>
              ))
              : item.subBold
              && item.subBold.map((subBold, i) => (
                <div key={i} className={subBold.bold.toLocaleLowerCase().replace(' ', '-')} >
                  <p className='fw-5 mgb-2 lh-2' dangerouslySetInnerHTML={{ __html: `<b>${subBold.bold}</b>: ${subBold.desc}` }}></p>
                  {subBold.example && <SHighlight code={gridCode[subBold.example]} classes={'mgb-5'} />}
                </div>
              ))
            }
          </div>
        ))
      }
    </>
  )
}

export default Grid;
