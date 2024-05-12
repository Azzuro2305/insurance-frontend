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
    margin: "80px 20px 0px",
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

const Page3 = () => {
  const currentDate = format(new Date(), "dd MMMM, yyyy");
  return (
    <>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image src={logoImage} style={styles.logo}></Image>
          <View style={styles.body}>
            <Text style={styles.sec2}>
              PERMANENT TOTAL DISABLEMENT refers to Injury which:
            </Text>
            <Text>
              i . falls into one of the categories listed in the Scale of
              Permanent Disablement Benefits Table
            </Text>
            <Text style={styles.sec2}>
              i i . Commencing within twelve (12) months from the date of bodily
              injury, you are totally, continuously and permanently disabled for
              twelve (12) continuous months and are prevented from performing
              three (3) or more activities of daily living as herein defined
              which would normally be carried out by your daily life had such
              disablement not occur and for which there is no hope of recovery
              and entirely prevents the insured from engaging in gainful
              employment of any and every kind.
            </Text>
            <Text>Treatment is medically necessary if it:</Text>
            <Text>
              -Consistent with the diagnosis and customary medical treatment for
              a covered illness or injury;
            </Text>
            <Text>
              -In accordance with standards of good medical practice, consistent
              with current standard of professional medical care, and of proven
              medical benefits;
            </Text>
            <Text>
              -Not for the convenience of the insured person or the physician,
              and unable to be reasonably rendered out of hospital (if admitted
              as an inpatient)
            </Text>
            <Text>
              -Not of an observational, experimental, investigational, research,
              check-up, preventative or screening nature, cosmetic, elective
              procedures; and
            </Text>
            <Text style={styles.sec2}>
              -For which the charges are fair, reasonable and customary in
              relation to the illness or injury.
            </Text>
            <Text>Activities of daily living means</Text>
            <Text>
              (1) Transfér: Getting in and out of a chair without requiring any
              physical assistance.
            </Text>
            <Text>
              (2) Mobility: the ability to move from room to room without
              requiring any physical assistance
            </Text>
            <Text>
              (3) Continence: the ability to voluntarily control bowel and
              bladder functions such as to maintain personal hygiene.
            </Text>
            <Text>
              (4) Dressing: putting on and taking off all necessary items of
              clothing without requiring assistance of another person.
            </Text>
            <Text>
              (5) Bathing/ Washing: the ability to wash in the bath or shower
              (including getting in or out of the bath or shower) or wash by any
              other means.
            </Text>
            <Text style={styles.sec2}>
              (6) Eating: All tasks of getting food into the body once the food
              has been prepared.
            </Text>
            <Text style={styles.sec2}>
              PREMIUM refers to amount paid by an insured to an insurer under an
              Insurance Policy as consideration for the obligations assumed by
              the insurer
            </Text>
            <Text style={styles.sec2}>
              REASONABLE AND CUSTOMARY CHARGES refer to charges or fees which
              are generally prevailing and of normal standard for the medical
              condition concerned in the country and city where the insured is
              treated.
            </Text>
            <Text style={styles.sec2}>
              THE COMPANY refers to Myanma Insurance.
            </Text>
            <Text style={styles.sec2}>
              TRAVELING ROUTE refers to the journey between the Republic of the
              Union of Myanmar and the designated country that is in line with
              the itinerary, as the passenger of a commercial airline including
              scheduled transit for refueling and flight connection
            </Text>
            <Text style={styles.sec2}>
              TRIP refers to the period between the Commencement of Cover and
              Expiry of Cover.
            </Text>
            <Text>
              COVID-19 Coronavirus disease 2019 (COVID-19) is an infectious
              disease caused by severe acute respiratory syndrome coronavirus 2
              (SARS-CoV-2).
            </Text>
            <Text>2. SCOPE OF COVER</Text>
            <Text style={styles.sec2}>
              All Benefits in this policy are subject to:
            </Text>
            <Text>
              (l ) The total maximum limits of your chosen plan as stated in the
              schedule of benefits;
            </Text>
            <Text>
              (2) The event giving rise to a claim having occurred within the
              period of insurance; and
            </Text>
            <Text style={styles.sec2}>
              (3) All the terms, conditions and general and respective/specific
              exclusions set out in this policy
            </Text>
            <Text>PERSONAL ACCIDENT BENEFITS</Text>
            <Text>ACCIDENTAL DEATH</Text>
            <Text>
              The Company will pay the sum insured as stated in the Schedule of
              Benefit, if the Insured sustained Accident during the Trip, which
              results in Death within 90 days from the day the incident
              occurred.
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
export default Page3;
