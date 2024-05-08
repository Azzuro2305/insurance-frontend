// import { Document, Page, Image as PDFImage, StyleSheet, View } from '@react-pdf/renderer';
import { Document, Page, Image as PDFImage, StyleSheet, View, Text as PDFText } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0
  },
  tableRow: { 
    margin: "auto", 
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  tableCol: { 
    width: "20%", 
    borderStyle: "solid", 
    borderWidth: 1, 
    borderLeftWidth: 0, 
    borderTopWidth: 0
  },
  tableCell: { 
    margin: "auto", 
    marginTop: 5, 
    fontSize: 10,
    paddingHorizontal: 10, 
  },
  fullPageImage: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },
});

{/* <Document>
<Page size="A4" style={styles.page}>
  <View style={styles.section}>
    <Text>Section #1</Text>
  </View>
  <View style={styles.section}>
    <Text>Section #2</Text>
  </View>
</Page>
</Document> */}

export const PDFFormat = () => (
  <Document>
    <Page size="A4" style={styles.body}>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <PDFText style={styles.tableCell}>Column 1</PDFText>
          </View>
          <View style={styles.tableCol}>
            <PDFText style={styles.tableCell}>Column 2</PDFText>
          </View>
        </View>
      </View>
    </Page>

    <Page>
      <PDFText>Second Page</PDFText>
    </Page>
    {/* <Page size="A4" style={styles.body}>
  <Image
    style={styles.fullPageImage}
    src="/path/to/your/image.jpg"
  />
</Page> */}
  </Document>
);







// --------------------- merge ---------------------

// const { PDFDocument, PDFPage } = require('pdf-lib');
// const fs = require('fs');

// async function mergePDFs(pdfPaths) {
//   const outPdf = await PDFDocument.create();

//   for (const pdfPath of pdfPaths) {
//     const pdfBytes = fs.readFileSync(pdfPath);
//     const pdfDoc = await PDFDocument.load(pdfBytes);
//     const pages = await outPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
//     for (const page of pages) {
//       outPdf.addPage(page);
//     }
//   }

//   const outPdfBytes = await outPdf.save();
//   fs.writeFileSync('merged.pdf', outPdfBytes);
// }

// mergePDFs(['pdf1.pdf', 'pdf2.pdf', 'pdf3.pdf']);




// --------------------- overwrite merged pdf ---------------------

// const { degrees, PDFDocument, rgb, StandardFonts } = require('pdf-lib');
// const fs = require('fs');

// async function modifyPDF(pdfPath) {
//   const pdfBytes = fs.readFileSync(pdfPath);
//   const pdfDoc = await PDFDocument.load(pdfBytes);

//   const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

//   const pages = pdfDoc.getPages();
//   const firstPage = pages[0];

//   firstPage.drawText('New Date: 2022-01-01', {
//     x: 50,
//     y: 700,
//     size: 50,
//     font: helveticaFont,
//     color: rgb(0, 0, 0),
//   });

//   const outPdfBytes = await pdfDoc.save();
//   fs.writeFileSync('modified.pdf', outPdfBytes);
// }

// modifyPDF('original.pdf');