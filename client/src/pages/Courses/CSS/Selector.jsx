import data from './data/selector.json'
import { selectorCode } from './data/codes';
import SyntaxHighlight from './Higlight/SHighlight';

function Selector() {
  return (
    <>
      <h1 className='fs-10 mgb-8'>{data.title}</h1>
      <p className='fw-5 mgb-1 lh-2'>{data.desc}</p>

      {
        data.selectors.map((selector, i) => (
          <div className={selector.title.split(' ').slice(0, 2).join(' ')}>
            {
              !selector.code.includes('1') 
              && <h3 className='fs-6 mgt-8 mgb-4' dangerouslySetInnerHTML={{__html: selector.title}}></h3>
            }
            <p className={selector.code.includes('1') ? 'fw-5 mgb-1 lh-2 mgt-6' : 'fw-5 mgb-1 lh-2' }>{selector.desc}</p>
            <SyntaxHighlight code={selectorCode[selector.code]} restriction={'noEdit noResult'} />
          </div>
        ))
      }

      <h3 className='fs-6 mgt-8 mgb-4'>CSS Specificity</h3>
      <p className='fw-5 mgb-1 lh-2 mgb-5'>When multiple rules target the same element, CSS uses specificity to determine which rule to apply. Specificity is calculated based on the types of selectors used.</p>
      <p className='fw-5 mgb-1 lh-2 mgl-4'><strong>ID selectors </strong>have the highest specificity</p>
      <p className='fw-5 mgb-1 lh-2 mgl-4'><strong>Class selectors </strong>and <strong>Attribute selectors</strong> come next.</p>
      <p className='fw-5 mgb-1 lh-2 mgl-4'><strong>Type selectors </strong>have the lowest specificity.</p>
    </>
  )
}

export default Selector;
