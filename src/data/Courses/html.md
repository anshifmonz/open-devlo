# Introduction to HTML

## What is HTML?

HTML stands for HyperText Markup Language.  
HTML the standard markup language used to create web pages. Think of it as the structure of a website; you use tags to define elements like headings, paragraphs, links, images, and more.  
Each element tells the browser how to display content on the page.  
Without HTML, a web page would just be a jumble of text and images.  

## What is The Structure of an HTML document?

The structure of an HTML document is like a basic blueprint for a web page.

- `<!DOCTYPE html>`: Tells the browser that this is an HTML file.
- `<html>`: The root element of an HTML file that contains all the other elements on the page.
- `<head>`: Contains meta-information about the page, like the title, links to stylesheets, and scripts.
- `<title>`: Sets the title of the page, which appears in the browser tab.
- `<body>`: Contains the main content of the page, like text, images, and links.

### An Example of an HTML File:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Web Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph of text.</p>
  </body>
</html>
```


## What are Tags and Elements in HTML?

**HTML Tag:**

The building blocks of HTML, written in angle brackets like `<tag>`. They come in pairs: an opening tag `<tag>` and a closing tag `</tag>`, but some are self-closing like `<img />`.

**HTML Element**

An HTML element contains three parts: a start tag, some content, and an end tag. For example, `<p>This is a paragraph.</p>` is a paragraph element. 

Example:  `<tagname>Content</tagname>`

## Basic tags

  <!DOCTYPE html>: Declares the document type and version of HTML.
  <html>: The root element that wraps all the content on the page.
  <head>: Contains meta-information about the document, like its title and links to stylesheets.
  <title>: Sets the title of the document, shown in the browser tab.
  <body>: Contains the main content of the HTML document.
  <h1> to <h6>: Headings, with <h1> being the highest level and <h6> the lowest.
  <p>: Defines a paragraph.
  <a>: Creates a hyperlink.
  <img>: Embeds an image.
  <ul> and <ol>: Creates unordered (bulleted) and ordered (numbered) lists, respectively.
  <li>: List item, used inside <ul> or <ol>.
  <div>: A container for other HTML elements, used to group content.
  <span>: Inline container for text and other inline elements.
  <br>: Inserts a line break.
  <hr>: Inserts a horizontal rule (line).

  Example of putting all these tags together:
  \```
    <!DOCTYPE html>
    <html>
      <head>
        <title>My First Web Page</title>
      </head>
      <body>
        <h1>Welcome to My Website</h1>
        <p>This is a paragraph of text.</p>
        <p>Thin is a line breaked <br>text</p>
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
    </html>
  \```





# What is the Tags and Elements in HTML?

  - Tags: 
      - These are the building blocks of HTML.
      - Tags are used to create elements. 
      - They are written within angle brackets, like <tagname>.
      - Tags usually come in pairs: an opening tag <tagname> and a closing tag </tagname> but some tags are self-closing, like <img />

  - Elements:
    - An element is the combination of an opening tag, its content, and a closing tag.
    - Elements define the structure and content of the web page. For example, <p>This is a paragraph.</p> is a paragraph element.

    - Explanation:
      - <p> is the opening tag.
      - </p> is the closing tag.
      - This is a paragraph. is the content.
      - Together, they form a paragraph element.

# HTML Attributes

HTML attributes provide additional information about HTML elements. They are always specified in the opening tag of an element and are written as name-value pairs.

**Example**:
```html
<tagname attribute="value">Content</tagname>
```

## The id Attribute

Provides a unique identifier for an element.
   ```html
   <div id="unique-id">Content</div>
   ```

## The class Attribute

Assigns one or more class names to an element, allowing you to apply CSS styles or manipulate it with JavaScript.
   ```html
   <p class="highlight">This is highlighted text.</p>
   ```

## The href Attribute

Specifies the URL for a hyperlink.
   ```html
   <a href="https://www.example.com">Visit Example</a>
   ```

## The src Attribute

Defines the source URL for images, scripts, etc.
   ```html
   <img src="image.jpg" alt="Description of the image">
   ```

## The alt Attribute

Provides alternative text for images, useful for accessibility.
   ```html
   <img src="logo.png" alt="Company Logo">
   ```

## The title Attribute

Offers additional information about an element, often shown as a tooltip when you hover over it.
   ```html
   <button title="Click me">Button</button>
   ```

## The style Attribute

Allows inline CSS styles to be applied directly to an element.
   ```html
   <p style="color: blue;">This text is blue.</p>
   ```

## The type Attribute

Defines the type of an input element or script.
   ```html
   <input type="text" placeholder="Enter text here">
   ```

## The value Attribute

Specifies the value of an input element.
    ```html
    <input type="text" value="Default text">
    ```

### **Example**

Here’s an example combining several attributes:
```html
<a href="https://www.example.com" target="_blank" title="Visit Example Site">Click Here</a>
<img src="logo.png" alt="Company Logo" width="100" height="100">
```

In this example:
- The `<a>` tag has `href`, `target`, and `title` attributes.
- The `<img>` tag has `src`, `alt`, `width`, and `height` attributes.


# HTML Text

## Formatting Text

Formatting text in HTML involves using various tags and elements to style and structure text on a web page. 

### The `<br>` Tag

Inserts a line break.

```html
<p>Line one<br>Line two</p>
```

### The `<b>` Tag

Makes text bold.

```html
<b>This text is bold.</b>
```

### The `<i>` Tag

Makes text italic.

```html
<i>This text is italic.</i>
```

### The `<strong>` Tag

Indicates that the text is of strong importance (usually bold).

```html
<strong>Important text</strong>
```

### The `<em>` Tag

Indicates that the text should be emphasized (usually italic).

```html
<em>Emphasized text</em>
```

### The `<u>` Tag

Underlines the text.

```html
<u>Underlined text</u>
```

## Aligning Text

### The `<span>` Tag

Applies styles or classes to a portion of text without affecting its block-level formatting.

  ```html
  <span style="color: red;">Red text</span>
  ```

### The `<pre>` Tag

Displays text in a preformatted way, preserving whitespace and line breaks.

  ```html
  <pre>
    Preformatted text
    with preserved spacing.
  </pre>
  ```

### The `<blockquote>` Tag

Represents a section that is quoted from another source, typically displayed with indentation.

  ```html
  <blockquote>
    This is a block quote.
  </blockquote>
  ```

### The `<q>` Tag

Represents a short inline quotation.

  ```html
  <q>This is an inline quote.</q>
  ```

### The `<code>` Tag

Displays a single line of code.

  ```html
  <code>const x = 10;</code>
  ```


### **Example Combining Various Tags**

```html
<!DOCTYPE html>
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
</html>
```

# HTML Links

HTML links are used to create hyperlinks that connect web pages or resources.

- **`<a>`**: The anchor tag creates hyperlinks. The `href` attribute specifies the URL of the page or resource the link points to.
  
  ```html
  <a href="https://www.example.com">Visit Example</a>
  ```

  - **`href`**: Specifies the target URL.
  - **Visit Example**: The clickable text or content will be displayed in page.

### **Attributes of Anchor Tag**

1. **`href`**: Defines the destination URL of the link.
   ```html
   <a href="https://www.example.com">Go to Example</a>
   ```

2. **`target`**: Determines where the linked page or resourse will open.
   
   - **`_self`**: Opens the link in the same frame or window (default behavior).
   - **`_blank`**: Opens the link in a new tab or window.
   - **`_parent`**: Opens the link in the parent frame.
   - **`_top`**: Opens the link in the full window.
     
     ```html
     <a href="https://www.example.com" target="_blank">Open in New Tab</a>
     ```

3. **`title`**: Provides additional information about the link, often shown when the mouse hovers over the element.

   ```html
   <a href="https://www.example.com" title="Go to Example Site">Visit Example</a>
   ```

4. **`rel`**: Specifies the relationship between current document and linked document. Useful for SEO and security.

   - **`nofollow`**: Tells search engines not to follow the link.
      - Use cases:
        - Preventing Spam: Stops spammy links from boosting their site's ranking.
        - Untrusted Content: Avoids endorsing untrusted sites with link value.

   - **`noopener`**: Prevents the new page from accessing the `window.opener` property through javascript.
      - Use cases:
        - Security: Prevents the new page from controlling the original page.
        - Performance: Reduces overhead by preventing the new page from interacting with the original page.

   - **`noreferrer`**: Prevents the browser from sending the referrer information.
      - Use cases:
        - Privacy: Prevents the new page from seeing where the link came from by not sending referrer information.
        - Security: Implicitly includes the benefits of rel="noopener", preventing the new page from accessing the original page.

     ```html
     <a href="https://www.example.com" rel="nofollow noopener noreferrer">Do Not Follow</a>
     ```

5. **`download`**: Indicates that the link is for downloading a file.
   
   ```html
   <a href="file.zip" download>Download File</a>
   ```

### **Linking to Different Types of Resources**

1. **External Web Pages**
   ```html
   <a href="https://www.example.com">Visit Example</a>
   ```

2. **Internal Links (within the same page)**
   - Create a link to a specific page within the same website.
   
   ```html
   <a href="/products">Go to Product Page</a>
   ```

3. **Email Links**
   - Opens the default email client with a pre-filled email address.

   ```html
   <a href="mailto:example@example.com">Email Us</a>
   ```

4. **Phone Links**
   - Initiates a phone call on devices that support.
   
   ```html
   <a href="tel:+1234567890">Call Us</a>
   ```

### **Example Combining Various Link Types**

```html
<!DOCTYPE html>
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
```


# HTML Images

Images are inserted to a web page using the `<img>` tag, It’s a self-closing tag, meaning it doesn’t require a closing tag. 

  ```html
  <img src="image.jpg" alt="Description of the image">
  ```

### **Key Attributes**

1. **`src`**: Specifies the URL (external) or path (internal) to the image file.
   
   ```html
   <img src="image.jpg" alt="A beautiful landscape">
   ```

2. **`alt`**: This is crucial for accessibility and SEO, and also provide alternative text for the image if not displayed. 

   ```html
   <img src="logo.png" alt="Company Logo">
   ```

3. **`width`** and **`height`**: Define the dimensions of the image. You can use pixels (`width="300"`) or percentages (`width="50%"`).
   
   ```html
   <img src="image.jpg" alt="Description" width="300" height="200">
   ```

4. **`title`**: Displays a tooltip with additional information when the user's mouse hovers over the image.
   
   ```html
   <img src="image.jpg" alt="Description" title="Hover text">
   ```

5. **`loading`**: Specifies how the browser should load the image. `lazy` (for lazy loading) and `eager` (for immediate loading).
   
   ```html
   <img src="image.jpg" alt="Description" loading="lazy">
   ```

### **Responsive Images**

- **`<picture>`**: Allow to specify different images for different screen sizes or resolutions.
  
  ```html
  <picture>
    <source srcset="image-small.jpg" media="(max-width: 600px)">
    <source srcset="image-large.jpg" media="(min-width: 601px)">
    <img src="image-default.jpg" alt="Responsive Image">
  </picture>
  ```

- **`srcset`**: Defines multiple image sources for different screen resolutions.
  
  ```html
  <img src="image.jpg" srcset="image-small.jpg 600w, image-large.jpg 1200w" alt="Responsive Image">
  ```

# HTML Lists

HTML lists are used to group and organize content into a list format. There are three types of lists:

### **1. Unordered List**

In an unordered list, the order of the items does not matter. It is typically displayed with bullet points.

- **Tag**: `<ul>`
- **List Item Tag**: `<li>`

**Example:**
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

### **2. Ordered List**

In an ordered list, the order of the items is important. It is typically displayed with numbers or letters.

- **Tag**: `<ol>`
- **List Item Tag**: `<li>`

**Example:**
```html
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

### **3. Description List**

A description list is used for terms and descriptions. It’s useful for defining terms or creating glossary-like lists.

- **Tag for List**: `<dl>`
- **Tag for Term**: `<dt>` (Definition Term)
- **Tag for Description**: `<dd>` (Definition Description)

**Example:**
```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language, the standard language for creating web pages.</dd>
  
  <dt>CSS</dt>
  <dd>Cascading Style Sheets, used to style and layout web pages.</dd>
  
  <dt>JavaScript</dt>
  <dd>A programming language used to create interactive effects within web browsers.</dd>
</dl>
```

### **Nested Lists**

Lists can be nested inside each other to create hierarchical/ranked or levels/layers structures.

**Example:**
```html
<ul>
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
</ul>
```

### **Attributes for List**

1. **`type` Attribute** (for ordered lists): Specifies the type of numbering (e.g., numbers, letters, roman numerals).
   - **`1`**: Numbers (default)
   - **`a`**: Lowercase letters
   - **`A`**: Uppercase letters
   - **`i`**: Lowercase roman numerals
   - **`I`**: Uppercase roman numerals

   **Example:**
   ```html
   <ol type="A">
     <li>Item A</li>
     <li>Item B</li>
   </ol>
   ```

2. **`start` Attribute** (for ordered lists): Specifies the starting number for the list.
   **Example:**
   ```html
   <ol start="5">
     <li>Item 5</li>
     <li>Item 6</li>
   </ol>
   ```

### **Example Combining All List Types**

```html
<!DOCTYPE html>
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
```

# HTML Tables

Skip

HTML tables are used to display data in a tabular format, organized into rows and columns.

### **Basic Structure**

A table consists of the following main elements:

1. **`<table>`**: The container for the entire table.
2. **`<tr>`**: Defines a table row.
3. **`<th>`**: Defines a table header cell, usually bold and centered.
4. **`<td>`**: Defines a table data cell, containing data.

**Basic Example:**
```html
<table>
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
</table>
```

### **Table Sections**

1. **`<thead>`**: Groups the header content.
   ```html
   <thead>
     <tr>
       <th>Header 1</th>
       <th>Header 2</th>
     </tr>
   </thead>
   ```

2. **`<tbody>`**: Groups the body content of the table.
   ```html
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
   ```

3. **`<tfoot>`**: Groups the footer content.
   ```html
   <tfoot>
     <tr>
       <td>Total</td>
       <td>$100</td>
     </tr>
   </tfoot>
   ```

### **Colspan and Rowspan**

- **`colspan`**: Specifies the number of columns a cell should span/take.
  
  ```html
  <td colspan="2">Spans Two Columns</td>
  ```

- **`rowspan`**: Specifies the number of rows a cell should span/take.
  
  ```html
  <td rowspan="2">Spans Two Rows</td>
  ```

### **Example Combining All Elements**

```html
<!DOCTYPE html>
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
```

This example covers the basics of creating and formatting tables in HTML, including the structure, attributes, and styling options available for tables.

# HTML Forms

Forms are used to collect user input and submit data to a server. Forms are crucial for user interactions such as login, registration, and data entry.

### **Basic Structure**

```html
<form action="/submit" method="post">
  <!-- Form elements go here -->
</form>
```

**`<form>`**: The container for all form elements.  
**`action`**: Data will be sent to the specific the URL.  
**`method`**: Specific the HTTP method to use (`GET` or `POST`, etc).  

### **Form Elements**

1. **Text Input**
   - **`<input type="text">`**: Creates a single-line text input field.
   - **`name`**: The name attribute is used to reference form data after submission.
   - **`placeholder`**: Provides a hint to the user about what to enter.

   **Example:**
   ```html
   <input type="text" name="username" placeholder="Enter your username">
   ```

   The type attribute allow us to determine the type of input. The common ones are:

    - **Password**
      - **`<input type="password">`**: Creates a field for entering passwords (the text is obscured).

    - **Radio Buttons**
      - **`<input type="radio">`**: Allows the user to select one option from a set.

    - **Checkboxes**
      - **`<input type="checkbox">`**: Allows the user to select one or more options.

    - **Select Dropdown**
      - **`<select>`**: Creates a dropdown menu.
      - **`<option>`**: Defines the options within the dropdown.

    - **File Input**
      - **`<input type="file">`**: Allows users to upload files.

    - **Hidden Input**
      - **`<input type="hidden">`**: Stores data that is not visible to the user but can be submitted with the form.

2. **Textarea**
   - **`<textarea>`**: Creates a multi-line text input field.

   **Example:**
   ```html
   <textarea name="comments" rows="4" cols="50" placeholder="Enter your comments"></textarea>
   ```

3. **Button**
    - **`<button>`**: A clickable button that can be used to submit the form or trigger other actions.

    **Example:**
    ```html
    <button type="submit">Submit</button>
    ```

### **Form Attributes**

1. **`action`**: Specifies the URL where the form data should be sent.
   ```html
   <form action="/submit">
   ```

2. **`method`**: Specifies the HTTP method to use for form submission. Options include:
   - **`GET`**: Appends form data to the URL as query parameters.
   - **`POST`**: Sends form data in the body of the request (more secure for sensitive data).

   **Example:**
   ```html
   <form method="post">
   ```

3. **`enctype`**: Specifies how the form data should be encoded when submitting it to the server. Common values include:
   - **`application/x-www-form-urlencoded`**: Default encoding for form data.
   - **`multipart/form-data`**: Used for file uploads.
   - **`text/plain`**: Submits form data as plain text.

   **Example for file uploads:**
   ```html
   <form enctype="multipart/form-data">
   ```

### **Form Validation**

1. **Required Field**
   - **`required`**: Ensures that the field must be filled out before submitting the form.

   **Example:**
   ```html
   <input type="text" name="username" required>
   ```

2. **Pattern Matching**
   - **`pattern`**: Specifies a regular expression for validating input.

   **Example:**
   ```html
   <input type="text" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890">
   ```

3. **Min/Max Length**
   - **`minlength`** and **`maxlength`**: Set the minimum and maximum length of text input fields.

   **Example:**
   ```html
   <input type="text" name="username" minlength="3" maxlength="15">
   ```

4. **Email and URL Validation**
   - **`type="email"`**: Validates that the input is a valid email address.
   - **`type="url"`**: Validates that the input is a valid URL.

   **Example:**
   ```html
   <input type="email" name="email" required>
   <input type="url" name="website">
   ```

### **Example Combining All Form Elements**

```html
<!DOCTYPE html>
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
</html>
```

# Semantic Tags

Semantic HTML tags provide meaning to the web content. They clearly describe their purpose to the browser and developer, improving the structure and readability of the HTML document.  

## **1. Header Tag**

- **`<header>`**: Represents a container for introductory content or navigational links. Typically contains one or more heading elements (`<h1>` - `<h6>`) or logo.

  **Example:**
  ```html
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
  ```

### **2. Navigation Tag**

- **`<nav>`**: A section of the page intended for navigation links.

  **Example:**
  ```html
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
  ```

### **3. Main Tag**

- **`<main>`**: Represents the main content of the `<body>`. There should only be one `<main>` element per document.

  **Example:**
  ```html
  <main>
    <h2>Welcome to My Website</h2>
    <p>This is the main content of the page.</p>
  </main>
  ```

### **4. Section Tag**

- **`<section>`**: A standalone section of content which can have a heading.

  **Example:**
  ```html
  <section>
    <h2>About Us</h2>
    <p>We are a company that values...</p>
  </section>
  ```

### **5. Article Tag**

- **`<article>`**: Represents a self-contained piece of content that can be independently distributed or reused (blog post, news article).

  **Example:**
  ```html
  <article>
    <h2>Latest News</h2>
    <p>Today we launched our new product...</p>
  </article>
  ```

### **6. Aside Tag**

- **`<aside>`**: Represents content that is indirectly related to the surrounding content. (sidebars).

  **Example:**
  ```html
  <aside>
    <h3>Related Articles</h3>
    <ul>
      <li><a href="#article1">Article 1</a></li>
      <li><a href="#article2">Article 2</a></li>
    </ul>
  </aside>
  ```

### **7. Footer Tag**

- **`<footer>`**: Represents the footer for its closest section or the whole page. It usually contains information about the author, copyright details, or links to related documents.

  **Example:**
  ```html
  <footer>
    <p>&copy; 2024 My Website. All rights reserved.</p>
  </footer>
  ```

### **8. Figure and Figcaption Tags**

- **`<figure>`**: Represents self-contained content, like images, diagrams, or code snippets, usually with a caption.

- **`<figcaption>`**: Provides a caption or legend for the content of the `<figure>`.

  **Example:**
  ```html
  <figure>
    <img src="image.jpg" alt="Description of image">
    <figcaption>This is an image caption.</figcaption>
  </figure>
  ```


### **Why Use Semantic Tags?**

**Accessibility**: Using semantic tags helps screen readers and other tools understand the layout and content of the page, making it easier for everyone to use.
**SEO**: Search engines can better understand and rank your content when you use semantic tags.
**Maintainability**: Semantic tags make your HTML code cleaner and easier for developers to work with.
**Standardization**: Using semantic HTML follows web standards, ensuring your site works well across different browsers.

### **Example Combining Semantic Tags**

```html
<!DOCTYPE html>
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
</html>
```

