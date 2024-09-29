import data from './data/flex-box.json';
import { flexBoxCode } from './data/codes';
import CodePlayground from '../../../components/syntaxHighlight/CodePlayground';

function FlexBox() {
  return (
    <>
      <h1 className='fs-10 mgb-8'>CSS Flexbox</h1>
      <p className='fw-5 mgb-1 lh-2'>Flexbox is a layout model in CSS that makes easier to manage complex layouts and align elements within a container.</p>

      <div>
        <h2 className='fs-7 mgt-8 mgb-5'>Basic Concepts</h2>
        {
          data.intro.map((item, i) => (
            <div key={i} className={item.title.toLocaleLowerCase().replace(' ', '-')}>
              <h3 className='mgt-8 mgb-2'>{i+1}. {item.title}</h3>
              <p className='fw-5 mgb-1 lh-2' dangerouslySetInnerHTML={{ __html: item.desc }}></p>
              { item.example && <CodePlayground code={{css: flexBoxCode[item.example]}} langs={'CSS'} restriction={'noEdit noResult'} />}
            </div>
          ))
        }
      </div>

      <div>
        <h2 className='fs-7 mgt-8 mgb-3'>Flex Container Properties</h2>
        {
          data.contaninerProps.map((item, i) => (
            <div key={i} className={item.prop.toLocaleLowerCase()}>
              <h3 className='mgt-8 mgb-2'>{i+1}. The <code>{item.prop}</code> property</h3>
              <div className='mgl-5'>
                <p className='fw-5 mgb-4 lh-2' dangerouslySetInnerHTML={{ __html: item.desc }}></p>
                {
                  item.values &&
                  <>
                    <h4 className='mgt-4 mgb-2'>Values:</h4>
                    {
                      item.values.map((value, i) => (
                        <p key={i} className='fw-5 mgb-1 lh-2 mgt-3 mgl-5' dangerouslySetInnerHTML={{ __html: `<span><b>${value.value}</b></span>${value.desc}`}}></p>
                      ))
                    }
                  </>
                }
              </div>
              {
                item.example &&
                <CodePlayground code={{css: flexBoxCode[item.example]}} langs={'CSS'} classes={'mgl-7 mgt-5'} restriction={'noResult noEdit'} />
              }
            </div>
          ))
        }
      </div>

      <div>
        <h2 className='fs-7 mgt-8 mgb-4'>Flex Item Properties</h2>
        {
          data.itemProps.map((item, i) => (
            <div key={i}>
              <h3 className='mgt-6 mgb-2'>{i+1}. The <code>{item.prop}</code> property</h3>
              <p className='fw-5 mgb-1 lh-2 mgl-5' dangerouslySetInnerHTML={{ __html: item.desc }}></p>
              <CodePlayground code={{css: flexBoxCode[item.example]}} langs={'CSS'} restriction={'noResult noEdit'} classes={'mgl-5'} />
            </div>
          ))
        }
      </div>
    </>
  )
}

export default FlexBox;
