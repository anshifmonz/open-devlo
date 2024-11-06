import data from './data/positioning.json';
import { positionCode } from './data/codes';
import CodePlayground from '../../../components/syntaxHighlight/CodePlayground';

function Positioning() {
  return (
    <>
      <h1 className='fs-10 mgb-8'>CSS Positioning</h1>
      <p className='fw-5 mgb-1 lh-2'>Positioning in CSS is essential for controlling the layout and visual arrangement of elements on a webpage. There are several CSS positioning methods, each serving different purposes.</p>

      {
        data.methods.map((item, i) => (
          <div className={item.title.toLocaleLowerCase().replace(' ', '-') + ' mgt-8'}>
            <h2 className='fs-7 mgb-4'>{item.title}</h2>
            <p className='fw-5 mgb-2 lh-2' dangerouslySetInnerHTML={{ __html: item.desc }}></p>
            <CodePlayground code={{css: positionCode[item.example].css, html: positionCode[item.example].html}} langs={'CSS HTML'} extraCss={item.example === 'sticky' && 'body {height: 200vh !important; overflow-y: scroll !important}'} />
          </div>
        ))
      }
    </>
  )
}

export default Positioning;
