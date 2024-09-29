import InlineSyntaxHighlight from "../../../components/syntaxHighlight/InlineSyntax";

function TagsAndElem() {
  return (
    <>
      <h1 className='fs-10 mgb-8'>Tags and Elements in HTML</h1>
      <hr />

      <h2 className='fs-7 mgt-8 mgb-4'>Tags:</h2>
      <ul className="mgl-8 mgt-3">
        <li className="mgt-2 fw-5">These are the building blocks of HTML.</li>
        <li className="mgt-2 fw-5">Tags are used to create elements.</li>
        <li className="mgt-2 fw-5">They are written within angle brackets, like <InlineSyntaxHighlight lang={'html'} code={"<tagname>"}/> </li>
        <li className="mgt-2 fw-5">Tags usually come in pairs: an opening tag <InlineSyntaxHighlight lang={'html'} code={"<tagname>"}/> and a closing tag <InlineSyntaxHighlight lang={'html'} code={"</tagname>"}/> but some tags are self-closing, like <InlineSyntaxHighlight lang={'html'} code={"<img />"}/></li>
      </ul>

      <h2 className='fs-7 mgt-8 mgb-4'>Elements:</h2>
      <ul className="mgl-8 mgt-3">
        <li className="mgt-2 fw-5">An element is the combination of an opening tag, its content, and a closing tag.</li>
        <li className="mgt-2 fw-5">Elements define the structure and content of the web page. For example, <InlineSyntaxHighlight lang={'html'} code={"<p>This is a paragraph.</p>"} /> is a paragraph element.</li>
      </ul>

      <div className="inside-explaination">
        <h3 className='mgt-8 mgb-2'>Explanation:</h3>
        <ul className="mgl-8 mgt-3">
          <li className="mgt-2 fw-5"><InlineSyntaxHighlight lang={'html'} code={"<p>"} /> is the opening tag.</li>
          <li className="mgt-2 fw-5"><InlineSyntaxHighlight lang={'html'} code={"</p>"} /> is the closing tag.</li>
          <li className="mgt-2 fw-5">This is a paragraph. is the content.</li>
          <li className="mgt-2 fw-5">Together, they form a paragraph element.</li>
        </ul>
      </div>
    </>
  )
}

export default TagsAndElem;
