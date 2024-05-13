import { PDFDownloadLink } from "@react-pdf/renderer";
import { PDFFormat } from "../PDFFormat/PDFFormat";

export const DownloadPDFButton = ({ data }) => (
  <PDFDownloadLink
    document={<PDFFormat data={data} />}
    fileName="YourInsurance.pdf"
    className="inline-block px-6 py-2 text-xs font-medium text-center text-white transition bg-[#214C9B] rounded-md shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
  >
    {({ blob, url, loading, error }) =>
      loading ? "Loading document..." : "Download"
    }
  </PDFDownloadLink>
);


// import { PDFDocument } from 'pdf-lib';
// // import { saveAs } from 'file-saver';
// import { PDFFormat } from "../PDFFormat/PDFFormat";
// import PDFFormat2 from '../PDFFormat/PDFFormat2';
// import PDFFormat3 from '../PDFFormat/PDFFormat3';
// import PDFFormat4 from '../PDFFormat/PDFFormat4';
// import PDFFormat5 from '../PDFFormat/PDFFormat5';
// import PDFFormat6 from '../PDFFormat/PDFFormat6';
// import PDFFormat7 from '../PDFFormat/PDFFormat7';
// import PDFFormat8 from '../PDFFormat/PDFFormat8';
// import PDFFormat9 from '../PDFFormat/PDFFormat9';
// import PDFFormat10 from '../PDFFormat/PDFFormat10';
// import PDFFormat11 from '../PDFFormat/PDFFormat11';
// import PDFFormat12 from '../PDFFormat/PDFFormat12';

// async function getPdfBuffer(pdfUrl) {
//   const response = await fetch(pdfUrl);
//   const arrayBuffer = await response.arrayBuffer();
//   return new Uint8Array(arrayBuffer);
// }

// async function MergePDFs(pdfUrls) {
//   const pdfDoc = await PDFDocument.create();

//   for (const pdfUrl of pdfUrls) {
//     const pdfBuffer = await getPdfBuffer(pdfUrl);
//     const srcPdfDoc = await PDFDocument.load(pdfBuffer);
//     const copiedPages = await pdfDoc.copyPages(srcPdfDoc, srcPdfDoc.getPageIndices());
//     copiedPages.forEach((page) => pdfDoc.addPage(page));
//   }

//   const mergedPdfBuffer = await pdfDoc.save();
//   return mergedPdfBuffer;
// }

// export const DownloadPDFButton = ({ data }) => {
//   const handleDownload = async () => {
//     const pdfUrls = ['https://example.com/path/to/pdf2', 'https://example.com/path/to/pdf3', /* ... */];
//     const mergedPdfBuffer = await MergePDFs(pdfUrls);
//     const blob = new Blob([mergedPdfBuffer], { type: 'application/pdf' });
//     saveAs(blob, 'merged.pdf');
//   };

//   return (
//     <button
//       onClick={handleDownload}
//       className="inline-block px-6 py-2 text-xs font-medium text-center text-white transition bg-[#214C9B] rounded-md shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
//     >
//       Download
//     </button>
//   );
// };