import { Fragment } from "react";
import SyntaxHighlight from "../../../../components/syntaxHighlight/SyntaxHighlight";

function Attribute({data, FormCode}) {
  return (
    <>
      <div className="form-attribute mgb-5">
        <h2 className="fs-7 mgt-8 mgb-4">Form Attributes</h2>
        {
          data.map((item, index) => (
            <Fragment key={index}>
              <p className="fw-5 mgb-1 lh-2 mgt-6 mgb-3"><strong>{item.attr}</strong>: {item.desc}</p>
              {item.options && 
                item.options.map((option, optIndex) => (
                  <p key={optIndex} className="fw-5 mgb-1 lh-2 mgl-4 mgt-1"><strong><code>{option.title}</code></strong>: {option.desc}</p>
                ))
              }
            </Fragment>
          ))
        }
      <SyntaxHighlight code={FormCode} restriction={'noEdit noResult'} classes={'mgt-5'}/>
      </div>
    </>
  )
}

export default Attribute;
