import React from 'react';
import PDFViewer from 'pdf-viewer-reactjs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="col-sm-12 text-center" id="url">
      <h1 className="text-white bg-info rounded">
        <a href="#url" className="text-reset text-decoration-none">
          Fetch PDF by URL
        </a>
      </h1>
      <div className="border rounded">
        <PDFViewer
          document={{
            url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
          }}
          navbarOnTop
          showThumbnail={{
            scale: 5,
            onTop: true,
            backgroundColor: '#000000',
            thumbCss: 'customThumbStyle',
            selectedThumbCss: 'customSelThumbStyle',
          }}
        />
      </div>
    </div>
  );
}

export default App;
