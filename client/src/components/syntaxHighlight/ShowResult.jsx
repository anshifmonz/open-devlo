function ShowResult({result, resultCode}) {

  return (
    result && <div id='result' className='result' dangerouslySetInnerHTML={{ __html: resultCode }}></div>
  )
}

export default ShowResult;
