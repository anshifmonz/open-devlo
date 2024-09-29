import InlineSyntaxHiglight from '../../../components/syntaxHighlight/InlineSyntax';

function Color() {
  return (
    <>
      <h1 className='fs-10 mgb-8'>CSS Color</h1>
      <hr />

      <h2 className='fs-7 mgt-8 mgb-4'>Basic Color Values</h2>
      <p className='fw-5 mgb-1 lh-2'><strong>Keywords: </strong>Predefined names like <code>red</code>, <code>blue</code>, <code>green</code>, etc.</p>
      <p className='fw-5 mgb-1 lh-2 mgt-4'><strong>Hexadecimal: </strong>Represented by # followed by 3 or 6 hex digits like <code>#ff0000</code> for red.</p>
      <p className='fw-5 mgb-1 lh-2 mgt-4'><strong>RGB: </strong>Stands for Red, Green, Blue like <code>rgb(255, 0, 0)</code> for red.</p>
      <p className='fw-5 mgb-1 lh-2 mgt-4'><strong>RGBA: </strong>Same as RGB but with an Alpha (opacity) value like <code>rgba(255, 0, 0, 0.5)</code> for a semi-transparent red.</p>
      <p className='fw-5 mgb-1 lh-2 mgt-4'><strong>HSL: </strong>Stands for Hue, Saturation, Lightness like <code>hsl(0, 100%, 50%)</code> for red.</p>
      <p className='fw-5 mgb-1 lh-2 mgt-4'><strong>HSLA: </strong>HSL with an Alpha (opacity) value like <code>hsla(0, 100%, 50%, 0.5)</code>.</p>
    
      <h2 className='fs-7 mgt-8 mgb-4'>Color Keywords</h2>
      <p className='fw-5 mgb-1 lh-2'>CSS provides a wide range of color keywords like <code>white</code>, <code>black</code>, <code>gray</code>, <code>yellowgreen</code>, etc.</p>
    
      <h2 className='fs-7 mgt-8 mgb-4'>Opacity</h2>
      <p className='fw-5 mgb-1 lh-2'>The <code>opacity</code> property sets the transparency of the element. It ranges from 0 (completely transparent) to 1 (completely opaque).</p>
    
      <h2 className='fs-7 mgt-8 mgb-4'>Gradients</h2>
      <p className='fw-5 mgb-1 lh-2'><b>Linear Gradient: </b>Transition between colors in a straight line.</p>
      <InlineSyntaxHiglight code={'background: linear-gradient(to right, red, yellow);'} lang={'css'} />
    
      <p className='fw-5 mgb-1 lh-2 mgt-5'><b>Radial Gradient: </b>Transition between colors radiating from a center point.</p>
      <InlineSyntaxHiglight code={'background: radial-gradient(circle, red, yellow);'} lang={'css'} />
    </>
  )
}

export default Color;
