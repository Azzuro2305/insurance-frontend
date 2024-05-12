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
  sec: {
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

function Page7() {
  const currentDate = format(new Date(), "dd MMMM, yyyy");

  return (
    <>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image src={logoImage} style={styles.logo}></Image>
          <View style={styles.body}>
            <Text style={styles.sec}>
              SECTION II: GENERAL CONDITIONS AND PROVISIONS
            </Text>
            <Text style={styles.sec1}>1. DUTY OF DISCLOSURE</Text>
            <Text>
              The accuracy of the information provided over any means of
              electronic connmunications or in the Insured's proposal form will
              form the basis of and be part of the contract. Before Insured
              enter into the Insurance contract and during the Period of
              Insurance, Insured must declare to The Company everything Insured
              know or could reasonably be expected to know which will affect The
              Company's decision on the coverage and the terms of the insurance.
              If Insured are uncertain about whether a fact is relevant or not,
              Insured must declare to The Company about it. The Company will
              acknowledge receipt of acceptance of material information by
              stating these on the Policy Schedule. If Insured do not provide
              this information to The Company, The Company may:
            </Text>
            <Text>
              i. reduce the amount payable for the claim under this Policy; or
            </Text>
            <Text>i i . refuse to pay the claim that may arise; or</Text>
            <Text>
              i i i . cancel Insured's Insurance Policy from inception.
            </Text>
            <Text style={styles.sec1}>2. ELIGIBILITY</Text>
            <Text>Persons eligible for cover under this Policy are:</Text>
            <Text>i. An Individual aged above one year.</Text>
            <Text style={styles.sec1}>
              3. AMENDMENT OF THE INSURANCE POLICY
            </Text>
            <Text>
              The Amendment of the Insurance Policy will be valid when The
              Company accepts such agreement and it is legally binding after a
              formal written statement is attached to the Policy or is issued as
              an endorsement by The Company's authorized representative.
            </Text>

            <Text style={styles.sec1}>4. CHANGE OF INSURANCE AGREEMENT</Text>
            <Text>
              Insured shall give the Company immediate written notice of any
              changes in the Country of Residence, occupation, pursuits or
              health of any Insured, which is likely to result in a material
              increase in hazard to The Company and shall pay any additional
              premiums that may be required by The Company. Failure to do so
              shall entitle The Company, in the event of a claim, to repudiate
              such a claim or at The Company's discretion, adjust the benefits
              payable.
            </Text>
            <Text>
              The Company reserves the rights to amend the terms and provisions
              of this Policy on any Policy Anniversary date by giving Insured
              thirty (30) days' written notice of such change. Notice can be
              delivered via electronic means or sent by ordinary mail to
              Insured's last known correspondence address in The Company's
              records. No alteration to this Policy shall be valid unless
              approved in writing by The Company's authorized representative and
              reflected in an endorsement. No broker, agent or advisor has the
              authority to amend or waive any of the terms and conditions of
              this Policy.
            </Text>

            <Text style={styles.sec1}>5. MISSTATEMENT</Text>
            <Text>• Misstatement of Age</Text>
            <Text>
              If the date of birth of any Insured has been incorrectly stated on
              the proposal form, then the annual premium shall be adjusted based
              on the correct age. Any excess premium that may have been paid as
              a result of any misstatement of age shall be refunded without
              interest. If at the correct age Insured would not have been
              eligible for cover under this Policy, no benefit shall be payable.
              Proof of age of each Insured must be submitted to The Company
              before any claims can be made under the Policy.
            </Text>
            <Text>• Misstatement or fraud</Text>
            <Text>
              The Company shall have no liability to pay any benefit under this
              Policy if Insured or any Insured:
            </Text>
            <Text>
              - fail to fully and truthfully disclose to The Company all
              material information known (or which could reasonably be expected
              to be known) before inception of this policy and upon each
              renewal;
            </Text>
            <Text>
              - fail to properly fulfil the terms and conditions of this policy;
            </Text>
            <Text>- make any untruth statement;</Text>
            <Text>
              - omit, suppress or incorrectly state any material information
              affecting the risk;
            </Text>
            <Text>
              - make any claim that is fraudulent or exaggerated or make any
              false declaration or statement in support of a claim.
            </Text>
            <Text style={styles.sec1}>6. GOVERNING LAW AND JURISDICTION</Text>
            <Text>
              The Policy shall be governed by and interpreted in accordance with
              the Law of Republic of the Union of Myanmar. The jurisdiction is
              the competent court in Republic of the Union of Myanmar.
            </Text>
            <Text style={styles.sec1}>7. CURRENCY</Text>
            <Text>
              The currency of the premium and any coverage amounts (benefits)
              will be in Myanmar Kyat (MMK) . This Provision remains applicable
              unless there is a regulation to control the use of currency.
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

export default Page7;
