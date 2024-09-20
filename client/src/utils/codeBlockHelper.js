import hljs from 'highlight.js/lib/core';
import html from 'highlight.js/lib/languages/xml';
import css from 'highlight.js/lib/languages/css';
import javascript from "highlight.js/lib/languages/javascript";

hljs.registerLanguage('html', html);
hljs.registerLanguage('css', css);
hljs.registerLanguage('javascript', javascript);

const highlighter = (code, lang) => {
  return hljs.highlight(code, { language: lang }).value
}

const saveCursorPosition = (selectionRef, codeRef) => {
  const sel = window.getSelection();
  if (sel.rangeCount > 0) {
    const range = sel.getRangeAt(0);
    const preSelectionRange = range.cloneRange();
    preSelectionRange.selectNodeContents(codeRef.current);
    preSelectionRange.setEnd(range.startContainer, range.startOffset);
    selectionRef.current = preSelectionRange.toString().length;
  }
};

const restoreCursorPosition = (selectionRef, codeRef) => {
  if (selectionRef.current !== null) {
    const sel = window.getSelection();
    const range = document.createRange();
    let charIndex = 0;
    const nodeStack = [codeRef.current];
    let node, foundStart = false, stop = false;

    while (!stop && (node = nodeStack.pop())) {
      if (node.nodeType === 3) {
        const nextCharIndex = charIndex + node.length;
        if (!foundStart && selectionRef.current >= charIndex && selectionRef.current <= nextCharIndex) {
          range.setStart(node, selectionRef.current - charIndex);
          range.collapse(true);
          foundStart = true;
          stop = true;
        }
        charIndex = nextCharIndex;
      } else {
        let i = node.childNodes.length;
        while (i--) {
          nodeStack.push(node.childNodes[i]);
        }
      }
    }

    sel.removeAllRanges();
    sel.addRange(range);
  }
};

const codeChange = (e, setHtml, setCss, setJs, activeLang, selectionRef, codeRef) => {
  saveCursorPosition(selectionRef, codeRef);

  const content = e.target.innerText;
  switch (activeLang) {
    case 'HTML':
      setHtml(content);
      break;
    case 'CSS':
      setCss(content);
      break;
    case 'Javascript':
      setJs(content);
      break;
    default:
      break;
  }
};

const calculateTabButtonsWidth = (langs) =>  {
  if (langs) {
    const len = langs.length
    if (len === 3) {
      return { width: "190px" };
    }
    if (len === 2) {
      return { width: "130px" };
    }
    return { width: "70px" };
  }
  return { width: "70px" };
};

const calculateRightDivWidth = (restriction) => {
  if (restriction) {
    if (restriction.includes('noEdit') && restriction.includes('noResult')) {
      return { width: "100px" };
    }
    if (restriction.includes('noEdit') || restriction.includes('noResult')) {
      return { width: "125px" };
    }
  }
  return { width: "160px" };
};

const tabActivater = (e, setActiveLang, tabButtons, langs) => {
  if (langs.length === 1) return
  if (tabButtons.current) {
    const elements = tabButtons.current.querySelectorAll('.tab-button')
    elements.forEach(element => {
      element.classList.remove('active');
    });

    const activeElement = document.getElementById(e)
    activeElement.classList.add('active');
    
    setActiveLang(e)
  }
}

export { highlighter, codeChange, restoreCursorPosition, calculateTabButtonsWidth, calculateRightDivWidth, tabActivater}
