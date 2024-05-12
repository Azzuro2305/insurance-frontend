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
    margin: "100px 20px 0px",
    lineHeight: 1.8,
  },
  sec: {
    marginTop: 10,
    fontSize: 11,
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
  //Footer
  date: {
    fontSize: 8,
    right: 0,
    bottom: 10,
    position: "absolute",
  },
});

export default function Page8() {
  const currentDate = format(new Date(), "dd MMMM, yyyy");

  return (
    <>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image src={logoImage} style={styles.logo}></Image>
          <View style={styles.body}>
            <Text style={styles.sec1}>8. CONFIDENTIALITY</Text>
            <Text>
              The Company shall keep all information to which Insured provided
              confidential either through filling the application form or via
              electronic communication.
            </Text>
            <Text style={styles.sec1}>9. DISAPPEARANCE</Text>
            <Text>
              If during the period of cover and whilst on the insured Trip, an
              Insured disappears following the disappearance, sinking or
              wrecking of a conveyance in which they were traveling and their
              body has not been found within twelve (12) months after the date
              of disappearance, they will be deemed to have died as a result of
              an Accident at the time of disappearance, sinking or wrecking of
              the conveyance. If benefit under PERSONAL ACCIDENT BENEFITS is
              payable because of disappearance, the Company will only pay
              provided the Insured's beneficiary gives the Company a signed
              undertaking that the amounts will be repaid to the Company if the
              Insured is subsequently found to be alive
            </Text>
            <Text style={styles.sec}>SECTION III: EXCLUSIONS</Text>
            <Text>OUT-PATIENT SERVICES</Text>
            <Text>
              All forms of outpatient treatment including doctor consultation,
              purchasing medication via external pharmacy, outpatient diagnosis
              and lab test.
            </Text>
            <Text style={styles.sec1}>DENTAL TREATMENT</Text>
            <Text>
              Dental conditions including dental treatment, restorative
              procedure (including but not limited to crowning, bridging and
              root canal treatment) or oral surgery.
            </Text>
            <Text style={styles.sec1}>ADDICTION/ INTOXICATION</Text>
            <Text>
              Those claims are derived from illnesses or pathological states
              caused by the voluntary consumption of alcohol, drugs, toxic
              substances, narcotics or medicines acquired without medical
              prescription, as well as any kind of mental illness or mental
              imbalance.
            </Text>
            <Text style={styles.sec1}>AERIAL ACTIVITIES</Text>
            <Text>
              This Policy does not pay claims arising from flying or other
              aerial activity except as a fare-paying passenger in a fully
              licensed aircraft operated by a licensed commercial air carrier or
              recognized charter company.
            </Text>
            <Text style={styles.sec1}>BACTERIAL & VIRAL INFECTION</Text>
            <Text>
              The Company will not pay for claims arising from bacterial or
              viral infections even if contacted by accident except for
              bacterial infection that is the direct result of an accidental cut
              or wound.
            </Text>
            <Text style={styles.sec1}>CARELESSNESS</Text>
            <Text>
              Those claims are caused directly or indirectly by the bad faith of
              the Insured, by his/her participation in criminal acts, or as a
              result of his/her fraudulent, seriously negligent, or reckless
              actions. The consequences of the actions of the Insured in a state
              of derangement or under psychiatric treatment are not covered
              either.
            </Text>
            <Text style={styles.sec1}>COSMETIC/ PLASTIC SURGERY</Text>
            <Text>
              Any Plastic, Elective, Reconstructive Surgery including treatments
              for skin, blemishes, aging spots, freckles, dandruff, hair loss,
              weight control, or elective surgery to improve physical
              appearance, except where such Surgery is necessary for the repair
              of damage caused solely by bodily injuries as a result of an
              accident.
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
