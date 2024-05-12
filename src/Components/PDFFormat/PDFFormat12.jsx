import React from "react";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import logoImage from "../Images/logo.png";
import tbl1 from "../Images/logo.png";
import tbl2 from "../Images/logo.png";
import tbl3 from "../Images/logo.png";
import { format } from "date-fns";

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

  //Head
  logo: {
    width: "50px",
    height: "50px",
    position: "absolute",
    right: 0,
    marginTop: 55,
  },
  //Body
  body: {
    fontSize: 8.5,
    margin: "90px 20px 0px",
    lineHeight: 1.8,
  },
  sec: {
    fontSize: 11,
    marginTop: 10,
    marginBottom: 10,
  },
  sec1: {
    fontSize: 10,
  },
  sec2: {
    marginBottom: 10,
  },
  sch1Ph: {
    width: "450px",
    alignSelf: "center",
  },
  tabHead: {
    fontSize: 12,
    textAlign: "center",
  },
  benf: {
    marginBottom: 10,
  },
  borders: {
    marginBottom: 10,
    borderRight: "1px",
    borderBottom: "1px",
  },
  //Footer
  date: {
    fontSize: 8,
    right: 0,
    bottom: 10,
    position: "absolute",
  },
});
function Page12() {
  const currentDate = format(new Date(), "dd MMMM, yyyy");
  return (
    <>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image src={logoImage} style={styles.logo}></Image>
          <View style={styles.body}>
            <Text style={styles.sec1}>
              SECTION VI: ADDITIONAL GENERAL CONDITIONS
            </Text>
            <Text style={styles.benf}>
              1. In the case of a foreign language document, You shall at Your
              expense provide Us with an English translation of such document if
              We require
            </Text>
            <Text style={styles.benf}>
              2. We may refuse to pay any claims for which You cannot provide
              receipts, bills or other supporting documents that We may require.
            </Text>
            <Text style={styles.benf}>
              3. You or your legal representative must pay for any certificates,
              information and evidence, which We may need. When there is a claim
              for injury or illness, We may ask for, and will pay for, any
              insured person to be medically examined on Our behalf.
            </Text>
            <Text style={styles.benf}>
              4. All claims will be paid in USD. For claims incurred in a
              foreign currency, We will convert the foreign currency amount into
              USD at a foreign currency exchange rate to be determined by Us.
            </Text>
            <Text style={styles.benf}>
              5. We shall have full discretion in the conduct of any proceeding
              or the settlement of any claim.
            </Text>
            <Text style={styles.benf}>
              6. Any person who is seeking indemnity under this policy shall
              give Us all the information, documents and assistance. We require
              to enable any claim to be validated for Us to achieve a
              settlement.
            </Text>
            <Text style={styles.benf}>
              7. You must pay Us back any amount which We have paid which You
              are not covered for.
            </Text>
            <Text>8. Access to and Your Doctor</Text>
            <Text style={styles.benf}>
              If You make a medical or dental claim, You may be asked to supply
              Your Doctor's name to enable Us to access Your medical records.
              This will help the treating Doctors, and Us, to provide You with
              the most appropriate treatment and assess whether the cover
              applies. If You do not agree to provide this We may not deal with
              Your claim
            </Text>
            <Text>9. Fraud</Text>
            <Text style={styles.benf}>
              If You, or anyone acting for You, make a claim under this policy
              knowing the claim to be dishonest or intentionally exaggerated or
              fraudulent in any way, or if You give any false declaration or
              statement to support the claim, We will not pay the claim and all
              cover under the policy will end. We reserve the right to lodge a
              report with the Local Police about any dishonest claim.
            </Text>
            <Text>10. Your duty to take precautions</Text>
            <Text style={styles.benf}>
              You must at all times take reasonable precautions to prevent and
              avoid losses, damages, Accident, Accidental injuries and minimise
              claims under the policy.
            </Text>
            <Text>11. Your duty to comply with policy conditions</Text>
            <Text style={styles.benf}>
              Our provision of insurance under this policy is conditional upon
              You observing and fulfilling the terms, provisions, conditions and
              clauses of this policy.
            </Text>
            <Text>12. Burden of proof</Text>
            <Text style={styles.benf}>
              The burden of proving the validity of any claim is upon You. If We
              deny any claim by reason of any exclusion, the burden of proving
              that We are legally responsible for the claim is also upon You.
            </Text>
            <Text>13. Rights of recovery</Text>
            <Text style={styles.benf}>
              In the event authorisation for payment and/or payment is made by
              Us or an authorized service provider appointed by Us for any
              medical or non-medical claim for which policy liability is not
              engaged, We reserve the right to recover against You for the full
              sum.
            </Text>
          </View>
          <View style={styles.date}>
            <Text>Print Date : {currentDate}</Text>
          </View>
        </View>
      </Page>
    </>
  );
}

export default Page12;
