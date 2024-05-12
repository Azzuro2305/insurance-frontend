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
    margin: "70px 20px 0px",
    lineHeight: 1.8,
  },
  sec1: {
    fontSize: 11,
    marginBottom: 10,
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

export default function Page6() {
  const currentDate = format(new Date(), "dd MMMM, yyyy");

  return (
    <>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image src={logoImage} style={styles.logo}></Image>
          <View style={styles.body}>
            <Text style={styles.sec2}>MEDICAL AND EVACUATION BENEFITS</Text>
            <Text>• OVERSEAS EMERGENCY MEDICAL EXPENSES</Text>
            <Text style={styles.sec2}>
              The Company will reimburse to the Insured all medically necessary
              treatment and services provided by or on the order of a Physician
              to the insured Person when admitted as a registered inpatient to a
              Hospital up to the limit specified in the Table of Benefits and
              medical expense sublimit section which is reasonably and customary
              charges incurred whilst during the trip as a direct, sole and
              independent result of Accident or illness suffered by the insured.
              or authorized hospital/medical center up to the limit specified in
              the schedule of benefit and medical expense sub-limit section
              which is reasonably and customary charges incurred whilst overseas
              as a direct, sole and independent result of Accident or Illness
              suffered by the Insured.
            </Text>
            <Text style={styles.sec2}>
              Cover includes ordinary board and room, nursing charges and other
              medical charge such as the diagnostic, laboratory or other
              medically necessary facilities and services, physician's/surgeon's
              fee/ anaesthetist's fees or physiotherapist's fees, operating
              theatre charges, surgery implants and all drugs, dressings or
              medications prescribed by the treating physician for inhospital;
              intensive care unit charges, hospital general expenses and
              in-hospital surgeon visit up to the limit specified in the Table
              of Benefits. The company do not pay for the costs of non-medically
              necessary goods or services including such items as telephone,
              television and newspapers; personal items such as bed sheet, urine
              pot, medical appliances are not covered as well. DEDUCTIBLE: MMK
              300,000 for Sl MMK 30,000,000 , MMK 900,000 for Sl 90,000,000 and
              MMK 1,500,000 for Sl 150,000,000 in each claim
            </Text>
            <Text>• OVERSEAS EMERGENCY MEDICAL EXPENSES DUE TO COVID-19</Text>
            <Text style={styles.sec2}>
              The company will reimburse to the insured all medically necessary
              treatment and services provided by or on the order of a physician
              to the insured person when admitted as a registered in-patient to
              a hospital up to the limit specified in the Table of Benefits and
              medical expense sub-limit section which is reasonably and
              customary charges incurred whilst during the Trip as a direct,
              sole and independent result of Covid-19 infection suffered by the
              insured.
            </Text>
            <Text style={styles.sec2}>
              Cover includes ordinary board and room, nursing charges and other
              medical charge such as the diagnostic, laboratory or other
              medically necessary facilities and services, physician's/
              surgeon's fee/ anaesthetist's fees or physiotherapist's fees,
              operating theatre charges, surgery implants and all drugs,
              dressings or medications prescribed by the treating physician for
              in hospital; intensive care unit charges, hospital general
              expenses and in-hospital surgeon visit up to the limit specified
              in the table of benefits.
            </Text>
            <Text style={styles.sec2}>
              The company do not pay for the costs of non-medically necessary
              goods or services including such items as telephone, television
              and newspapers; personal items such as bed sheet, urine pot,
              medical appliances are not covered as well. DEDUCTIBLE: MMK
              300,000 for Sl MMK 30,000,000 , MMK 900,000 for Sl 90,000,000 and
              MMK 1,500,000 for Sl 150,000,000 in each claim.
            </Text>
            <Text>• EMERGENCY MEDICAL EVACUATION</Text>
            <Text style={styles.sec2}>
              In the event of an accident or sudden illness, the Company will
              not bear the costs of transferring or repatriating the Insured to
              a properly equipped health center or to his/her usual country of
              residence.
            </Text>
            <Text>
              • FOLLOW UP TREATMENT IN REPUBLIC OF THE UNION OF MYANMAR
            </Text>
            <Text>
              We will reimburse You, up to the limit specified in the schedule
              of benefit for Medical Expenses necessarily as a registered
              inpatient to a hospital incurred as follow-up medical treatment in
              Republic of the Union of Myanmar for injury which You had
              sustained whilst Overseas. The time limit for seeking such medical
              treatment is as follows:
            </Text>
            <Text>
              (i) if prior medical treatment has not been sought Overseas, You
              must seek medical treatment
            </Text>
            <Text style={styles.sec2}>
              (ii) as a registered in-patient to a hospital in Republic of the
              Union of Myanmar within 48 hours upon Your arrival in Republic of
              the Union of Myanmar. From the date of the first medical treatment
              in Republic of the Union of Myanmar, You have up to a maximum of
              30 days to continue medical treatment in Republic of the Union of
              Myanmar up to the limit specified in the table of
              benefits.DEDUCTIBLE: MMK 300,000 for SI MMK 30,000,000 , MMK
              900,000 for SI MMK 150,000,000 and MMK 1,500,000 for SI MMK
              150,000,000 in each claim.
            </Text>
            <Text>
              (iii)if medical treatment had already been sought Overseas, you
              have up to a maximum of 30 days (inclusive of the period of
              followup medical treatment) upon Your arrival in the Republic of
              the Union of Myanmar to continue medical treatment as a registered
              inpatient to a hospital in the Republic of the Union of Myanmar up
              to the limit specified in the schedule of benefit. For covid19
              disease sustained while overseas, we will reimburse you, up to the
              limit specified in the table of benefits, the Medical Expenses as
              a registered in-patient to a hospital necessarily incurred in the
              Republic of the Union of Myanmar for follow-up medical treatment
              for covid-19 disease.
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
