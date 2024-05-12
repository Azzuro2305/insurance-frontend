import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
// import logo from "../img/MI_PdfLogo.png";
import logoImage from "../Images/logo.png"

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
  head: {
    borderBottom: "1px",
    margin: "20px 0px 0px",
  },
  headtxt: {
    marginBottom: 10,
  },
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
    margin: 15,
    lineHeight: 1.8,
  },
  sec1: {
    fontSize: 11,
    marginBottom: 10,
  },
  sec2: {
    marginBottom: 10,
  },
  //Footer
  date: {
    fontSize: 8,
    right: 0,
    bottom: 10,
    position: "absolute",
  },
});

function Page2() {
  const currentDate = format(new Date(), "dd MMMM, yyyy");
  return (
    <>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <View style={styles.head}>
            <Text>OUTBOUND TRAVEL ACCIDENT INSURANCE</Text>
            <Text style={styles.headtxt}>POLICY WORDING</Text>
          </View>
          <Image src={logoImage} style={styles.logo}></Image>
          <View style={styles.body}>
            <Text style={styles.sec1}>SECTION I: COVERAGES</Text>
            <Text style={styles.sec1}>1.DEFINITIONS</Text>
            <Text style={styles.sec2}>
              ACCIDENT/ACCIDENTAL refers sudden, unintended and unforeseen
              mishap caused by external, violent and visible means.
            </Text>
            <Text style={styles.sec2}>
              APPOINTED ASSISTANCE COMPANY refers to a company appointed by
              Myanma Insurance to provide the Insured with travel assistance and
              medical emergency services.
            </Text>
            <Text style={styles.sec2}>
              DEDUCTIBLE refers to the amount of any claim which Insured must
              pay themselves.
            </Text>
            <Text style={styles.sec2}>
              EFFECTIVE DATE refers to the Policy Commencement Date or Date of
              the Insured’s first enrollment into the Policy, whichever is
              later.
            </Text>
            <Text style={styles.sec2}>
              ILLNESS refers to Covid-19 disease, manifesting itself during the
              period of insurance, and excluding any pre-existing conditions
            </Text>
            <Text style={styles.sec2}>
              INSURED refers to natural person or legal entity that purchases an
              Insurance Policy, and in some cases an insured can be a policy
              owner as well as an insured person.
            </Text>
            <Text style={styles.sec2}>
              MEDICAL EXPENSE refers to the services fee that the Hospital or
              Medical Center charges Insured that are considered Normal and
              Customary while he/she is their Inpatient.
            </Text>
            <Text style={styles.sec2}>
              MEDICAL PRACTITIONER refers to a person who has a medical degree,
              is licensed or registered in the country which they operate and is
              accredited by a medical board or equivalent organization to render
              medical services, except of Family Members.
            </Text>
            <Text style={styles.sec2}>
              LOSS OF SIGHT refers to a physical condition where the Insured is
              completely blind and cannot be cured.
            </Text>
            <Text style={styles.sec2}>
              PERIOD OF INSURANCE refers to the period of cover shown in the
              Policy Schedule for which the appropriate premium has been paid.
            </Text>
            <Text style={styles.sec2}>
              ISOLATION refers to Hotel quarantine and facility centers due to
              the infection of covid-19.
            </Text>
            <Text>
              HOSPITAL refers to only an establishment duly constituted and
              registered as a hospital or clinic for the care and treatment of
              sick and injured persons as bed-paying patients, and which:
            </Text>
            <Text>(1) has facilities for diagnosis and major surgery,</Text>
            <Text>
              (2) provides twenty-four (24) hours a day nursing services by
              registered and graduate nurses
            </Text>
            <Text style={styles.sec2}>
              (3) is under the supervision of a medical practitioner
            </Text>
            <Text style={styles.sec2}>
              DEDUCTIBLE means the accumulative total amount of medical expenses
              incurred by an insured person during any one policy year in excess
              of which the policy will indemnify or compensate the insured
              person for medical expenses covered by the policy.
            </Text>
            <Text style={styles.sec2}>
              INJURY means bodily injury sustained by you during the period of
              insurance caused solely and directly by an accident.
            </Text>
            <Text style={styles.sec2}>
              IN-PATIENT refers to someone who is continuously confined to a
              hospital and under the care of a physician for more than
              twenty-four (24) consecutive hours, such confinement being
              certified as medically necessary by the attending physician.
            </Text>
            <Text style={styles.sec2}>
              LOSS OF A LIMB means loss by physical severance or total and
              permanent loss of use of a hand at or above the wrist or of a foot
              at or above the ankle.
            </Text>
            <Text style={styles.sec2}>
              PRE-EXISTING CONDITIONS means any disabilities for which you have
              reasonable knowledge of in the twelve (12) months prior to the
              commencement of this policy. You are considered to have reasonable
              knowledge of pre-existing conditions where the condition is one
              for which:
            </Text>
            <Text>(1) you have been diagnosed; or</Text>
            <Text>
              (2) symptoms existed that would cause an ordinary prudent person
              to seek diagnosis, care or treatment; or
            </Text>
            <Text>
              (3) medical advice, diagnosis, care or treatment that has been
              recommended by medical practitioner, irrespective of whether such
              treatment was actually received prior to the commencement date of
              this policy; or
            </Text>
            <Text>(4) you have received or are receiving treatment.</Text>
          </View>
          <View style={styles.date}>
            <Text>Print Date : {currentDate}</Text>
          </View>
        </View>
      </Page>
    </>
  );
}

export default Page2;
