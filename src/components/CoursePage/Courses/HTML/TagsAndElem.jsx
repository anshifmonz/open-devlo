import SyntaxHighlight from "../../syntaxHighlight/SyntaxHighlight";
import InlineSyntaxHighlight from "../../syntaxHighlight/InlineSyntax";

function TagsAndElem() {
  return (
    <>
      <h1>Tags and Elements in HTML</h1>
      <hr />

      <h2>Tags:</h2>
      <ul className="points">
        <li>These are the building blocks of HTML.</li>
        <li>Tags are used to create elements.</li>
        <li>They are written within angle brackets, like <InlineSyntaxHighlight code={"<tagname>"}/> </li>
        <li>Tags usually come in pairs: an opening tag <InlineSyntaxHighlight code={"<tagname>"}/> and a closing tag <InlineSyntaxHighlight code={"</tagname>"}/> but some tags are self-closing, like <InlineSyntaxHighlight code={"<img />"}/></li>
      </ul>

      <h2>Elements:</h2>
      <ul className="points">
        <li>An element is the combination of an opening tag, its content, and a closing tag.</li>
        <li>Elements define the structure and content of the web page. For example, <InlineSyntaxHighlight code={"<p>This is a paragraph.</p>"} /> is a paragraph element.</li>
      </ul>

      <div className="inside-explaination">
        <h3>Explanation:</h3>
        <ul className="points">
          <li><InlineSyntaxHighlight code={"<p>"} /> is the opening tag.</li>
          <li><InlineSyntaxHighlight code={"</p>"} /> is the closing tag.</li>
          <li>This is a paragraph. is the content.</li>
          <li>Together, they form a paragraph element.</li>
        </ul>
      </div>
    </>
  )
}

export default TagsAndElem;
