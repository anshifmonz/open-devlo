import { useEffect, useState } from "react";
import { useTheme } from '../../../hooks/ThemeContext';

function CodePreview({result, html, css, js}) {
  const [iframeHeight, setIframeHeight] = useState('');
  const { theme } = useTheme();

  useEffect(() => {
    if (result) {
      const iframe = document.querySelector('iframe#preview.preview');

      if (iframe) {
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        if (iframeDocument) {
          iframeDocument.open();

          const contentToDisplay = `
            <style>
              * { margin: 0; padding: 0; box-sizing: border-box; color: ${ theme === 'dark' ? 'white' : 'black' }; margin-left: 20px; }
              body { margin: 0; padding: 0; color: white; }
            </style>` 
            + 
            (js && css
              ? `<style>${css}</style>${html}<script>${js}</script>`
              : css
              ? `<style>${css}</style>${html}`
              : html);

          iframeDocument.write(contentToDisplay);
          iframeDocument.close();

          iframe.onload = () => {
            setIframeHeight(iframe.contentWindow.document.body.scrollHeight + 40 + 'px');
          };
        }
      }
    }
  }, [result, html, css, js, theme]);

  return result && <iframe id='preview' className="preview" style={{ height: iframeHeight }}></iframe>
}

export default CodePreview;
