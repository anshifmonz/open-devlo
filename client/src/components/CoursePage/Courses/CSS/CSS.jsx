import CSSEditor from "../../syntaxHighlight/Updates/CodePlayground";
import Tutorial from "../../Tutorial";



function CSS() {

  const cssCode = `.box {
    padding: 20px;
    background-color: #007acc;
    color: white;
    border-radius: 5px;
    text-align: center;
}`
  
  const htmlCode = `<div class="box">Hello, World!</div>`
  const jsCode = `alert(0)`

  return (
    <Tutorial>
      <CSSEditor code={{html: htmlCode, css: cssCode}} langs={'HTML CSS'}/>
    </Tutorial>
  )
}

export default CSS;
