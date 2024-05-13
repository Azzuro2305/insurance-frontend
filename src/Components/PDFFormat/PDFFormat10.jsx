import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import logo from "../Images/logo.png";
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
  //Footer
  date: {
    fontSize: 8,
    right: 0,
    bottom: 10,
    position: "absolute",
  },
});

const Page10 = () => {
  const currentDate = format(new Date(), "dd MMMM, yyyy");

  return (
    <>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image src={logo} style={styles.logo}></Image>
          <View style={styles.body}>
            <Text style={styles.sec1}>WAR/ TERRORISM</Text>
            <Text>
              Any accidents or treatment arising from the war (whether it is
              announced or not), invasion or execution by a foreign enemy, Civil
              War, Revolution, Rebellions, Demonstrations against the
              government, Riot, Strike, Calamity, or any political unrest having
              to announce martial law to control the situation, including
              Terrorism.
            </Text>

            <Text style={styles.sec1}>NATURAL PHENOMENA</Text>
            <Text>
              Extraordinary natural phenomena such as floods, earthquakes,
              landslides, volcanic eruptions, atypical cyclonic storms, falling
              objects from space and aerolites, and in general any extraordinary
              atmospheric, meteorological, seismic or geological phenomenon.
            </Text>

            <Text style={styles.sec}>SECTION IV: CLAIM PROCEDURE</Text>
            <Text style={styles.sec1}> 1.CLAIM</Text>
            <Text>
              In the event of any occurrence which may give rise to a claim for
              indemnity under this Policy, the Insured (or the Insured's
              Beneficiary in case of death) shall:
            </Text>
            <Text>
              (a)give notice to the Company in writing with full details within
              30 consecutive days after the completion of the Trip or 24
              consecutive hours from the date of Accident in the case of death
              or disablement if practicable.
            </Text>
            <Text>
              (b)give the Company at his/her own expense all medical evidence,
              certificates, reports, original receipts, proof of ownership,
              documentation, and any other evidence.
            </Text>
            <Text>
              (c)The reimbursement for the Treatment of eligible injury or
              illness will be made either up to the amount as stated in the
              Table of Benefit or the amount insured person have incurred for
              medical treatment whichever is the lower amount.
            </Text>
            <Text>
              (d)Claim reimbursement will be paid in the local currency unless
              we have previously agreed otherwise in writing. Claims incurred in
              any other currency will be converted using the exchange rates on
              the date of treatment or date of discharge for inpatient
              treatment. We shall not be liable for any bank charges, credit
              charges or losses due to currency fluctuation.
            </Text>
            <Text>
              (e)In the event of an Emergency, Serious Accident, or Illness,
              please call the Company's helpline number shown on the Certificate
              of Insurance, the Company's Website, or Claim form. The Insured
              shall provide his/her name, policy number and details of his/her
              Accident or Illness, contact details of his/her attending doctor,
              his/her present location and how he/she can be contacted.
            </Text>

            <Text style={styles.sec1}>2. LEGAL PROCEEDINGS</Text>
            <Text>
              No action at law or in equity shall be brought under this Policy
              against the Company prior to the expiration of 60 days after the
              proof of claim has been filed in accordance with the requirements
              of this Policy nor shall such action be brought at all unless it
              is brought within 2 years from the expiration of the period within
              which proof of claim is required under this Policy. If the Company
              shall disclaim liability for any claim under this Policy and no
              action has within five (5) calendar months from the date of such
              disclaimer been commenced against the Company, then the claim
              shall for all purposes be deemed to have been abandoned and shall
              not thereafter be recoverable.
            </Text>

            <Text style={styles.sec1}>3. DISPUTE RESOLUTION</Text>
            <Text>
              -The Parties may agree to take part in the dispute resolution or
              mediation in good faith and undertake to honor the terms of any
              settlement reached.
            </Text>
            <Text>
              -Or If any dispute is not reached any settlement through dispute
              resolution and mediation methods, the dispute may be submitted to
              Insurance Business Regulatory Board (IBRB) in Republic of the
              Union of Myanmar and an arbitral award shall be final and in force
              to the Parties of the dispute.
            </Text>
          </View>
          <View style={styles.date}>
            <Text>Print Date : {currentDate}</Text>
          </View>
        </View>
      </Page>
    </>
  );
};

export default Page10;
