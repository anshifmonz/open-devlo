import data from './data/box-model.json';

function BoxModel() {
  return (
    <div>
      <h1 className='fs-10 mgb-8'>CSS Box Model</h1>
      <p className='fw-5 mgb-1 lh-2'>The <b>CSS Box Model</b> is fundamental to understanding how elements are rendered on a web page. It defines the structure and layout of elements in a webpage, and consists of several parts.</p>
    
      {
        data.parts.map((part, i) => (
          <div key={i} className={part.title.toLowerCase()}>
            <h3 className='mgt-7 mgb-2'>{part.title}</h3>
            <p className='fw-5 mgb-1 lh-3' dangerouslySetInnerHTML={{__html: part.desc}}></p>
          </div>
        ))
      }
    </div>
  )
}

export default BoxModel;
