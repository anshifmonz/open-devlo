import React from 'react';
import { Intro } from './data/html';
import CodePlayground from '../../../components/syntaxHighlight/CodePlayground';
import InlineHighlight from '../../../components/syntaxHighlight/InlineSyntax';

function Introduction() {
  
  return (
    <>
      <h1 className='fs-10 mgb-8'>HTML Introduction</h1>
      <hr />
      <h2 id='what-is-html' className='scroll-top fs-7 mgt-8 mgb-4'>What is HTML?</h2>
      <ul className="mgl-8 mgt-3">
        <li>HTML stands for <strong>HyperText Markup Language</strong>.</li>
        <li className='mgt-2'>HTML is the standard language for creating web pages. It uses tags to define headings, paragraphs and images.</li>
        <li className='mgt-2'>Each element tells the browser how to display content on the page.  </li>
        <li className='mgt-2'>Without HTML, a web page would just be a jumble of text and images.</li>
      </ul>

      <h2 id='html-structure' className='scroll-top fs-7 mgt-8 mgb-4'>Structure of an HTML document</h2>
      <p className='fw-5 mgb-1 lh-2'>The structure of an HTML document is like a basic blueprint for a web page.</p>

      <ul className="mgl-8 mgt-3">
        <li><InlineHighlight lang={'html'} code={"<!DOCTYPE html>"} />: Tells the browser that this is an HTML file.</li>
        <li className='mgt-2'><InlineHighlight lang={'html'} code={"<html>"} />: The root element of an HTML file that contains all the other elements on the page.</li>
        <li className='mgt-2'><InlineHighlight lang={'html'} code={"<head>"} />: Contains meta-information about the page, like the title, links to stylesheets, and scripts.</li>
        <li className='mgt-2'><InlineHighlight lang={'html'} code={"<title>"} />: Sets the title of the page, which appears in the browser tab.</li>
        <li className='mgt-2'><InlineHighlight lang={'html'} code={"<body>"} />: Contains the main content of the page, like text, images, and links.</li>
      </ul>

      <h3 className='mgt-8 mgb-2'>Example of an HTML File:</h3>
      <CodePlayground code={{html: Intro.structure}} langs={'HTML'} />

      <h2 className='fs-7 mgt-8 mgb-4'>Tags and Elements in HTML</h2>
      <div className="inside-explaination">
        <h3 className='mgt-8 mgb-2'>HTML Tag</h3>
        <p className='fw-5 mgb-1 lh-2'>The building blocks of HTML, written in angle brackets like <InlineHighlight lang={'html'} code={"<tag>"}/>. They come in pairs: an opening tag <InlineHighlight lang={'html'} code={"<tag>"}/> and a closing tag <InlineHighlight lang={'html'} code={"</tag>"}/>, but some are self-closing like <InlineHighlight lang={'html'} code={"</img>"}/>.</p>
        <h3 className='mgt-8 mgb-2'>HTML Element</h3>
        <p className='fw-5 mgb-1 lh-2'>An HTML element contains three parts: a start tag, some content, and an end tag.</p>
        <p className='fw-5 mgb-1 lh-2'>Example: <InlineHighlight lang={'html'} code={Intro.tagName} /></p>
      </div>

      <h2 className='fs-7 mgt-8 mgb-4'>Basic Tags</h2>
      <ul className="mgl-8 mgt-3">
        <li><InlineHighlight lang={'html'} code={"<!DOCTYPE html>"}/> : Declares the document type and version of HTML.</li>
        <li className='mgt-2'><InlineHighlight lang={'html'} code={"<html>"}/> : The root element that wraps all the content on the page.</li>
        <li className='mgt-2'><InlineHighlight lang={'html'} code={"<head>"}/> : Contains meta-information about the document, like its title and links to stylesheets.</li>
        <li className='mgt-2'><InlineHighlight lang={'html'} code={"<title>"}/> : Sets the title of the document, shown in the browser tab.</li>
        <li className='mgt-2'><InlineHighlight lang={'html'} code={"<body>"}/> : Contains the main content of the HTML document.</li>
        <li className='mgt-2'><InlineHighlight lang={'html'} code={"<h1>"}/> to <InlineHighlight lang={'html'} code={"<h6>"}/> : Headings, with <InlineHighlight lang={'html'} code={"<h1>"}/> being the highest level and <InlineHighlight lang={'html'} code={"<h6>"}/> the lowest.</li>
        <li className='mgt-2'><InlineHighlight lang={'html'} code={"<p>"}/> : Defines a paragraph.</li>
        <li className='mgt-2'><InlineHighlight lang={'html'} code={"<a>"}/> : Creates a hyperlink.</li>
        <li className='mgt-2'><InlineHighlight lang={'html'} code={"<img>"}/> : Embeds an image.</li>
        <li className='mgt-2'><InlineHighlight lang={'html'} code={"<ul>"}/> and <InlineHighlight lang={'html'} code={"<ol>"}/> : Creates unordered (bulleted) and ordered (numbered) lists, respectively.</li>
        <li className='mgt-2'><InlineHighlight lang={'html'} code={"<li>"}/> : List item, used inside <InlineHighlight lang={'html'} code={"<ul>"}/> or <InlineHighlight lang={'html'} code={"<ol>"}/>.</li>
        <li className='mgt-2'><InlineHighlight lang={'html'} code={"<div>"}/> : A container for other HTML elements, used to group content.</li>
        <li className='mgt-2'><InlineHighlight lang={'html'} code={"<span>"}/> : Inline container for text and other inline elements.</li>
        <li className='mgt-2'><InlineHighlight lang={'html'} code={"<br>"}/> : Inserts a line break.</li>
        <li className='mgt-2'><InlineHighlight lang={'html'} code={"<hr>"}/> : Inserts a horizontal rule (line).</li>
      </ul>

      <h3 className='mgt-8 mgb-2'>Example of putting all these together</h3>
      <CodePlayground code={{html: Intro.allTogether}} restriction={'noEdit'} langs={'HTML'} />
    </>
  )
}

export default Introduction;
