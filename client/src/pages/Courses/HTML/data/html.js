const Intro = {
  structure:
  `<!DOCTYPE html>
<html>
    <head>
        <title>My First Web Page</title>
    </head>

    <body>
        <h1>Hello, World!</h1>
        <p>This is a paragraph of text.</p>
    </body>
</html>`,

  tagName:
  `<tagname>Content</tagname>`,

  allTogether:
  `<!DOCTYPE html>
<html>
    <head>
        <title>My First Web Page</title>
    </head>
    <body>
        <h1>Welcome to My Website</h1>
        <p>This is a paragraph of text.</p>
        <p>This is a line breaked <br> text</p>
        <a href="https://www.example.com">Visit Example</a>
        <div>
            <ol>
                <li>First item</li>
                <li>Second item</li>
            </ol>
            <ul>
                <li>Item one</li>
                <li>Item two</li>
            </ul>
            <hr>
        </div>
        <img src="/assets/image.png" alt="Description of the image" />
    </body>
</html>`
};

const Attr = {
  attr:
  `<tagname attribute="value">Content</tagname>`,

  id:
  `<div id="unique-id">Content</div>`,

  class:
  `<p class="highlight">This is highlighted text.</p>`,

  href:
  `<a href="https://www.example.com">Visit Example</a>`,

  src:
  `<img src="image.jpg" alt="Description of the image">`,

  alt:
  `<img src="logo.png" alt="Company Logo">`,

  title:
  `<button title="Click me">Button</button>`,

  style:
  `<p style="color: blue;">This text is blue.</p>`,

  type:
  `<input type="text" placeholder="Enter text here">`,

  value:
  `<input type="text" value="Default text">`,

  allTogether:
  `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Attribute Example</title>
    <style>
        .highlight {
            color: #007acc;
            font-weight: bold;
        }
    </style>
</head>
<body>

    <h1 id="main-title" title="This is the main heading">Welcome to HTML Attributes Tutorial</h1>

    <p class="highlight" style="font-size: 16px;">
        This paragraph is styled using the "class" and "style" attributes. 
        The class "highlight" changes the text color, and the style attribute modifies the font size.
    </p>

    <a href="https://www.example.com" title="Go to example.com">
        Visit Example.com
    </a>

    <img src="https://via.placeholder.com/150" alt="Placeholder Image" title="This is an image" />

    <button id="click-me-btn" class="highlight" title="Click me to see an alert" style="margin-top: 20px;">
        Click Me!
    </button>

    <input type="text" id="username" class="highlight" value="Enter your username" style="margin-top: 20px;" title="Type your username here" />

</body>
</html>`

};

const Text = {

  br:
  `<p>Line one<br>Line two</p>`,

  b:
  `<b>This text is bold.</b>`,

  i:
  `<i>This text is italic.</i>`,

  strong:
  `<strong>Important text</strong>`,

  em:
  `<em>Emphasized text</em>`,

  u:
  `<u>Underlined text</u>`,

  span:
  `<span style="color: red;">Red text</span>`,
  
  pre:
  `<pre>
  Preformatted text
  with preserved spacing.
</pre>`,

  blockQuote:
  `<blockquote>
  This is a block quote.
</blockquote>`,

  q:
  `<q>This is an inline quote.</q>`,

  code:
  `<code>const x = 10;</code>`,

  allTogether:
  `<!DOCTYPE html>
<html>
  <head>
    <title>Text Formatting Example</title>
  </head>
  <body>
    <h1>Main Heading</h1>
    <p>This is a <strong>bold</strong> paragraph with <em>italic</em> text.</p>
    <p>Here is a <u>underlined</u> word.</p>
    <ul>
      <li>First item</li>
      <li>Second item</li>
    </ul>
    <blockquote>
      This is a blockquote for a longer piece of text.
    </blockquote>
    <pre>
      Preformatted text
      with preserved spacing.
    </pre>
    <code>const x = 10;</code>
  </body>
</html>`
};

const LinksCode = {

  a:
  `<a href="https://www.example.com">Visit Example</a>`,

  href:
  `<a href="https://www.example.com">Go to Example</a>`,

  target:
  `<a href="https://www.example.com" target="_blank">Open in New Tab</a>`,

  title:
  `<a href="https://www.example.com" title="Go to Example Site">Visit Example</a>`,

  rel:
  `<a href="https://www.example.com" rel="nofollow noopener noreferrer">Do Not Follow</a>`,

  download:
  `<a href="file.zip" download>Download File</a>`,

  external:
  `<a href="https://www.example.com">Visit Example</a>`,

  internal:
  `<a href="/products">Go to Product Page</a>`,

  email:
  `<a href="mailto:example@example.com">Email Us</a>`,

  phone:
  `<a href="tel:+1234567890">Call Us</a>`,

  allTogether:
  `<!DOCTYPE html>
<html>
  <head>
    <title>HTML Links Example</title>
  </head>
  <body>
    <h1>HTML Links</h1>
    <p><a href="https://www.example.com" target="_blank" title="Go to Example Site">Visit Example</a></p>
    <p><a href="#section1">Jump to Section 1</a></p>
    <h2 id="section1">Section 1</h2>
    <p><a href="mailto:example@example.com">Email Us</a></p>
    <p><a href="tel:+1234567890">Call Us</a></p>
    <p><a href="file.zip" download>Download File</a></p>
  </body>
</html>
`
};

const Img = {
  picture:
  `<picture>
  <source srcset="image-small.jpg" media="(max-width: 600px)">
  <source srcset="image-large.jpg" media="(min-width: 601px)">
  <img src="image-default.jpg" alt="Responsive Image">
</picture>`,
};

const List = {
  uList:
  `<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>`,

  oList:
  `<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>`,

  descList:
  `<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language, the standard language for creating web pages.</dd>

    <dt>CSS</dt>
    <dd>Cascading Style Sheets, used to style and layout web pages.</dd>

    <dt>JavaScript</dt>
    <dd>A programming language used to create interactive effects within web browsers.</dd>
</dl>`,

  nestedList:
  `<ul>
    <li>Fruits
        <ul>
            <li>Apple</li>
            <li>Orange</li>
        </ul>
    </li>
    <li>Vegetables
        <ol>
            <li>Carrot</li>
            <li>Broccoli</li>
        </ol>
    </li>
</ul>`,

  type:
  `<ol type="A">
  <li>Item A</li>
  <li>Item B</li>
</ol>`,

  start:
  `<ol start="5">
  <li>Item 5</li>
  <li>Item 6</li>
</ol>`,

  allTogether:
  `<!DOCTYPE html>
<html>
<head>
  <title>HTML Lists Example</title>
</head>
<body>
    <h1>HTML Lists</h1>

    <h3>Unordered List</h3>
    <ul class="custom-bullets">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>

    <h3>Ordered List</h3>
    <ol class="custom-numbers">
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
    </ol>

    <h3>Description List</h3>
    <dl>
        <dt>HTML</dt>
        <dd>HyperText Markup Language</dd>
        <dt>CSS</dt>
        <dd>Cascading Style Sheets</dd>
    </dl>

    <h3>Nested Lists</h3>
    <ul>
        <li>Fruits
            <ul>
                <li>Apple</li>
                <li>Banana</li>
            </ul>
        </li>
        <li>Vegetables
            <ol>
                <li>Carrot</li>
                <li>Broccoli</li>
            </ol>
        </li>
    </ul>
</body>

</html>
  `
};

const TableCode = {
  table:
  `<table>
    <tr> <!-- First row contain header -->
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
    <tr>
        <td>Data 1</td>
        <td>Data 2</td>
    </tr>
    <tr>
        <td>Data 3</td>
        <td>Data 4</td>
    </tr>
</table>`,

  head:
  `<table>
    <thead>
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
    </thead>
</table>`,

  body:
  `<table>
    <tbody>
    <tr>
        <td>Data 1</td>
        <td>Data 2</td>
    </tr>
    <tr>
        <td>Data 3</td>
        <td>Data 4</td>
    </tr>
    </tbody>
</table>`,

   foot:
   `<table>
    <tfoot>
    <tr>
        <td>Total</td>
        <td>$100</td>
    </tr>
    </tfoot>
</table>`,

  allTogether:
  `<!DOCTYPE html>
<html>
<head>
  <title>HTML Tables Example</title>
</head>

<body>
    <h1>HTML Tables</h1>
    <table>
        <thead>
            <tr>
                <th>Header 1</th>
                <th>Header 2</th>
                <th>Header 3</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Data 1</td>
                <td>Data 2</td>
                <td>Data 3</td>
            </tr>
            <tr>
                <td colspan="2">span 1 col</td>
                <td>Data 4</td>
            </tr>
            <tr>
                <td rowspan="2">span 2 row</td>
                <td>Data 5</td>
                <td>Data 6</td>
            </tr>
            <tr>
                <td>Data 7</td>
                <td>Data 8</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>Total</td>
                <td colspan="2">$100</td>
            </tr>
        </tfoot>
    </table>
</body>
</html>
  `
};

const FormCode = {
  form:
  `<form action="/submit" method="post">
  <!-- Form elements go here -->
</form>`,

  dropdown:
  `<select name="language">
  <option value="" disabled selected>Choose a programming language</option>
  <option value="golang">Go</option>
  <option value="javascript">Javascript</option>
  <option value="python">Python</option>
</select>`,

  formAttr:
  `<form action="/submit" method="post" enctype="multipart/form-data">
  
</form>`,

  allTogether:
  `<!DOCTYPE html>
<html>
<head>
  <title>HTML Forms Example</title>
</head>
<body>
    <h1>HTML Forms</h1>
  
    <form action="/submit" method="post" enctype="multipart/form-data">
        <label for="email">Email:</label>
        <input type="email" name="email" required>
        <br><br>

        <label for="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="Enter your username" required>
        <br><br>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required>
        <br><br>

        <label for="gender">Gender:</label>
        <input type="radio" id="male" name="gender" value="male">
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="female">
        <label for="female">Female</label>
        <br><br>

        <label for="subscribe">Subscribe to newsletter:</label>
        <input type="checkbox" id="subscribe" name="subscribe" value="newsletter">
        <br><br>

        <label for="programming-langauge">Programming Langauge:</label>
        <select name="language">
            <option value="" disabled selected>Choose a programming language</option>
            <option value="golang">Go</option>
            <option value="javascript">Javascript</option>
            <option value="python">Python</option>
        </select>
        <br><br>

        <label for="comments">Comments:</label>
        <textarea id="comments" name="comments" rows="4" cols="50" placeholder="Enter your comments"></textarea>
        <br><br>

        <label for="resume">Upload Resume:</label>
        <input type="file" id="resume" name="resume">
        <br><br>

        <input type="hidden" name="userID" value="12345">
        <br><br>

        <button type="submit">Submit</button>
    </form>
  
</body>
</html>`
};

const SemanticCode = {
  header:
  `<header>
  <h1>My Website</h1>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>`,

  nav:
  `<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#services">Services</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>`,

  main:
  `<main>
  <h2>Welcome to My Website</h2>
  <p>This is the main content of the page.</p>
</main>`,

  section:
  `<section>
  <h2>About Us</h2>
  <p>We are a company that values...</p>
</section>`,

  article:
  `<article>
  <h2>Latest News</h2>
  <p>Today we launched our new product...</p>
</article>`,

  aside:
  `<aside>
  <h3>Related Articles</h3>
  <ul>
    <li><a href="#article1">Article 1</a></li>
    <li><a href="#article2">Article 2</a></li>
  </ul>
</aside>`,

  footer:
  `<footer>
  <p>&copy; 2024 My Website. All rights reserved.</p>
</footer>`,

  figure:
  `<figure>
  <img src="image.jpg" alt="Description of image">
  <figcaption>This is an image caption.</figcaption>
</figure>`,

  allTogether:
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Semantic HTML Example</title>
</head>
<body>

<header>
  <h1>My Website</h1>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>

<main>
  <section>
    <h2>About Us</h2>
    <p>Welcome to our website. We are a company that values...</p>
  </section>

  <article>
    <h2>Latest News</h2>
    <p>Today we launched our new product...</p>
  </article>

  <aside>
    <h3>Related Articles</h3>
    <ul>
      <li><a href="#article1">Article 1</a></li>
      <li><a href="#article2">Article 2</a></li>
    </ul>
  </aside>
</main>

<footer>
  <p>&copy; 2024 My Website. All rights reserved.</p>
  <address>
    Contact us at <a href="mailto:support@example.com">support@example.com</a>.
  </address>
</footer>

</body>
</html>`
}

const MultimediaCode = {
  Images:
  `<img src="small.jpg" 
      srcset="large.jpg 1024w, medium.jpg 768w, small.jpg 480w" 
      sizes="(max-width: 600px) 480px, (max-width: 1024px) 768px, 1024px" 
      alt="Responsive image example">`,

  Audio:
  `<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    Your browser does not support the audio element.
</audio>`,

  Video:
  `<video width="640" height="360" controls>
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    Your browser does not support the video tag.
</video>`,

  iframe:
  `<iframe width="560" height="315" 
        src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
</iframe>`,

  object:
  `<object data="document.pdf" type="application/pdf" width="600" height="800">
    <p>Your browser does not support PDFs. <a href="document.pdf">Download the PDF</a>.</p>
</object>
`,

  map:
  `<img src="map.jpg" alt="Map" usemap="#image-map">

<map name="image-map">
    <area shape="rect" coords="34,44,270,350" href="page1.html" alt="Link to Page 1">
    <area shape="circle" coords="512,213,50" href="page2.html" alt="Link to Page 2">
</map>
`,

  canvas:
  `<canvas id="myCanvas" width="200" height="100">
    Your browser does not support the HTML5 canvas tag.
</canvas>
`,
  
  svg:
  `<svg width="100" height="100">
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>
`
}

const MetaTag = {

  OGTags:
  `<meta property="og:title" content="Understanding Meta Tags in HTML">
<meta property="og:description" content="A detailed guide on meta tags and their importance.">
<meta property="og:image" content="https://www.example.com/image.jpg">
<meta property="og:url" content="https://www.example.com/meta-tags">`,

  twitter:
  `<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@yourusername">
<meta name="twitter:title" content="Understanding Meta Tags in HTML">
<meta name="twitter:description" content="A detailed guide on meta tags and their importance.">
<meta name="twitter:image" content="https://www.example.com/image.jpg">`,

  httpEquiv:
  `<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">`

}

const SEOCode ={
  heading:
  `<h1>SEO Best Practices for HTML</h1>
<h2>Title Tags</h2>
`
}
export {
  Intro,
  Attr,
  Text,
  LinksCode,
  List,
  TableCode,
  FormCode,
  Img,
  SemanticCode,
  MultimediaCode,
  MetaTag,
  SEOCode
};