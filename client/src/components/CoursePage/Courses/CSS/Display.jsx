import data from './data/display.json';

function Display() {
  return (
    <div>
      {
        <>
          <h1 className='fs-10 mgb-8'>{data.title}</h1>
          <p className='fw-5 mgb-3 lh-2' dangerouslySetInnerHTML={{__html: data.desc}}></p>

          {
            data.values.map((value, i) => (
              <div key={i} className={value.name.toLowerCase() + " mgt-7"}>
                <h3 className='mgb-2'>{i+1}. {value.name}</h3>
                {
                  value.descs.map((desc, i) => (
                    <p key={i} className='fw-5 mgb-1 lh-2 mgl-5' dangerouslySetInnerHTML={{__html: desc}}></p>
                  ))
                }
              </div>
            ))
          }
        </>
      }
    </div>
  )
}

export default Display;
