import { Fragment } from "react";
import InlineSyntaxHighlight from "../../../../components/syntaxHighlight/InlineSyntax";
import CodePlayground from "../../../../components/syntaxHighlight/Updates/CodePlayground";

function Elements({textInput, textAButton, FormCode}) {
  return (
    <div className="form-element">
      <h2 className="fs-7 mgt-8 mgb-4">Form Elements</h2>

      <h3 className='mgt-8 mgb-2'>1. Text Input</h3>
      <p className="fw-5 mgb-1 lh-2 mgt-4 mgl-4"><b><InlineSyntaxHighlight code={'<input type="text" name="username" placeholder="Enter your username">'} /></b>: Creates a single-line text input field.</p>
      <p className="fw-5 mgb-1 lh-2 mgl-4"><code>name</code>: The name attribute is used to reference form data after submission.</p>
      <p className="fw-5 mgb-1 lh-2 mgl-4"><code>placeholder</code>: Provides a hint to the user about what to enter.</p>
      
      <div className="mgl-4">
        <p className="fw-5 mgb-1 lh-2 mgt-6">The type attribute allow us to determine the type of input. The common ones are:</p>
        {
          textInput.map((item, i) => (
            <Fragment key={i}>
              <p className="fw-5 mgb-1 lh-2 mgt-6"><strong>{item.title}</strong></p>
              <p className="fw-5 mgb-1 lh-2"><strong><InlineSyntaxHighlight code={item.code} classes={"mgl-6"} /></strong>: {item.description}</p>
              {
                item.additionalCode &&
                <>
                  <p className="fw-5 mgb-1 lh-2"><strong><InlineSyntaxHighlight code={item.additionalCode} classes={"mgl-6"}/></strong>: {item.additionalDescription}</p>
                  <CodePlayground code={{html: FormCode}} classes={"mgl-4"} langs={'HTML'} />
                </>
              }
            </Fragment>
          ))
        }
      </div>
        
      {
        textAButton.map((item, i) => (
          <Fragment key={i}>
            <h3 className='mgt-8 mgb-2'>{item.id}. {item.heading}</h3>
            <div className="mgt-4 mgl-4">
              <p className="fw-5 mgb-1 lh-2"><strong><InlineSyntaxHighlight code={item.tag} /></strong>: {item.desc}</p>
              <CodePlayground code={{html: item.code}} langs={'HTML'} />
            </div>
          </Fragment>
        ))
      }
    </div>
  )
}

export default Elements;
