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
      <ul>
        <li>Item one</li>
        <li>Item two</li>
      </ul>
      <hr>
      <ol>
        <li>First item</li>
        <li>Second item</li>
      </ol>
    </div>
    <img src="image.jpg" alt="Description of the image" />
  </body>
</html>`
};

const attribute = {
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
  `<a href="https://www.example.com" target="_blank" title="Visit Example Site">Click Here</a>
  <img src="logo.png" alt="Company Logo" width="100" height="100">
  `

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

const Links = {

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
  img:
  `<img src="image.jpg" alt="Description of the image">`,
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

  <h2>Unordered List</h2>
  <ul class="custom-bullets">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>

  <h2>Ordered List</h2>
  <ol class="custom-numbers">
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
  </ol>

  <h2>Description List</h2>
  <dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>
    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>
  </dl>

  <h2>Nested Lists</h2>
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

const Table = {
  table:
  `<table>
  <tr> <-- First row contain header>
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
  `<thead>
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
  </tr>
</thead>`,

  body:
  `<tbody>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
  </tr>
  <tr>
    <td>Data 3</td>
    <td>Data 4</td>
  </tr>
</tbody>`,

   foot:
   `<tfoot>
  <tr>
    <td>Total</td>
    <td>$100</td>
  </tr>
</tfoot>`,

  col:
  `<td colspan="2">Spans Two Columns</td>`,

  row:
  `<td colspan="2">Spans Two Columns</td>`,

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
        <td colspan="2">Data spanning two columns</td>
        <td>Data 4</td>
      </tr>
      <tr>
        <td rowspan="2">Data spanning two rows</td>
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

const Form = {
  form:
  `<form action="/submit" method="post">
  <!-- Form elements go here -->
</form>`,

  input:
  `<input type="text" name="username" placeholder="Enter your username">`,

  textArea:
  `<textarea name="comments" rows="4" cols="50" placeholder="Enter your comments"></textarea>`,

  btn:
  `<button type="submit">Submit</button>`,

  action:
  `<form action="/submit">`,

  method:
  `<form action="/login" method="post">`,

  encType:
  `<form enctype="multipart/form-data">`,

  require:
  `<input type="text" name="username" required>`,

  pattern:
  `<input type="text" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890">`,

  minMax:
  `<input type="text" name="username" minlength="3" maxlength="15">`,

  allTogether:
  `<!DOCTYPE html>
<html>
<head>
  <title>HTML Forms Example</title>
</head>
<body>
  <h1>HTML Forms</h1>
  
  <form action="/submit" method="post" enctype="multipart/form-data">
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
    
    <label for="country">Country:</label>
    <select id="country" name="country">
      <option value="usa">United States</option>
      <option value="uk">United Kingdom</option>
      <option value="canada">Canada</option>
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

const Semantic = {
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
  <style>
    body { font-family: Arial, sans-serif; }
    header, nav, main, section, article, aside, footer { padding: 20px; margin: 10px; border: 1px solid #ccc; }
    header { background-color: #f2f2f2; }
    nav ul { list-style: none; padding: 0; }
    nav ul li { display: inline; margin-right: 10px; }
    footer { background-color: #f2f2f2; text-align: center; }
  </style>
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

export {
  Intro,
  attribute,
  Text,
  Links,
  List,
  Table,
  Form,
  Semantic
};