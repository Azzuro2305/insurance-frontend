import { PDFDownloadLink } from "@react-pdf/renderer";
import { PDFFormat } from "../PDFFormat/PDFFormat";

export const DownloadPDFButton = ({ data }) => (
  <PDFDownloadLink
    document={<PDFFormat />}
    fileName="YourInsurance.pdf"
    className="inline-block px-6 py-2 text-xs font-medium text-center text-white transition bg-[#214C9B] rounded-md shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
  >
    {({ blob, url, loading, error }) =>
      loading ? "Loading document..." : "Download"
    }
  </PDFDownloadLink>
);
