const syntax = {
  syntax: 
  {
    css:`p {
    color: blue;
    font-size: 16px;
  }`,

  html: `<p>This is a paragraph</p>`
  }
}

const selectorCode = {
  universal:
  `* {
    margin: 0;
    padding: 0;
}`,

  type: {
    css:`h1 {
    color: green;
}`,
    html: `<h1>Hello world</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ex ornare, feugiat arcu fringilla.</p>`
  },

  id: {
    css: `#header {
    background-color: gray;
    text-align: center;
}`,
    html: `<div id="header">Header Section</div>`
  },

  class: {
    css: `.intro {
    font-style: italic;
}`,
    html: `<p class="intro">This is an introductory paragraph.</p>`
  },

  attr: {
    css: `input[type="text"] {
    border: 1px solid black;
}`,
    html: `<input type="text" placeholder="Enter text here">`
  },

  descendant: {
    css: `div p {
    color: red;
}`,
    html: `<div><p>This is a paragraph inside a div.</p></div>`
  },

  child: {
    css: `ul > li {
    list-style-type: none;
}`,
    html: `<ul>
    <li>List item 1</li>
    <li>List item 2</li>
</ul>`
  },

  adjacent: {
    css: `h2 + p {
    margin-top: 10px;
}`,
    html: `<h2>Heading 2</h2>
<p>This paragraph is adjacent to the heading.</p>`
  },

  general: {
    css: `h2 ~ p {
    color: blue;
}`,
    html: `<h2>Heading 2</h2>
<p>This is a following paragraph.</p>
<p>Another following paragraph.</p>`
  },

  pseudoClass: {
    css: `a:hover {
    color: red;
}`,
    html: `<a href="#">Hover over this link</a>`
  },

  pseudoClass1: {
    css: `p:first-child {
    font-weight: bold;
}`,
    html: `<div>
    <p>This is the first paragraph.</p>
    <p>This is another paragraph.</p>
</div>`
  },

  pseudoElement: {
    css: `p::before {
    content: "Note: ";
    font-weight: bold;
}`,
    html: `<p>This is a paragraph with a pseudo-element before it.</p>`
  },

  pseudoElement1: {
    css: `p::after {
    content: " *";
    color: red;
}`,
    html: `<p>This is a paragraph with a pseudo-element after it.</p>`
  },

  combining: {
    css: `div.intro > p.highlight {
    color: yellow;
}`,
    html: `<div class="intro">
    <p class="highlight">Highlighted paragraph inside an intro div.</p>
</div>`
  },

  comment: {
    css: `h1 {
    color: green;  /* This is a comment */
}`,
    html: `<h1>This is a heading with a comment in the CSS</h1>`
  }
}

const textCode = {
  media:{ 
    css:`@media (max-width: 600px) {
    body {
        font-size: 12px;
    }
}`,

  html:`<h1>Hello world</h1>
<p>This is a paragraph</p>`
  },
}

const backgroundCode = {
  multiBackground: {
    css:`.box {
    width: 500px;
    height: 200px;
    background-image: url('https://via.placeholder.com/500x100/FF6347/ffffff?text=Top+Image'), url('https://via.placeholder.com/500x100/4682B4/ffffff?text=Bottom+Image');
    background-position: center top, center bottom;
    background-repeat: no-repeat;
}`,
    
  html:`<div class="box"></div>` 
  }
}

const positionCode = {
  static: {
    css: `div {
    position: static; /* Default behavior */
    background-color: #f0f0f0;
    color: #000000;
    padding: 20px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
}`,
    html: `<div>This div has a static position (default).</div>`
  },

  relative: {
    css: `div {
    position: relative;
    top: 10px;
    left: 20px;
    background-color: #3498db;
    color: white;
    padding: 20px;
    border-radius: 5px;
}`,
    html: `<div>This div is positioned relative, offset by 10px from the top and 20px from the left.</div>`
  },

  absolute: {
    css: `.container {
    position: relative; /* The container is positioned, so the absolute div is relative to it */
    background-color: #f0f0f0;
    padding: 50px;
    height: 300px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
}

.absolute {
    position: absolute;
    top: 20px;
    right: 30px;
    background-color: #2ecc71;
    color: white;
    padding: 20px;
    border-radius: 5px;
}`,
    html: `<div class="container">
    <div class="absolute">This div is absolutely positioned 50px from the top and 30px from the right.</div>
</div>`
  },

  fixed: {
    css: `div {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #e74c3c;
    color: white;
    padding: 10px;
    text-align: center;
}`,
    html: `<div>This div is fixed at the top-left corner of the viewport.</div>`
  },

  sticky: {
    css: `div {
    position: sticky;
    top: 10px;
    background-color: #8e44ad;
    color: white;
    padding: 20px;
    margin: 50px 0;
    border-radius: 5px;
}`,
    html: `<div>This div will stick to the top of the page when you scroll past it, with a 10px offset.</div>`
  },

  zIndex: {
    css: `div {
    position: absolute;
    top: 10px;
    left: 50px;
    z-index: 10; /* High z-index to stack above others */
    background-color: #f39c12;
    color: white;
    padding: 20px;
    border-radius: 5px;
}

.lower {
    position: absolute;
    top: 50px;
    left: 10px;
    z-index: 1;
    background-color: #95a5a6;
}`,
    html: `<div class="lower">This div is lower in the stacking order (z-index: 1).</div>
<div>This div is absolutely positioned with a z-index of 10, stacking it above lower-indexed elements.</div>`
  }

}

const flexBoxCode = {
  container: {
    css: `.container {
    display: flex;
    background-color: lightgray;
    padding: 10px;
}`,
    html: `<div class="container">
    <div class="item" style="background-color: lightblue;">Item 1</div>
    <div class="item" style="background-color: lightcoral;">Item 2</div>
    <div class="item" style="background-color: lightgreen;">Item 3</div>
</div>`
  },

  flexDirection: {
    css: `.container {
    display: flex;
    flex-direction: column;
}`,
    html: `<div class="container">
    <div class="item" style="background-color: lightblue;">Item 1</div>
    <div class="item" style="background-color: lightcoral;">Item 2</div>
    <div class="item" style="background-color: lightgreen;">Item 3</div>
</div>`
  },

  flexWrap: {
    css: `.container {
    display: flex;
    flex-wrap: wrap;
}
    

.item {
    width: 25%;
    min-width: 150px
}`,
    html: `<div class="container">
    <div class="item" style="background-color: lightblue;">Item 1</div>
    <div class="item" style="background-color: lightcoral;">Item 2</div>
    <div class="item" style="background-color: lightgreen;">Item 3</div>
</div>`
  },

  flexFlow: {
    css: `.container {
    display: flex;
    flex-flow: row wrap;
}
    
.item {
    width: 25%;
    min-width: 150px
}`,
    html: `<div class="container">
    <div class="item" style="background-color: lightblue;">Item 1</div>
    <div class="item" style="background-color: lightcoral;">Item 2</div>
    <div class="item" style="background-color: lightgreen;">Item 3</div>
</div>`
  },

  justifyContent: {
    css: `.container {
    display: flex;
    justify-content: center;
}
    
.item {
    padding: 8px;
}`,
    html: `<div class="container">
    <div class="item" style="background-color: lightblue;">Item 1</div>
    <div class="item" style="background-color: lightcoral;">Item 2</div>
    <div class="item" style="background-color: lightgreen;">Item 3</div>
</div>`
  },

  alignItems: {
    css: `.container {
    display: flex;
    align-items: center;
    height: 150px;
}
    
.item {
    padding: 8px;
}`,
    html: `<div class="container">
    <div class="item" style="background-color: lightblue;">Item 1</div>
    <div class="item" style="background-color: lightcoral;">Item 2</div>
    <div class="item" style="background-color: lightgreen;">Item 3</div>
</div>`
  },

  alignContent: {
    css: `.container {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    height: 150px;
}`,
    html: `<div class="container">
    <div class="item" style="background-color: lightblue;">Item 1</div>
    <div class="item" style="background-color: lightcoral;">Item 2</div>
    <div class="item" style="background-color: lightgreen;">Item 3</div>
</div>`
  },

  flexGrow: {
    css: `.container {
    display: flex;
}

.item {
    flex-grow: 1;
}
    
.item2 {
    flex-grow: 2;
}`,
    html: `<div class="container">
    <div class="item item1" style="background-color: lightblue;">Item 1</div>
    <div class="item item2" style="background-color: lightcoral;">Item 2</div>
    <div class="item item3" style="background-color: lightgreen;">Item 3</div>
</div>`
  },

  flexShrink: {
    css: `.container {
    display: flex;
}

.item {
    width: 150px
}
    
.item2 {
    flex-shrink: 0;
}`,
    html: `<div class="container">
    <div class="item item1" style="background-color: lightblue;">Item 1</div>
    <div class="item item2" style="background-color: lightcoral;">Item 2</div>
    <div class="item item3" style="background-color: lightgreen;">Item 3</div>
</div>`
  },

  flexBasis: {
    css: `.container {
    display: flex;
}
.item {
    flex-basis: 100px;
}`,
    html: `<div class="container">
    <div class="item" style="background-color: lightblue;">Item 1</div>
    <div class="item" style="background-color: lightcoral;">Item 2</div>
    <div class="item" style="background-color: lightgreen;">Item 3</div>
</div>`
  },

  flex: {
    css: `.container {
    display: flex;
}
.item {
    flex: 1 0 200px;
  }`,
    html: `<div class="container">
    <div class="item" style="background-color: lightblue;">Item 1</div>
    <div class="item" style="background-color: lightcoral;">Item 2</div>
    <div class="item" style="background-color: lightgreen;">Item 3</div>
</div>`
  },

  alignSelf: {
    css: `.container {
    display: flex;
    height: 150px;
}
.item2 {
    align-self: center;
}`,
    html: `<div class="container">
    <div class="item item1" style="background-color: lightblue;">Item 1</div>
    <div class="item item2" style="background-color: lightcoral;">Item 2 (centered)</div>
    <div class="item item3" style="background-color: lightgreen;">Item 3</div>
</div>`
  }
}

const gridCode = {
  container: {
    css: `.container {
    display: grid;
    background-color: lightgray;
    padding: 10px;
}`,
    html: `<div class="container">
    <div class="item" style="background-color: lightblue;">Item 1</div>
    <div class="item" style="background-color: lightcoral;">Item 2</div>
    <div class="item" style="background-color: lightgreen;">Item 3</div>
</div>`
  },

  fixColRow: {
    css: `.container {
    display: grid;
    grid-template-columns: 100px 200px; /* Two columns: 100px and 200px wide */
    grid-template-rows: 50px 100px; /* Two rows: 50px and 100px tall */
}`,
    html: `<div class="container">
    <div class="item" style="background-color: lightblue;">Item 1</div>
    <div class="item" style="background-color: lightcoral;">Item 2</div>
    <div class="item" style="background-color: lightgreen;">Item 3</div>
    <div class="item" style="background-color: lightpink;">Item 4</div>
</div>`
  },

  fractionalUnit: {
    css: `.container {
    display: grid;
    grid-template-columns: 1fr 2fr; /* First column takes 1 part, second takes 2 parts */
    grid-template-rows: 1fr 2fr; /* Similar for rows */
}`,
    html: `<div class="container">
    <div class="item" style="background-color: lightblue;">Item 1</div>
    <div class="item" style="background-color: lightcoral;">Item 2</div>
    <div class="item" style="background-color: lightgreen;">Item 3</div>
    <div class="item" style="background-color: lightpink;">Item 4</div>
</div>`
  },
  
  autoFill: {
    css: `.container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    /* Fills the row with columns, even if there are empty spaces */
    gap: 10px;
    padding: 20px;
}

.item {
    padding: 20px;
    text-align: center;
    color: white;
}`,
    html: `<div class="container">
    <div class="item" style="background-color: lightblue;">Item 1</div>
    <div class="item" style="background-color: lightcoral;">Item 2</div>
    <div class="item" style="background-color: lightgreen;">Item 3</div>
    <div class="item" style="background-color: lightpink;">Item 4</div>
    <div class="item" style="background-color: lightsalmon;">Item 5</div>
</div>`
  },

  autoFit: {
    css: `.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    /* Adjusts columns to fit the space and collapse empty spaces */
    gap: 10px;
    padding: 20px;
}

.item {
    padding: 20px;
    text-align: center;
    color: white;
}`,
    html: `<div class="container">
    <div class="item" style="background-color: lightblue;">Item 1</div>
    <div class="item" style="background-color: lightcoral;">Item 2</div>
    <div class="item" style="background-color: lightgreen;">Item 3</div>
    <div class="item" style="background-color: lightpink;">Item 4</div>
    <div class="item" style="background-color: lightsalmon;">Item 5</div>
</div>`
  },

  gridTemplateArea: {
    css: `.container {
    display: grid;
    grid-template-areas: 
        "header header header header header"
        "sidebar content content content content "
        "footer footer footer footer footer";
}

.item-header { grid-area: header; background-color: lightblue; height: 35;}
.item-sidebar { grid-area: sidebar; background-color: lightcoral; height: 200px; }
.item-content { grid-area: content; background-color: lightgreen; }
.item-footer { grid-area: footer; background-color: lightpink; height: 80; }`,
    html: `<div class="container">
    <div class="item-header">Header</div>
    <div class="item-sidebar">Sidebar</div>
    <div class="item-content">Content</div>
    <div class="item-footer">Footer</div>
</div>`
  },

  gridGap: {
    css: `.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 10px; /* Gap between rows and columns */
}
    
.item {
     padding: 10px;
}`,
    html: `<div class="container">
    <div class="item" style="background-color: lightblue;">Item 1</div>
    <div class="item" style="background-color: lightcoral;">Item 2</div>
    <div class="item" style="background-color: lightgreen;">Item 3</div>
    <div class="item" style="background-color: lightgreen;">Item 3</div>
</div>`
  },

  specificGap: {
    css: `.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 20px; /* Gap between rows */
    grid-column-gap: 10px; /* Gap between columns */
}

.item {
     padding: 10px;
}`,
    html: `<div class="container">
    <div class="item" style="background-color: lightblue;">Item 1</div>
    <div class="item" style="background-color: lightcoral;">Item 2</div>
    <div class="item" style="background-color: lightcoral;">Item 2</div>
    <div class="item" style="background-color: lightgreen;">Item 3</div>
</div>`
  },

  alignItems: {
    css: `.container {
  display: grid;
    grid-template-columns: repeat(3, 1fr); /* Creates a 3-column grid */
    align-items: center; /* Center items vertically in their grid areas */
    height: 200px; /* Container height */
    gap: 10px; /* Adds spacing between items */
}
.item {
    padding: 20px;
    text-align: center;
    color: white;
}`,
    html: `<div class="container">
  <div class="item" style="background-color: lightblue;">Item 1</div>
  <div class="item" style="background-color: lightcoral;">Item 2</div>
  <div class="item" style="background-color: lightgreen;">Item 3</div>
</div>`
  },

  justifyItem: {
    css: `.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3-column grid */
    justify-items: center; /* Centers items horizontally */
    gap: 10px;
}
.item {
    padding: 20px;
    text-align: center;
    color: white;
}`,
    html: `<div class="container">
    <div class="item" style="background-color: lightblue;">Item 1</div>
    <div class="item" style="background-color: lightcoral;">Item 2</div>
    <div class="item" style="background-color: lightgreen;">Item 3</div>
</div>`
  },

  alignContent: {
    css: `.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3-column grid */
    align-content: center; /* Centers the grid vertically in the container */
    height: 200px; /* Defined height to see the effect */
    gap: 10px;
}
.item {
    padding: 20px;
    text-align: center;
    color: white;
}`,
    html: `<div class="container">
    <div class="item" style="background-color: lightblue;">Item 1</div>
    <div class="item" style="background-color: lightcoral;">Item 2</div>
    <div class="item" style="background-color: lightgreen;">Item 3</div>
</div>`
  },

  justifyContent: {
    css: `.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3-column grid */
    justify-content: center; /* Centers the entire grid horizontally */
    gap: 10px;
}
.item {
    padding: 20px;
    text-align: center;
    color: white;
}`,
    html: `<div class="container">
    <div class="item" style="background-color: lightblue;">Item 1</div>
    <div class="item" style="background-color: lightcoral;">Item 2</div>
    <div class="item" style="background-color: lightgreen;">Item 3</div>
</div>`
  },

  gridTemplateAreas: {
    css: `.container {
    display: grid;
    grid-template-areas: 
        "header header header"
        "sidebar content content"
        "footer footer footer";
}

.item-header { grid-area: header; background-color: lightblue; }
.item-sidebar { grid-area: sidebar; background-color: lightcoral; }
.item-content { grid-area: content; background-color: lightgreen; }
.item-footer { grid-area: footer; background-color: lightpink; }`,
    html: `<div class="container">
    <div class="item-header">Header</div>
    <div class="item-sidebar">Sidebar</div>
    <div class="item-content">Content</div>
    <div class="item-footer">Footer</div>
</div>`
  },

  responsiveDesign: {
    css: `.container {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Two columns by default */
}

.item {
    padding: 10px;
}

@media (min-width: 600px) {
    .container {
        grid-template-columns: repeat(3, 1fr); /* Three columns for larger screens */
    }
}`,
    html: `<div class="container">
    <div class="item" style="background-color: lightblue;">Item 1</div>
    <div class="item" style="background-color: lightcoral;">Item 2</div>
    <div class="item" style="background-color: lightgreen;">Item 3</div>
</div>`
  },

  advancedFeature: {
    css: `.container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.subgrid-container {
    display: grid;
    grid-template-columns: subgrid; /* Inherits columns from the parent grid */
    gap: 10px;
}

.item {
    background-color: lightblue;
    padding: 20px;
    text-align: center;
    color: darkblue;
}

.subgrid-item {
    background-color: lightcoral;
    padding: 10px;
    text-align: center;
    color: white;
}`,
    html: `<div class="container">
    <div class="item">Parent Item 1</div>
    <div class="subgrid-container">
        <div class="subgrid-item">Subgrid Item 1</div>
        <div class="subgrid-item">Subgrid Item 2</div>
    </div>
    <div class="item">Parent Item 2</div>
</div>`
  }
}

const animationCode = {
  transSyntax: {
    css:`.element {
    transition: property duration timing-function delay;
}`
  },

  transition: {
    css: `.button {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    transition: background-color 0.5s ease;
}

.button:hover {
    background-color: green;
}`,
    html: `<button class="button">Hover over me</button>`
  },

  keyFramesSyntax: {
    css: `@keyframes animation-name {
    0% { /* starting state */ }
    50% { /* midway state */ }
    100% { /* ending state */ }
}`
  },

  keyFrames: {
    css: `@keyframes slide {
    0% { transform: translateX(0); }
    100% { transform: translateX(100px); }
}

.box {
    width: 100px;
    height: 100px;
    background-color: red;
    animation: slide 2s ease infinite;
}`,
    html: `<div class="box"></div>`
  }
}

const transitionCode = {
  syntax: {
    css: `.element { 
    background-color: blue;
    width: 100px;
    height: 100px;
    transition: background-color 1s ease; /* Property, duration, and easing function */
}

.element:hover {
    background-color: red; /* Changes background-color when hovered */
}`,
    html: `<div class="element"></div>`
  },

  property: {
    css: `.element {
    width: 100px;
    height: 100px;
    background-color: blue;
    transition: width 0.5s, background-color 0.3s;
}

.element:hover {
    width: 200px; /* Width transition happens over 0.5 seconds */
    background-color: red; /* Background-color transition happens over 0.3 seconds */
}`,
    html: `<div class="element"></div>`
  },

  individual: {
    css: `.element {
    width: 100px;
    height: 100px;
     background-color: blue;
    opacity: 1;
    transform: translateX(0);
    transition-property: opacity, transform; /* Properties to animate */
    transition-duration: 0.4s; /* Duration for both properties */
    transition-timing-function: ease-in-out; /* Speed curve */
    transition-delay: 0.2s; /* Start after a delay */
}

.element:hover {
    opacity: 0.5;
    transform: translateX(50px);
}`,
    html: `<div class="element"></div>`
  },

  timing: {
    css: `.element {
    width: 100px;
    height: 100px;
    background-color: blue;
    transition: all 1s cubic-bezier(0.68, -0.55, 0.27, 1.55); /* Custom easing */
}

.element:hover {
    width: 150px;
    background-color: red;
}`,
    html: `<div class="element"></div>`
  },

  multiple: {
    css: `.element {
    width: 100px;
    height: 100px;
    opacity: 1;
    background-color: blue;
    transition: width 0.5s ease, height 0.3s linear, opacity 0.2s ease-in;
}

.element:hover {
    width: 150px;
    height: 150px;
    opacity: 0.5;
}`,
    html: `<div class="element"></div>`
  },

  delay: {
    css: `.element {
    width: 100px;
    height: 100px;
    background-color: blue;
    transition: background-color 0.5s ease-in-out 1s; /* Delay of 1 second */
}

.element:hover {
    background-color: red;
}`,
    html: `<div class="element"></div>`
  },

  all: {
    css: `.element {
    width: 100px;
    height: 100px;
    background-color: blue;
    transition: all 0.3s ease-in-out;
}

.element:hover {
    width: 200px;
    height: 200px;
    background-color: red;
}`,
    html: `<div class="element"></div>`
  }
}

const keyframesCode = {
  syntax: {
    css: `@keyframes animation-name {
    0% {
        /* Properties to change */
    }
    100% {
        /* Properties to change */
    }
}`
  },

keyframe: {
  css: `@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.element {
    width: 100px;
    height: 100px;
    background-color: blue;
    animation: fadeIn 2s;
}`,
  html: `<div class="element"></div>`
},

multiple: {
  css: `@keyframes moveAndFade {
    0% {
        transform: translateX(0);
        opacity: 1;
    }
    50% {
        transform: translateX(100px);
        opacity: 0.5;
    }
    100% {
        transform: translateX(200px);
        opacity: 0;
    }
  }

.element {
    width: 100px;
    height: 100px;
    background-color: red;
    animation: moveAndFade 3s;
}`,
  html: `<div class="element"></div>`
},

fromTo: {
  css: `@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.element {
    width: 100px;
    height: 100px;
    background-color: green;
    animation: fadeIn 2s;
}`,
  html: `<div class="element"></div>`
},

  shortS: {
    css:`animation: name duration timing-function delay iteration-count direction fill-mode play-state;`
  },
}

const transformCode = {
  twoD: {
    css: `div {
      width: 100px;
      height: 100px;
      background-color: blue;
      transform: rotate(45deg);
      margin: 40px;
    }`,
    html: `<div></div>`
  },

  threeD: {
    css: `.container {
    perspective: 800px;
    width: 200px;
    height: 200px;
    margin: 50px auto 0px;
    }

.cube {
    width: 100px;
    height: 100px;
    background-color: green;
    transform-style: preserve-3d;
    transition: transform 2s ease;
    transform: rotateX(45deg) rotateY(45deg);
}

.cube:hover {
    transform: rotateX(180deg) rotateY(180deg);
}

.face {
    width: 100px;
    height: 100px;
    position: absolute;
    background-color: rgba(0, 255, 0, 0.7);
    border: 2px solid black;
}

.front { transform: translateZ(50px) }
.back { transform: rotateY(180deg) translateZ(50px) }
.left { transform: rotateY(-90deg) translateZ(50px) }
.right { transform: rotateY(90deg) translateZ(50px) }
.top { transform: rotateX(90deg) translateZ(50px) }
.bottom { transform: rotateX(-90deg) translateZ(50px) }`,

    html: `<div class="container">
    <div class="cube">
        <div class="face front"></div>
        <div class="face back"></div>
        <div class="face left"></div>
        <div class="face right"></div>
        <div class="face top"></div>
        <div class="face bottom"></div>
    </div>
</div>`
  }
}

const twoDTransfrom = {
  translate: {
    css: `.container {
    width: 300px;
    height: 300px;
    border: 2px solid black;
    position: relative;
    background-color: lightgray;
}

  .translate-box {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    transform: translate(50px, 100px); /* Moves 50px right and 100px down */
}`,
    html: `<div class="container">
    <div class="translate-box"></div>
</div>`
  },

  rotate: {
    css: `.container {
    width: 300px;
    height: 300px;
    border: 2px solid black;
    position: relative;
    background-color: lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
}

.rotate-box {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    transform: rotate(45deg); /* Rotates 45 degrees clockwise */
}`,
    html: `<div class="container">
    <div class="rotate-box"></div>
</div>`
  },

  scale: {
    css: `.container {
    width: 300px;
    height: 300px;
    border: 2px solid black;
    position: relative;
    background-color: lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
}

.scale-box {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    transform: scale(1.5, 2); /* Increases width 1.5 times, height 2 times */
}`,
    html: `<div class="container">
    <div class="scale-box"></div>
</div>`
  },

  skew: {
    css: `.container {
    width: 300px;
    height: 300px;
    border: 2px solid black;
    position: relative;
    background-color: lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
}

.skew-box {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    transform: skew(30deg, 10deg); /* Skews 30 degrees along the X axis and 10 degrees along the Y axis */
}`,
    html: `<div class="container">
    <div class="skew-box"></div>
</div>`
  },

  matrix: {
    css: `.container {
    width: 300px;
    height: 300px;
    border: 2px solid black;
    position: relative;
    background-color: lightgray;
}

.matrix-box {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    transform: matrix(1, 0.3, 0, 1, 20, 50); /* Applies scaling, skewing, and translation */
}`,
    html: `<div class="container">
    <div class="matrix-box"></div>
</div>`
  },

  multiple: {
    css: `.container {
    width: 300px;
    height: 300px;
    border: 2px solid black;
    position: relative;
    background-color: lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
}

.multiple-box {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    transform: translate(10px, -40px) rotate(40deg) scale(1.2); /* Moves, rotates, and scales the element */
}`,
    html: `<div class="container">
    <div class="multiple-box"></div>
</div>`
  },

  transformOrigin: {
    css: `.container {
    width: 300px;
    height: 300px;
    border: 2px solid black;
    position: relative;
    background-color: lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
}

.origin-box {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    transform: rotate(45deg);
    transform-origin: left top; /* Rotates around the top-left corner */
}`,
    html: `<div class="container">
    <div class="origin-box"></div>
</div>`
  }
}

const threeDTransform = {
  rotateX: {
    css: `.container {
    width: 300px;
    height: 300px;
    border: 2px solid black;
    background-color: lightgray;
    perspective: 100px; /* Adds depth to 3D transforms */
    display: flex;
    justify-content: center;
    align-items: center;
}

.rotateX-box {
    width: 100px;
    height: 100px;
    background-color: lightskyblue;
    transform: rotateX(45deg); /* Tilts the element backward */
}`,
    html: `<div class="container">
    <div class="rotateX-box"></div>
</div>`
  },

  rotateY: {
    css: `.container {
    width: 300px;
    height: 300px;
    border: 2px solid black;
    background-color: lightgray;
    perspective: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.rotateY-box {
    width: 100px;
    height: 100px;
    background-color: lightgreen;
    transform: rotateY(45deg); /* Rotates the element to the right */
}`,
    html: `<div class="container">
    <div class="rotateY-box"></div>
</div>`
  },

  rotateZ: {
    css: `.container {
    width: 300px;
    height: 300px;
    border: 2px solid black;
    background-color: lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
}

.rotateZ-box {
      width: 100px;
      height: 100px;
      background-color: lightcoral;
      transform: rotateZ(45deg); /* Rotates the element clockwise */
}`,
    html: `<div class="container">
    <div class="rotateZ-box"></div>
</div>`
  },

  translateZ: {
    css: `.container {
    width: 300px;
    height: 300px;
    border: 2px solid black;
    background-color: lightgray;
    perspective: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.translateZ-box {
    width: 100px;
    height: 100px;
    background-color: lightsalmon;
    transform: translateZ(50px); /* Moves the element 50px closer to the viewer */
}`,
    html: `<div class="container">
    <div class="translateZ-box"></div>
</div>`
  },

  translate3d: {
    css: `.container {
    width: 300px;
    height: 300px;
    border: 2px solid black;
    background-color: lightgray;
    perspective: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.translate3d-box {
    width: 100px;
    height: 100px;
    background-color: lightyellow;
    transform: translate3d(10px, 20px, 30px); /* Moves along X, Y, and Z axes */
}`,
    html: `<div class="container">
    <div class="translate3d-box"></div>
</div>`
  },

  scaleZ: {
    css: `.container {
    width: 300px;
    height: 300px;
    border: 2px solid black;
    background-color: lightgray;
    perspective: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.scaleZ-box {
    width: 100px;
    height: 100px;
    background-color: lightpink;
    transform: scaleZ(2); /* Doubles the size along the Z-axis */
}`,
    html: `<div class="container">
    <div class="scaleZ-box"></div>
</div>`
  },

  scale3d: {
    css: `.container {
    width: 300px;
    height: 300px;
    border: 2px solid black;
    background-color: lightgray;
    perspective: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.scale3d-box {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    transform: scale3d(1.5, 2, 0.5); /* Scales width, height, and depth */
}`,
    html: `<div class="container">
    <div class="scale3d-box"></div>
</div>`
  },

  perspective: {
    css: `.container {
    width: 300px;
    height: 300px;
    border: 2px solid black;
    background-color: lightgray;
    perspective: 800px; /* Adds perspective */
    display: flex;
    justify-content: center;
    align-items: center;
}

.perspective-box {
    width: 100px;
    height: 100px;
    background-color: lightskyblue;
    transform: rotateX(45deg);
}`,
    html: `<div class="container">
    <div class="perspective-box"></div>
</div>`
  },

  transformOrigin: {
    css: `.container {
    width: 300px;
    height: 300px;
    border: 2px solid black;
    background-color: lightgray;
    perspective: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.origin-box {
    width: 100px;
    height: 100px;
    background-color: lightgreen;
    transform: rotateX(45deg);
    transform-origin: 50% 50% -100px; /* Moves the origin 100px behind the element */
}`,
    html: `<div class="container">
    <div class="origin-box"></div>
</div>`
  },

  backfaceVisibility: {
    css: `.container {
    width: 300px;
    height: 300px;
    border: 2px solid black;
    background-color: lightgray;
    display: flex;
    justify-content: center;
    align-items: center;
}

.backface-box {
    width: 100px;
    height: 100px;
    background-color: lightcyan;
    backface-visibility: hidden;
    transform: rotateY(180deg); /* The back of the element won't be visible */
}`,
    html: `<div class="container">
    <div class="backface-box"></div>
</div>`
  },

  combining: {
    css: `.container {
    width: 300px;
    height: 300px;
    border: 2px solid black;
    background-color: lightgray;
    perspective: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.combining-box {
    width: 100px;
    height: 100px;
    background-color: lightcoral;
    transform: rotateX(30deg) rotateY(60deg) translateZ(100px); /* Combines 3D transformations */
}`,
    html: `<div class="container">
    <div class="combining-box"></div>
</div>`
  }
}

const variableCode = {
  declareVariable: {
    css: `:root {
    --main-color: #3498db; /* Blue color */
    --padding-size: 10px; /* Padding size */
}

.box {
    background-color: var(--main-color);
    padding: var(--padding-size);
    color: white;
    width: 200px;
    height: 100px;
}`,
    html: `<div class="box">CSS Variables</div>`
  },

  useVariable: {
    css: `:root {
    --main-color: #3498db;
    --padding-size: 10px;
}

button {
    background-color: var(--main-color, blue); /* apply blue if variable not found */
    padding: var(--padding-size);
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 6px;
}`,
    html: `<button>Click Me</button>`
  },

  localVariable: {
    css: `:root {
    --button-color: #f1c40f; /* Global card color */
}

button {
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 6px;
}

.button {
    background-color: var(--button-color);
}

.button1 {
    --button-color: #e74c3c; /* Overridden locally */
    background-color: var(--button-color);
}`,
    html: `<button class="button">Card Button</button>
           <button class="button1">Card Button1</button>`
  },

  mediaQuery: {
    css: `:root {
    --font-size: 14px;
}

@media (min-width: 280px) {
    :root {
        --font-size: 16px;
    }
}

@media (min-width: 480px) {
    :root {
        --font-size: 18px;
    }
}

@media (min-width: 768px) {
    :root {
        --font-size: 20px;
    }
}

@media (min-width: 1024px) {
    :root {
        --font-size: 22px;
    }
}

body {
    font-size: var(--font-size);
}`,
    html: `<p>This text will change font size on different screens.</p>`
  }
}

const responsiveDesignCode = {
  fluid: {
    css: `.container {
    width: 100%; /* Full width of the screen */
    max-width: 1200px; /* Maximum width for large screens */
    padding: 0 20px; /* Responsive padding */
    background-color: #f0f0f0; /* Light background */
    color: #333;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}`,
    html: `<div class="container">This is a fluid container</div>`
  },

  mediaQuery: {
    css: `/* Mobile styles */
@media (max-width: 768px) {
    .container {
        width: 100%; /* Full width on small screens */
        background-color: #e0f7fa; /* Light blue for mobile */
    }
}

/* Larger screen styles */
@media (min-width: 769px) {
    .container {
        width: 80%; /* Restricted width on larger screens */
        background-color: #ffeb3b; /* Yellow for larger screens */
    }
}`,
    html: `<div class="container">Responsive media query container</div>`
  },

  grid: {
    css: `.container {
    display: grid;
    grid-template-columns: repeat(12, 1fr); /* 12-column grid for large screens */
    gap: 20px; /* Space between columns */
    background-color: #f1f1f1;
}

@media (max-width: 768px) {
    .container {
        grid-template-columns: repeat(2, 1fr); /* 2-column grid on small screens */
    }
}

.box {
    background-color: #3498db;
    color: white;
    padding: 20px;
    text-align: center;
}`,
    html: `<div class="container">
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
    <div class="box">4</div>
</div>`
  }
,

  flexbox: {
    css: `.container {
    display: flex;
    flex-wrap: wrap; /* Items wrap onto multiple lines */
    background-color: #f5f5f5;
}

.item {
    flex: 1; /* Each item will grow to fill available space */
    background-color: #8e44ad;
    color: white;
    margin: 10px;
    padding: 20px;
    text-align: center;
}

@media (max-width: 600px) {
    .item {
        flex-basis: 100%; /* Full width on small screens */
    }
}`,
  html: `<div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
</div>`
},

  viewPort:`<meta name="viewport" content="width=device-width, initial-scale=1.0">`,

  units: {
    css: `body {
    font-size: 16px;
}

h1 {
    font-size: 2rem; /* Scales with the root font size */
}

.container {
    width: 80vw; /* 80% of the viewport width */
    height: 50vh; /* 50% of the viewport height */
    background-color: #2ecc71; /* Green */
    color: white;
    padding: 20px;
    text-align: center;
}`,
    html: `<div class="container">80vw wide, 50vh tall</div>`
  }
,

  clamp: {
    css: `h1 {
    font-size: clamp(1.5rem, 2.5vw, 3rem); /* Responsive font size */
    color: #34495e;
    text-align: center;
}`,
    html: `<h1>Responsive heading using clamp()</h1>`
  },

  nav: {
    css: `nav {
    background-color: #2980b9;
    display: flex;
    justify-content: end;
}
nav ul {
    width: 70%;
    list-style: none;
    display: flex;
    justify-content: space-between;
    color: white;
    padding: 10px;
}
nav ul li {
    cursor: pointer;
}

.hamburger {
    display: none;
    background-color: #2980b9;
    color: white;
    padding: 10px;
    cursor: pointer;
}

@media (max-width: 480px) {
    nav ul {
        display: none; /* Hide menu on mobile */
    }
    
    .hamburger {
        display: block; /* Show hamburger icon */
    }
}`,
    html: `<nav>
    <ul>
        <li>Home</li>
        <li>Courses</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    <div class="hamburger">☰ Menu</div>
</nav>`

  }
}

export {
  syntax,
  selectorCode,
  textCode,
  backgroundCode,
  positionCode,
  flexBoxCode,
  gridCode,
  animationCode,
  transitionCode,
  keyframesCode,
  transformCode,
  twoDTransfrom,
  threeDTransform,
  variableCode,
  responsiveDesignCode
}
