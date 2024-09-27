
function Introduction() {
  return (
    <div>
      <h1 className='fs-10 mgb-8'>CSS Introduction</h1>
      <hr />

      <h2 className='fs-7 mgt-8 mgb-4'>What is CSS?</h2>
      <ul className="mgl-8 mgt-3">
        <li className="mgt-2">CSS stands for <strong>Cascading Style Sheets</strong>.</li>
        <li className="mgt-2">CSS is the standard language for designing web pages.</li>
        <li className="mgt-2">Each style rule tells the browser how to display elements on the page.</li>
        <li className="mgt-2">Without CSS, a web page would just be a plain, unstyled document.</li>
      </ul>

      <h2 className='fs-7 mgt-8 mgb-4'>Why Use CSS?</h2>
      <p className='fw-5 mgb-6 lh-2'>CSS is essential for making web pages visually appealing and user-friendly. It gives flexibility in styling and ensures consistency across multiple web pages.</p>

      <p className='fw-5 mgb-5 lh-2'><b>Control Layout: </b>Design element placement, responsive design and spacing.</p>
      <p className='fw-5 mgb-5 lh-2'><b>Design Your Own: </b>Edit the color, font and sizes for different components.</p>
      <p className='fw-5 mgb-5 lh-2'><b>Boost User Experience: </b>Add animations, transitions, and interactive features.</p>
      <p className='fw-5 lh-2'><b>Maintain Consistency: </b>Apply consistent styles across multiple pages with less effort.</p>

      <h2 className='fs-7 mgt-8 mgb-6'>Advantages of CSS</h2>
      <p className='fw-5 mgb-5 lh-2'><b>Logical Style Separation: </b>HTML is for structure, CSS takes care of presentatioThis helps keep content separate from presentation.</p>
      <p className='fw-5 mgb-5 lh-2'><b>Efficient: </b>We can link one CSS file with multiple HTML pages that will help in not rewriting the code again and maintaining a single stylesheet across your website.</p>
      <p className='fw-5 mgb-5 lh-2'><b>Flexibility: </b>With CSS great responsiveness you can build a responsive design which is available to be used in all devices with different screen sizes.</p>
      <p className='fw-5 mgb-5 lh-2'><b>Faster Page Load Times: </b>Consolidating styles to a CSS file make pages load quickly as the browser can cache these files of different webpages.</p>
      <p className='fw-5 mgb-5 lh-2'><b>Accessibility: </b>CSS offers tweak-ability to improve the accessibility of a site, such as increasing font sizes for easier reading.</p>
    </div>
  )
}

export default Introduction;
