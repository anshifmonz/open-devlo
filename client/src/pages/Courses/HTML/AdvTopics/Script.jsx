import data from '../data/script.json';
import InlineSyntaxHighlight from '../../../../components/syntaxHighlight/InlineSyntax';
import CodePlayground from '../../../../components/syntaxHighlight/CodePlayground';

function Script() {

  return (
    <>
      <h1 className='fs-10 mgb-8'>{data.title}</h1>
      <p className='fw-5 mgb-1 lh-2'>{data.desc}</p>
      {
        data.sections.map((section, i) => (
          <div key={i}>
            <h2 className='fs-7 mgt-8'>{section.title}</h2>
            {
              section.subsections 
              ? section.subsections.map((sub, i) => (
                <div key={i}>
                  <h3 className='mgt-8 mgb-2'>{sub.title}</h3>
                  <p className='fw-5 mgb-1 lh-2'>{sub.desc}</p>
                  <InlineSyntaxHighlight lang={'html'} code={sub.code} classes={'pad'} />
                </div>
              ))
              : section.attributes
              ? section.attributes.map((attr, i) => (
                <div key={i}>
                  <h3 className='mgt-8 mgb-2'>The <code>{attr.name}</code> Attribute</h3>
                  <p className='fw-5 mgb-1 lh-2'>{attr.desc}</p>
                  <InlineSyntaxHighlight lang={'html'} code={attr.code} classes={'pad'} />
                </div>
              ))
              : section.practices.map((practice, i) => (
                <div key={i}>
                  <h3 className='mgt-8 mgb-2'>{practice.title}</h3>
                  <p className='fw-5 mgb-1 lh-2'>{practice.desc}</p>
                  {
                    practice.code &&
                    <CodePlayground code={{html: practice.code}} classes={'pad'} restriction={'noEdit noResult'} langs={'HTML'} />
                  }
                </div>
              ))
            }
          </div>
        ))
      }
    </>
  )
}

export default Script;
