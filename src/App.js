import React from 'react'
import PDFViewer from 'pdf-viewer-reactjs'
import './App.css'

function App() {
    return (
        <div className="container">
            <PDFViewer
                document={{
                    url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
                }}
                canvasCss="customCanvasCss"
                scale={0.6}
            />
        </div>
    )
}

export default App
