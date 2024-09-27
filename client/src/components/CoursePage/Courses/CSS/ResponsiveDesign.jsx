import data from './data/responsive-design.json';
import SHighlight from './Higlight/SHighlight';
import InlineSyntax from '../../syntaxHighlight/InlineSyntax';
import { responsiveDesignCode } from './data/css';

function ResponsiveDesign() {
  return (
    <>
      <h1 className='fs-10 mgb-7'>Responsive design</h1>
      <p className='fw-5 mgb-1 lh-2'>Responsive design ensures websites function well on all devices, from desktops to mobile screens, by adapting layouts to various screen sizes and orientations.</p>

      {
        data.map((item, i) => (
          <div key={i}>
            <h2 className='fs-7 mgt-10 mgb-4'>{item.title}</h2>
            <p className='fw-5 mgb-2 lh-2' dangerouslySetInnerHTML={{ __html: item.desc }}></p>
            {
              item?.points &&
              <div className='mgb-4 mgt-5'>
                {
                  item.points.map((point, i) => (
                    <p key={i} className='fw-5 mgb-1 lh-2' dangerouslySetInnerHTML={{ __html: `<b>${point.name}</b>: ${point.desc}` }}></p>
                  ))
                } 
              </div>
            }
            { item?.syntax && <InlineSyntax code={responsiveDesignCode[item.syntax]} /> }
            { item?.example && <SHighlight code={responsiveDesignCode[item.example]} /> }
            { item?.extra && <p className='fw-5 mgb-1 lh-2 mgt-7' dangerouslySetInnerHTML={{ __html: item.extra }}></p> }
          </div>
        ))
      }
    </>
  )
}

export default ResponsiveDesign;
