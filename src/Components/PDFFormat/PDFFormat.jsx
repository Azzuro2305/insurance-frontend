// import { Document, Page, Image as PDFImage, StyleSheet, View } from '@react-pdf/renderer';
import { Document, Page, Image , StyleSheet, View, Text  } from '@react-pdf/renderer';
import Images from '../Images/Images'
// import logoImage from "../Images/logo.png"
// import Ulink from "../Images/Ulink_Logo.png";
// import qr from "../Images/qr_code.png";


const styles = StyleSheet.create({
  //Container
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  page: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
  },
  section: {
    width: "95%",
    margin: "0 auto",
    fontSize: 10,
  },
  //Heading
  heading: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -30,
  },
  topic: {
    fontSize: 13,
    alignItems: "center",
    marginTop: 30,
  },
  ins: {
    fontSize: 15,
    fontWeight: "bold",
  },
  phEm: {
    fontSize: 8,
    marginTop: 15,
  },
  photo: {
    width: "80px",
    height: "80px",
    marginTop: -20,
  },

  //Outboud Head
  outHead: {
    fontSize: 13,
    textAlign: "center",
  },

  //Bind Section
  bindV: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  bindV1: {
    padding: 20,
  },
  innerBind: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 15,
  },
  innerBindTxt: {
    width: "100px",
  },

  //table
  tblHead: {
    marginLeft: 20,
    marginBottom: 10,
  },
  tblCon: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 20,
  },
  tblCon2: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 20,
    marginBottom: 20,
  },
  tbl: {
    borderTop: "1px",
    borderLeft: "1px",
    borderBottom: "1px",
    padding: 10,
    width: "20%",
    textAlign: "center",
    backgroundColor: "#A9CCE3",
  },
  tbl1: {
    border: "1px",
    padding: 10,
    width: "20%",
    textAlign: "center",
    backgroundColor: "#A9CCE3",
  },
  tblsec: {
    borderTop: "0px",
    borderLeft: "1px",
    borderBottom: "1px",
    padding: 10,
    width: "20%",
    textAlign: "center",
  },
  tblsec1: {
    borderTop: "0px",
    borderLeft: "1px",
    borderRight: "1px",
    borderBottom: "1px",
    padding: 10,
    width: "20%",
    textAlign: "center",
  },

  //Photo
  benf: {
    width: "95%",
    marginLeft: 20,
  },
  //After Photo Texts
  txtAfP: {
    marginLeft: 20,
    marginBottom: 20,
  },
  txtAfP1: {
    marginLeft: 20,
    marginBottom: 0,
  },
  // Photo
  footCon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 400,
    marginLeft: 20,
  },
  lnkPhoto: {
    width: 60,
    height: 70,
  },
  qrcode: {
    width: 70,
    height: 70,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  date: {
    fontSize: 8,
    marginTop: 45,
  },
});
// const styles = StyleSheet.create({
//   // page: {
//   //   flexDirection: 'row',
//   //   justifyContent: 'center',
//   //   alignItems: 'center',
//   //   width: '100%',
//   //   height: '100%',
//   // },

//   title: {
//     width: '595px',
//     marginLeft: 'auto',
//     marginRight: 'auto',
//     textAlign: 'center',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title_img: {
//     width: "80px",
//     height: "80px",
//     display: 'block',
//     // background: `url("${logoImage}") no-repeat center`,
//     backgroundSize: "contain",
//     marginTop: "50px",
//     // marginLeft: "30px",


//   },

//   title_box: {
//     fontSize: '10px',
//     width: '100px',
//     marginTop: '50px',
//     marginRight:"20px",
//     marginLeft: "20px",
//     fontFamily: "Helvetica"
//     // backgroundColor: 'black',
//   },
//   title_ph: {
//     fontSize: '8px',
//     width: '50px',
//     marginTop: "50px"
//   },
//   second_text: {
//     // marginLeft: 'auto',
//     fontSize:"13px",
//      marginLeft: '100px',
//     textAlign: 'center',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   }

  

//   // backgroundColor: 'black',

// });

// const image = {
//   logoImage
// }

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

export const PDFFormat = ( { data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <View style={styles.topic}>
          <Text>Ministry of Planning and Finance</Text>
          <Text style={styles.ins}>Myanma Insurance</Text>
        </View>
        <View style={styles.heading}>
          <Image src={Images.logo} style={styles.photo}></Image>

          <View style={styles.phEm}>
            <Text>Ph No: 01 8386919</Text>
            <Text>Email: lifere1-mi@mminsurance.gov.mm</Text>
          </View>
        </View>
        <Text style={styles.outHead}>
          Certificate of Insurance - Outbound Travel Accident Insurance
        </Text>
        <View style={styles.bindV}>
          {/* 1st Col */}
          <View style={styles.bindV1}>
            <View style={styles.innerBind}>
              <Text style={styles.innerBindTxt}>Insurance Period</Text>
              <Text>: {data.coveragePlan} Days  (From {data.policyStartDate} To {data.policyEndDate})</Text>
            </View>
            <View style={styles.innerBind}>
              <Text style={styles.innerBindTxt}>Certificate Number</Text>
              <Text>: {data.proposalID}</Text>
            </View>
            <View style={styles.innerBind}>
              <Text style={styles.innerBindTxt}>Agent/Agency name </Text>
              <Text>: {data.hasAgent ? data.agentName : 'N/A'}</Text>
            </View>
            <View style={styles.innerBind}>
              <Text style={styles.innerBindTxt}>Policy Holder</Text>
              <Text>: {data.insuredName}</Text>
            </View>
            <View style={styles.innerBind}>
              <Text style={styles.innerBindTxt}>Covid-19 coverage</Text>
              <Text>: Yes</Text>
            </View>
            <View style={styles.innerBind}>
              <Text style={styles.innerBindTxt}>Territorial Area </Text>
              <Text>: Worldwide</Text>
            </View>

            <Text style={styles.bindV1Txtnpm}>
              Buy for yourself (This passport holder)
            </Text>
          </View>

          {/* 2nd Col */}
          <View style={styles.bindV1}>
            <View style={styles.innerBind}>
              <Text style={styles.innerBindTxt}>Benefits</Text>
              <Text>: As per benefit table</Text>
            </View>
            <View style={styles.innerBind}>
              <Text style={styles.innerBindTxt}>Destination To</Text>
              <Text>: {data.destinationCountry}</Text>
            </View>
            <View style={styles.innerBind}>
              <Text style={styles.innerBindTxt}>PP/Country</Text>
              <Text>
                : {data.insuredPassportNumber}
                {data.insuredPassportIssuedCountry}
              </Text>
            </View>
            <View style={styles.innerBind}>
              <Text style={styles.innerBindTxt}>Deductible /Person</Text>
              <Text>: 300,000 per claim * </Text>
            </View>
            <View style={styles.innerBind}>
              <Text style={styles.innerBindTxt}>Currency</Text>
              <Text>: MMK</Text>
            </View>
            <View style={styles.innerBind}>
              <Text style={styles.innerBindTxt}>Payment Date</Text>
              <Text>: 25 Jan 2023</Text>
            </View>
            <View style={styles.innerBind}>
              <Text style={styles.innerBindTxt}>Premium</Text>
              <Text>:</Text>
            </View>
          </View>
        </View>

        {/* Insure Info */}
        <View>
          <Text style={styles.tblHead}>
            This Certificate of Insurance confirms coverage for :
          </Text>
          <View style={styles.tblCon}>
            <View style={styles.tbl}>
              <Text>Insured's Name</Text>
            </View>
            <View style={styles.tbl}>
              <Text>Date of Birth</Text>
            </View>
            <View style={styles.tbl}>
              <Text>Age</Text>
            </View>
            <View style={styles.tbl}>
              <Text>Insurance Period</Text>
            </View>
            <View style={styles.tbl1}>
              <Text>Passport No</Text>
            </View>
          </View>

          {/* Sec Row */}
          <View style={styles.tblCon2}>
            <View style={styles.tblsec}>
              <Text> </Text>
            </View>
            <View style={styles.tblsec}>
              <Text></Text>
            </View>
            <View style={styles.tblsec}>
              <Text></Text>
            </View>
            <View style={styles.tblsec}>
              <Text></Text>
            </View>
            <View style={styles.tblsec1}>
              <Text>
                {" "}
               
              </Text>
            </View>
          </View>
        </View>
        <Image src={Images.tableOfBenefits} style={styles.benf}></Image>
        <View>
          <Text style={styles.txtAfP}>
            This is a computer-generated document. No signature is required.
          </Text>
        </View>
        <View>
          <Text style={styles.txtAfP1}>
            Policy issued and serviced by: Myanma Insurance, #627/635, Merchant
            Road Yangon
          </Text>
          <Text style={styles.txtAfP}>
            Phone: (95-1) 8386919,Email: Lifereclaim-mi@mminsurance.gov.mm
          </Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.footCon}>
          <Image src={Images.qr_code} style={styles.qrcode}></Image>
          <Image src={Images.Ulink_Logo} style={styles.lnkPhoto}></Image>
            <View>
              <Text>For Hospital Admissions</Text>
              <Text>https://www.ulinkmyanmar.com/mitravel </Text>
              <Text>09880441015</Text>
            </View>
          </View>
          <View style={styles.date}>
            <Text>Print Date : </Text>
          </View>
        </View>
      </View>
    </Page>

   
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