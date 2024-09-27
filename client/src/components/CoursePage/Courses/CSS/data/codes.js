const syntax = {
  syntax: 
  `p {
  color: blue;
  font-size: 16px;
}`
}

const selectorCode = {
  universal:
  `* {
  margin: 0;
  padding: 0;
}`,

  type:
  `h1 {
  color: green;
}`,

  id:
  `#header {
  background-color: gray;
}`,

  class:
  `.intro {
  font-style: italic;
}`,

  attr:
  `input[type="text"] {
  border: 1px solid black;
}`,

  descendant:
  `div p {
  color: red;
}`,

  child:
  `ul > li {
  list-style-type: none;
}`,

  adjacent:
  `h2 + p {
  margin-top: 10px;
}`,

  general:
  `h2 ~ p {
  color: blue;
}`,

  pseudoClass:
  `a:hover {
  color: red;
}`,

  pseudoClass1:
  `p:first-child {
  font-weight: bold;
}`,

  pseudoElement:
  `p::before {
  content: "Note: ";
  font-weight: bold;
}`,

  pseudoElement1:
  `p::after {
  content: " *";
  color: red;
}`,

  combining:
  `div.intro > p.highlight {
  color: yellow;
}`,

  comment:
  `h1 {
  color: green;  /* This is a comment */
}`
}

const textCode = {
  media:
  `@media (max-width: 600px) {
  body {
    font-size: 14px;
  }
}`
}

const backgroundCode = {
  multiBackground:
  `background-image: url('top-image.png'), url('bottom-image.png');
background-position: center top, center bottom;
background-repeat: no-repeat;`
}

const positionCode = {
  static:`div {
    position: static;
}`,

  relative:`div {
    position: relative;
    top: 10px;
    left: 20px;
}`,

  absolute:`div {
    position: absolute;
    top: 50px;
    right: 30px;
}`,

  fixed:`div {
    position: fixed;
    top: 0;
    left: 0;
}`,

  sticky:`div {
    position: sticky;
    top: 10px;
}`,

  zIndex:`div {
    position: absolute;
    z-index: 10;
}`
}

const flexBoxCode = {
  container: `.container {
    display: flex;
}`,

  flexDirection:`.container {
    flex-direction: row;
}`,

  flexWrap:`.container {
    flex-wrap: wrap;
}`,

  flexFlow:`.container {
    flex-flow: row wrap;
}`,

  justifyContent:`.container {
    justify-content: center;
}`,

  alignItems:`.container {
    align-items: center;
}`,

  alignContent:`.container {
    align-content: space-between;
}`,

  flexGrow:`.item {
    flex-grow: 1;
}`,

  flexShrink:`.item {
    flex-shrink: 1;
}`,

  flexBasis:`.item {
    flex-basis: 100px;
}`,

  flex:`.item {
    flex: 1 0 200px;
}`,

  alignSelf:`.item {
    align-self: center;
}`
}

const gridCode = {
  container:`.container {
    display: grid;
}`,

  colRow:``,

  fixColRow:`.container {
    grid-template-columns: 100px 200px; /* Two columns: 100px and 200px wide */
    grid-template-rows: 50px 100px; /* Two rows: 50px and 100px tall */
}`,

  fractionalUnit:`.container {
    grid-template-columns: 1fr 2fr; /* First column takes 1 part, second takes 2 parts of the available space */
    grid-template-rows: 1fr 2fr; /* Similar for rows */
}`,
  
  autoFitFill:`.container {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); /* Creates as many columns as fit the container, each at least 100px wide */
}`,

  gridArea:`.container {
    grid-template-areas: 
      "header header"
      "sidebar content"
      "footer footer";
}

.item-header { grid-area: header; }
.item-sidebar { grid-area: sidebar; }
.item-content { grid-area: content; }
.item-footer { grid-area: footer; }`,

  gridGap:`.container {
    grid-gap: 10px; /* Gap between rows and columns */
}`,

  specificGap:`.container {
    grid-row-gap: 10px; /* Gap between rows */
    grid-column-gap: 15px; /* Gap between columns */
}`,

  alignItems:`.container {
    align-items: center; /* Center items vertically in their grid areas */
}`,

  justifyItem:`.container {
    justify-items: center; /* Center items horizontally in their grid areas */
}`,

  alignContent:`.container {
    align-content: center; /* Center the grid vertically within the container */
}`,

  justifyContent:`.container {
    justify-content: center; /* Center the grid horizontally within the container */
}`,

  gridTemplateAreas:`.container {
    grid-template-areas:
      "header header header"
      "sidebar content content"
      "footer footer footer";
}
.item-header { grid-area: header; }
.item-sidebar { grid-area: sidebar; }
.item-content { grid-area: content; }
.item-footer { grid-area: footer; }`,

  responsiveDesign:`.container {
    grid-template-columns: repeat(2, 1fr); /* Two columns by default */
}

@media (min-width: 600px) {
    .container {
        grid-template-columns: repeat(3, 1fr); /* Three columns for larger screens */
    }
}`,

  advancedFeature:`.subgrid-container {
    display: grid;
    grid-template-columns: subgrid; /* Uses the column definitions from the parent grid */
}`
}

const animationCode = {
  transSyntax:`.element {
    transition: property duration timing-function delay;
}`,

  transition:`.button {
    background-color: blue;
    transition: background-color 0.5s ease;
}

.button:hover {
    background-color: green;
}`,

  keyFramesSyntax:`@keyframes animation-name {
    0% { /* starting state */ }
    50% { /* midway state */ }
    100% { /* ending state */ }
}`,

  keyFrames:`@keyframes slide {
    0% { transform: translateX(0); }
    100% { transform: translateX(100px); }
}

.box {
    animation: slide 2s ease infinite;
}`
}

const transitionCode = {
  syntax:`.element {
    background-color: blue;
    transition: background-color 0.3s ease; /* Property, duration, and easing function */
}

.element:hover {
    background-color: red; /* Changes background-color when hovered */
}`,

  property:`.element {
    width: 100px;
    height: 100px;
    background-color: blue;
    transition: width 0.5s, background-color 0.3s;
}

.element:hover {
    width: 200px; /* Width transition happens over 0.5 seconds */
    background-color: red; /* Background-color transition happens over 0.3 seconds */
}`,

  individual:`.element {
    transition-property: opacity, transform; /* Properties to animate */
    transition-duration: 0.4s; /* Duration for both properties */
    transition-timing-function: ease-in-out; /* Speed curve */
    transition-delay: 0.2s; /* Start after a delay */
}`,

  timing:`.element {
    transition: all 1s cubic-bezier(0.68, -0.55, 0.27, 1.55); /* Custom easing */
}`,

  multiple:`.element {
    transition: width 0.5s ease, height 0.3s linear, opacity 0.2s ease-in;
}`,

  delay:`.element {
    transition: background-color 0.5s ease-in-out 1s; /* Delay of 1 second */
}`,

  all:`.element {
    transition: all 0.3s ease-in-out;
}

.element:hover {
    width: 200px;
    height: 200px;
    background-color: red;
}`
}

const keyframesCode = {
  syntax:`@keyframes animation-name {
    0% {
        /* Properties to change */
    }
    100% {
        /* Properties to change */
    }
}`,

  keyframe:`@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.element {
    animation: fadeIn 2s;
}`,

  multiple:`@keyframes moveAndFade {
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
    animation: moveAndFade 3s;
}`,

  fromTo:`@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.element {
    animation: fadeIn 2s;
}`,

  shortS:`animation: name duration timing-function delay iteration-count direction fill-mode play-state;`,

  shortE:``,
}

const transformCode = {
  twoD:`div {
    transform: rotate(45deg);
}`,

  threeD:`div {
    transform: rotateY(45deg);
}
`
}

const twoDTransfrom = {
  translate:`div {
    transform: translate(50px, 100px); /* Moves 50px right and 100px down */
}`,

  rotate:`div {
    transform: rotate(45deg); /* Rotates 45 degrees clockwise */
}`,

  scale:`div {
    transform: scale(1.5, 2); /* Increases width 1.5 times, height 2 times */
}`,

  skew:`div {
    transform: skew(30deg, 10deg); /* Skews 30 degrees along the X axis and 10 degrees along the Y axis */
}`,

  matrix:`div {
    transform: matrix(1, 0.3, 0, 1, 20, 50); /* Applies scaling, skewing, and translation */
}`,

  multiple:`div {
    transform: translate(20px, 50px) rotate(30deg) scale(1.2);
}`,

  transformOrigin:`div {
    transform: rotate(45deg);
    transform-origin: left top; /* Rotates around the top-left corner */
}`
}

const threeDTransform = {
  rotateX:`div {
    transform: rotateX(45deg); /* Tilts the element backward */
}`,

  rotateY:`div {
    transform: rotateY(45deg); /* Rotates the element to the right */
}`,

  rotateZ:`div {
    transform: rotateZ(45deg); /* Rotates the element clockwise */
}`,

  translateZ:`div {
    transform: translateZ(50px); /* Moves the element 50px closer to the viewer */
}`,

  translate3d:`div {
    transform: translate3d(10px, 20px, 30px); /* Moves along X, Y, and Z axes */
}`,

  scaleZ:`div {
    transform: scaleZ(2); /* Doubles the size along the Z-axis */
}`,

  scale3d:`div {
    transform: scale3d(1.5, 2, 0.5); /* Scales width, height, and depth */
}`,

  perspective:`.container {
    perspective: 800px;
}`,

  transformOrigin:`div {
    transform-origin: 50% 50% -100px; /* Moves the origin 100px behind the element */
}`,

  backfaceVisibility:`div {
    backface-visibility: hidden;
    transform: rotateY(180deg); /* The back of the element won't be visible */
}`,

  combining:`div {
  transform: rotateX(30deg) rotateY(60deg) translateZ(100px);
}`
}

const variableCode = {
  declareVariable: `:root {
    --main-color: #3498db;
    --padding-size: 10px;
}`,

  useVariable:`button {
    background-color: var(--main-color, #3498db);
    padding: var(--padding-size);
}`,

  localVariable:`.card {
    --card-color: #f1c40f;
    background-color: var(--card-color);
}

.button {
    --card-color: #e74c3c; /* Local variable for buttons */
    background-color: var(--card-color);
}`,

  mediaQuery:`:root {
    --font-size: 16px;
}

@media (min-width: 768px) {
    :root {
        --font-size: 18px;
    }
}

body {
    font-size: var(--font-size);
}`
}

const responsiveDesignCode = {
  fluid:`.container {
    width: 100%; /* Full width of the screen */
    max-width: 1200px; /* Maximum width */
    padding: 0 20px; /* Responsive padding */
}`,

  mediaQuery:`@media (max-width: 768px) {
    .container {
        width: 100%; /* Full width on small screens */
    }
}

/* For larger devices (e.g., desktops) */
@media (min-width: 769px) {
    .container {
        width: 80%; /* Restricted width on larger screens */
    }
}`,

  grid:`.container {
    display: grid;
    grid-template-columns: repeat(12, 1fr); /* 12-column grid */
    gap: 20px; /* Space between columns */
}

@media (max-width: 768px) {
    .container {
        grid-template-columns: repeat(2, 1fr); /* 2-column grid on small screens */
    }
}`,

  flexbox:`.container {
      display: flex;
      flex-wrap: wrap; /* Elements will wrap onto multiple lines if necessary */
}

.item {
    flex: 1; /* Flex item will grow to fill space */
}

@media (max-width: 600px) {
    .item {
        flex-basis: 100%; /* Full width on small screens */
    }
}`,

  mobileFirst:`.container {
    width: 100%;
}

/* Styles for larger screens */
@media (min-width: 768px) {
    .container {
      width: 80%;
    }
}`,

  viewPort:`<meta name="viewport" content="width=device-width, initial-scale=1.0">`,

  units:`body {
    font-size: 16px;
}

h1 {
    font-size: 2rem; /* Scales with the root font size */
}

.container {
    width: 80vw; /* 80% of the viewport width */
}`,

  clamp:`h1 {
    font-size: clamp(1.5rem, 2.5vw, 3rem); /* (min, preferred, max) size */
}`,

  nav:`@media (max-width: 768px) {
    nav ul {
        display: none; /* Hide menu */
    }
    .hamburger {
        display: block; /* Show hamburger icon */
    }
}`
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
