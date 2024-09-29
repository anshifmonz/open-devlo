import { Fragment } from "react";
import InlineSyntaxHighlight from "../../../components/syntaxHighlight/InlineSyntax"
import CodePlayground from "../../../components/syntaxHighlight/CodePlayground"
import { TableCode } from './data/html';
import data from './data/Table.json'

function Table() {
  return (
    <>
      <h1 className='fs-10 mgb-8'>HTML Tables</h1>
      <p className="fw-5 mgb-1 lh-2">HTML tables are used to display data in a tabular format, organized into rows and columns.</p>

      <h2 className='fs-7 mgt-8 mgb-4'>Basic Structure</h2>
      <p className="fw-5 mgb-1 lh-2">A table consists of the following main elements:</p>
      <ul className="mgl-8 mgt-3">
        <li><InlineSyntaxHighlight lang={'html'} code={"<table>"} />: The container for the entire table. </li>
        <li className="mgt-2 fw-5"><InlineSyntaxHighlight lang={'html'} code={"<tr>"} />: Defines a table row. </li>
        <li className="mgt-2 fw-5"><InlineSyntaxHighlight lang={'html'} code={"<th>"} />: Defines a table header cell, usually bold and centered.</li>
        <li className="mgt-2 fw-5"><InlineSyntaxHighlight lang={'html'} code={"<td>"} />: Defines a table data cell, containing data.</li>
      </ul>

      <h3 className='mgt-8 mgb-2'>Basic example</h3>
      <CodePlayground code={{html: TableCode.table}} langs={'HTML'} />

      <h2 className='fs-7 mgt-8 mgb-4'>Table Sections</h2>
      {
        data.map((item, i) => (
          <Fragment key={i}>
            <p className="fw-5 mgb-2 lh-2 mgt-6 mgl-4"><b><InlineSyntaxHighlight lang={'html'} code={`<${item.tag}>`} /></b>: {item.def}</p>
            <CodePlayground code={{html: TableCode[item.tag]}} classes={"mgl-4 mgb-9"} langs={'HTML'} />
          </Fragment>
        ))
      }

      <h2 className='fs-7 mgt-8 mgb-4'>Colspan and Rowspan</h2>
      <p className="fw-5 mgb-1 lh-2 mgl-6"><b><code>colspan</code></b>: Specifies the number of columns a cell should span/take.</p>
      <InlineSyntaxHighlight lang={'html'} code={'<td colspan="2">Spans Two Columns</td>'} classes={"mgl-6"} />

      <p className="fw-5 mgb-1 lh-2 mgt-5 mgl-6"><b><code>rowspan</code></b>: Specifies the number of rows a cell should span/take.</p>
      <InlineSyntaxHighlight lang={'html'} code={'<td rowspan="2">Spans Two Rows</td>'} classes={"mgl-6"} />

      <h3 className='mgt-8 mgb-2'>Example Combining All Elements</h3>
      <CodePlayground code={{html: TableCode.allTogether}} langs={'HTML'} />
    </>
  )
}

export default Table
