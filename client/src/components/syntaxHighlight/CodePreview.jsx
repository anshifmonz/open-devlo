import { useEffect, useRef } from "react";
import { useTheme } from '../../hooks/ThemeContext';

function CodePreview({result, html, css, js, allowResize}) {
  const iframRef = useRef(null)
  const { theme } = useTheme();

  useEffect(() => {
    if (result) {
      if (iframRef.current) {
        const iframe = iframRef.current;
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        if (iframeDocument) {
          iframeDocument.open();

          const contentToDisplay = `
            <style>
              * { margin: 0; padding: 0; box-sizing: border-box; color: ${ theme === 'dark' ? 'white' : 'black' }; }
              body { margin: 0; padding: 1rem 1rem 1rem 1rem; color: white; overflow: hidden; }
            </style>` 
            + 
            (js && css
              ? `<style>${css}</style>${html}<script>${js}</script>`
              : css
              ? `<style>${css}</style>${html}`
              : html);

          iframeDocument.write(contentToDisplay);
          iframeDocument.close();

          const adjustIframeHeight = () => {
            const body = iframe.contentWindow.document.body;
            const html = iframe.contentWindow.document.documentElement;

            const bHeight = Math.max(body.scrollHeight, body.offsetHeight)
            const hHeight = Math.max(html.scrollHeight, html.offsetHeight);

            const height = Math.max(bHeight, hHeight);

            iframe.height = Math.max(height) + 'px';
          }
          
          adjustIframeHeight();
          iframe.onload = adjustIframeHeight;
        }
      }
    }
  }, [result, html, css, js, theme]);

  return result && <iframe ref={iframRef} id='preview' className="preview" style={allowResize && {resize: 'both'}}></iframe>
}

export default CodePreview;
