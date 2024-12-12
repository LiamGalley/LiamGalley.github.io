// import React, { useState } from "react";
// import { Document, Page } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import "react-pdf/dist/esm/Page/TextLayer.css";
// import { pdfjs } from 'react-pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//     'pdfjs-dist/build/pdf.worker.min.mjs',
//     import.meta.url,
// ).toString();

// interface PdfViewerProps {
//     pdf: string;
// }

// const PdfViewer: React.FC<PdfViewerProps> = ({ pdf }) => {
//     const [numPages, setNumPages] = useState<number>();
//     const [pageNumber, setPageNumber] = useState<number>(1);
//     const [scale, setScale] = useState(1); // For zoom functionality

//     function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
//         setNumPages(numPages);
//     }

//     const zoomIn = () => {
//         setScale(scale + 0.2);
//     };

//     const zoomOut = () => {
//         setScale(scale - 0.2);
//     };

//     const openInNewTab = () => {
//         window.open(pdf, "_blank");
//     }

//     return (
//         <div style={{ textAlign: "center" }}>
//             <div style={{ overflow: "auto", height: "600px", border: "1px solid #ccc" }}>
//                 <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
//                     <Page pageNumber={pageNumber}></Page>
//                 </Document>
//             </div>

//             <div style={{ marginTop: "10px" }}>
//                 <button onClick={zoomOut}>-</button>
//                 <button onClick={zoomIn}>+</button>
//                 <button onClick={openInNewTab}>Open in New Tab</button>
//             </div>

//         </div>
//     );
// };

// export default PdfViewer