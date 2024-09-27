import React from 'react';
import { Intro } from './data/html';
import SyntaxHighlight from '../../../components/syntaxHighlight/SyntaxHighlight';
import InlineHighlight from '../../../components/syntaxHighlight/InlineSyntax';

function Introduction() {
  
  return (
    <>
      <h1 className='fs-10 mgb-8'>HTML Introduction</h1>
      <hr />
      <h2 id='what-is-html' className='scroll-top fs-7 mgt-8 mgb-4'>What is HTML?</h2>
      <ul class="mgl-8 mgt-3">
        <li>HTML stands for <strong>HyperText Markup Language</strong>.</li>
        <li className='mgt-2'>HTML is the standard language for creating web pages. It uses tags to define headings, paragraphs and images.</li>
        <li className='mgt-2'>Each element tells the browser how to display content on the page.  </li>
        <li className='mgt-2'>Without HTML, a web page would just be a jumble of text and images.</li>
      </ul>

      <h2 id='html-structure' className='scroll-top fs-7 mgt-8 mgb-4'>Structure of an HTML document</h2>
      <p className='fw-5 mgb-1 lh-2'>The structure of an HTML document is like a basic blueprint for a web page.</p>

      <ul class="mgl-8 mgt-3">
        <li><InlineHighlight code={"<!DOCTYPE html>"} />: Tells the browser that this is an HTML file.</li>
        <li><InlineHighlight code={"<html>"} />: The root element of an HTML file that contains all the other elements on the page.</li>
        <li><InlineHighlight code={"<head>"} />: Contains meta-information about the page, like the title, links to stylesheets, and scripts.</li>
        <li><InlineHighlight code={"<title>"} />: Sets the title of the page, which appears in the browser tab.</li>
        <li><InlineHighlight code={"<body>"} />: Contains the main content of the page, like text, images, and links.</li>
      </ul>

      <h3 className='mgt-8 mgb-2'>Example of an HTML File:</h3>
      <SyntaxHighlight code={Intro.structure} />

      <h2 className='fs-7 mgt-8 mgb-4'>Tags and Elements in HTML</h2>
      <div className="inside-explaination">
        <h3 className='mgt-8 mgb-2'>HTML Tag</h3>
        <p className='fw-5 mgb-1 lh-2'>The building blocks of HTML, written in angle brackets like &lt;tag&gt;. They come in pairs: an opening tag &lt;tag&gt; and a closing tag &lt;/tag&gt;, but some are self-closing like &lt;img /&gt;.</p>
        <h3 className='mgt-8 mgb-2'>HTML Element</h3>
        <p className='fw-5 mgb-1 lh-2'>An HTML element contains three parts: a start tag, some content, and an end tag.</p>
        <p className='fw-5 mgb-1 lh-2'>Example: <InlineHighlight code={Intro.tagName} /></p>
      </div>

      <h2 id='basic-tags'>Basic Tags</h2>
      <ul class="mgl-8 mgt-3">
        <li><InlineHighlight code={"<!DOCTYPE html>"}/> : Declares the document type and version of HTML.</li>
        <li><InlineHighlight code={"<html>"}/> : The root element that wraps all the content on the page.</li>
        <li><InlineHighlight code={"<head>"}/> : Contains meta-information about the document, like its title and links to stylesheets.</li>
        <li><InlineHighlight code={"<title>"}/> : Sets the title of the document, shown in the browser tab.</li>
        <li><InlineHighlight code={"<body>"}/> : Contains the main content of the HTML document.</li>
        <li><InlineHighlight code={"<h1>"}/> to <InlineHighlight code={"<h6>"}/> : Headings, with <InlineHighlight code={"<h1>"}/> being the highest level and <InlineHighlight code={"<h6>"}/> the lowest.</li>
        <li><InlineHighlight code={"<p"}/> : Defines a paragraph.</li>
        <li><InlineHighlight code={"<a>"}/> : Creates a hyperlink.</li>
        <li><InlineHighlight code={"<img>"}/> : Embeds an image.</li>
        <li><InlineHighlight code={"<ul>"}/> and <InlineHighlight code={"<ol>"}/> : Creates unordered (bulleted) and ordered (numbered) lists, respectively.</li>
        <li><InlineHighlight code={"<li>"}/> : List item, used inside <InlineHighlight code={"<ul>"}/> or <InlineHighlight code={"<ol>"}/>.</li>
        <li><InlineHighlight code={"<div>"}/> : A container for other HTML elements, used to group content.</li>
        <li><InlineHighlight code={"<span>"}/> : Inline container for text and other inline elements.</li>
        <li><InlineHighlight code={"<br>"}/> : Inserts a line break.</li>
        <li><InlineHighlight code={"<hr>"}/> : Inserts a horizontal rule (line).</li>
      </ul>

      <h3 className='mgt-8 mgb-2'>Example of putting all these together</h3>
      <SyntaxHighlight code={Intro.allTogether}/>
    </>
  )
}

export default Introduction;
