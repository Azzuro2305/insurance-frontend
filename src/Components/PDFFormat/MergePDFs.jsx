import { PDFDocument } from 'pdf-lib';
import { saveAs } from 'file-saver';
import PDFFormat2 from './PDFFormat2';
import PDFFormat3 from './PDFFormat3';
import PDFFormat4 from './PDFFormat4';
import PDFFormat5 from './PDFFormat5';
import PDFFormat6 from './PDFFormat6';
import PDFFormat7 from './PDFFormat7';
import PDFFormat8 from './PDFFormat8';
import PDFFormat9 from './PDFFormat9';
import PDFFormat10 from './PDFFormat10';
import PDFFormat11 from './PDFFormat11';
import PDFFormat12 from './PDFFormat12';
// import the rest of your PDFs

async function MergePDFs(pdfBuffers) {
  const pdfDoc = await PDFDocument.create();

  for (const pdfBuffer of pdfBuffers) {
    const srcPdfDoc = await PDFDocument.load(pdfBuffer);
    const copiedPages = await pdfDoc.copyPages(srcPdfDoc, srcPdfDoc.getPageIndices());
    copiedPages.forEach((page) => pdfDoc.addPage(page));
  }

  const mergedPdfBuffer = await pdfDoc.save();
  return mergedPdfBuffer;
}

function downloadPDF(pdfBuffer) {
  const blob = new Blob([pdfBuffer], { type: 'application/pdf' });
  saveAs(blob, 'merged.pdf');
}

// Usage:
const pdfBuffers = [PDFFormat2, PDFFormat3, PDFFormat4, PDFFormat5, PDFFormat6, PDFFormat7, PDFFormat8, PDFFormat9, PDFFormat10, PDFFormat11, PDFFormat12];
MergePDFs(pdfBuffers).then(downloadPDF);