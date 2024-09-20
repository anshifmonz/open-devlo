import { useEffect } from "react";

function CodePreview({result, html, css, js}) {
  useEffect(() => {
    if (result) {
      const preview = document.querySelector('#preview.preview');
      if (preview && preview.contentDocument) {
        preview.contentDocument.open();

        const contentToDisplay = 
        js && css 
        ? `<style>${css}</style>${html}<script>${js}</script>`
        : css 
        ? `<style>${css}</style>${html}`
        : html

        preview.contentDocument.write(contentToDisplay);
        preview.contentDocument.close();
      }
    }
  }, [result, html, css, js]);

  return result && <iframe id='preview' className="preview"></iframe>
}

export default CodePreview;
