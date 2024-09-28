import CodePlayground from "../../../components/syntaxHighlight/Updates/CodePlayground";
import InlineSyntaxHighlight from "../../../components/syntaxHighlight/InlineSyntax";
import { FormCode } from "./data/html";
import data from './data/Form.json';
import Elements from "./Form/Elements";
import Attributes from "./Form/Attribute";
import Validation from "./Form/Validation";

function Form() {
  return (
    <>
      <h1 className='fs-10 mgb-8'>HTML Form</h1>
      <p className="fw-5 mgb-1 lh-2">Forms are used to collect user input and submit data to a server. Forms are crucial for user interactions such as login, registration, and data entry.</p>

      <h2 className='fs-7 mgt-6 mgb-4'>Basic Structure</h2>
      <CodePlayground code={{html: FormCode.form}} langs={'HTML'} />

      <p className="fw-5 mgb-1 lh-2 mgt-4"><b><InlineSyntaxHighlight code={"<form>"} /></b> : The container for all form elements.</p>
      <p className="fw-5 mgb-1 lh-2"><b><code>action</code></b> : Data will be sent to the specific endpoint/URL.</p>
      <p className="fw-5 mgb-1 lh-2"><b><code>method</code></b> : Specific the HTTP method to use (`GET` or `POST`, etc).</p>

      <Elements textInput={data.textInput} textAButton={data.textAButton} FormCode={FormCode.dropdown} />
      <Attributes data={data.Attr} FormCode={FormCode.formAttr} />
      <Validation data={data.formValidation} />

      <h3 className='mgt-8 mgb-2'>Example Combining All Form Elements</h3>
      <CodePlayground code={{html: FormCode.allTogether}} langs={'HTML'} />
    </>
  )
}

export default Form;
