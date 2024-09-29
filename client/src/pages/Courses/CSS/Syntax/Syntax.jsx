import Example from "./Example";
import CodePlayground from "../../../../components/syntaxHighlight/Updates/CodePlayground";
import InlineSyntaxHighlight from "../../../../components/syntaxHighlight/InlineSyntax";
import { syntax } from "../data/codes";

function Syntax() {
  return (
    <>
      <h1 className='fs-10 mgb-8'>CSS Syntax</h1>
      <hr />

      <p className='fw-5 mgb-3 lh-2 mgt-8'>The syntax of CSS consists of two main parts selectors and declarations.</p>
      <p className='fw-5 mgb-1 lh-2'><strong>Selectors</strong>: The HTML element(s) you want to style.</p>      
      <p className='fw-5 mgb-3 lh-2'><strong>Declarations</strong>: The rules that define how the selected elements should be styled.</p>      

      <Example />

      <h3 className='mgt-8 mgb-2'>Explanation</h3>
      <p className='fw-5 mgb-1 lh-2 mgt-5'><strong>Selector: </strong>Points to the HTML element you want to style.</p>
      <p className='fw-5 mgb-1 lh-2'><strong>Property: </strong> A style attribute you want to change like <code>color</code>, <code>font-size</code>, etc.</p>
      <p className='fw-5 mgb-1 lh-2'><strong>Value</strong>The value assigned to the property like <code>red</code>, <code>16px</code>, etc.</p>

      <h3 className='mgt-8 mgb-2'>Example:</h3>
      <CodePlayground code={{css: syntax.syntax}} langs={'CSS'} restriction={'noResult noEdit'} />
      <p className='fw-5 mgb-1 lh-2 mgt-5'>This CSS rule selects all <InlineSyntaxHighlight code={'<p>'} /> elements and changes their text color to blue and font size to 16px.</p>
    </>
  )
}

export default Syntax;
