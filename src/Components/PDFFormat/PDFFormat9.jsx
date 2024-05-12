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

const Page9 = () => {
  const currentDate = format(new Date(), "dd MMMM, yyyy");

  return (
    <>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image src={logoImage} style={styles.logo}></Image>
          <View style={styles.body}>
            <Text style={styles.sec1}>HAZARDOUS ACTIVITIES & SPORTS</Text>
            <Text>
              Any treatment or accident arising from participating in:
            </Text>
            <Text>
              • animal hunting (game hunting), car/ boat/ horse racing,Boxing
            </Text>
            <Text>
              • all Skiing for recreation or competition including Jet Skiing,
              Skating, and Parachuting (unless to save Insured's life)
            </Text>
            <Text>
              • while getting in, getting out or taxing in Balloons or Gliders
            </Text>
            <Text>
              • Bungee Jumping, Mountain Climbing with or without Mountain
              Climbing Equipment, and Divingusing Oxygen Cylinders and other
              Breathing Apparatus
            </Text>
            <Text>
              • traveling in an aircraft not operated by a commercial airline
              which is taxiing, taking off, or landing.
            </Text>
            <Text>
              • This extends to driving a car or motorcycle without a driver's
              license.
            </Text>
            <Text>
              • Participation in competitions or tournaments organized by
              sporting federations or similar organizations.
            </Text>
            <Text style={styles.sec1}>FELONY / MISDEMEANOR / BRAWLING</Text>
            <Text>
              • The Company will not indemnify the Insured in respect of any
              Liability or Injury arising out of criminal offenses alleged.
            </Text>
            <Text>
              • The Company will not pay claims for any accident occurring when
              the Insured is encouraging or taking part or participating in a
              brawling fight.
            </Text>
            <Text style={styles.sec1}>FIT TO TRAVEL</Text>
            <Text>
              Where the Insured is not fit to undertake the Trip as confirmed by
              his/her medical practitioner when booking the Trip or purchasing
              this policy.
            </Text>
            <Text style={styles.sec1}>PSYCHIATRY </Text>
            <Text>
              Any diagnosis, medical investigation, symptom, diseases or
              treatment relating to emotional, stress, psychiatric or
              psychological disorders, Insanity, Behavioral or Characteristic
              Disorders. This extends to Concentration Problems, Autism,
              Depression, Eating Disorders or Anxiety.
            </Text>

            <Text style={styles.sec1}>PRE-EXISTING CONDITION</Text>
            <Text>
              Any Pre-existing condition which the Insured received medical
              treatment, diagnosis consultation or prescribed drugs for which
              medical advice or treatment as recommended by physician preceding
              the Effective Date of the contract.
            </Text>

            <Text style={styles.sec1}>PREGNANCY</Text>
            <Text>
              Any treatment arising from Pregnancy, Child Delivery, Abortion,
              Miscarriage (except accidental miscarriage), Infertility (includes
              Infertility Investigation and Treatment), Vasectomy or
              Contraception.
            </Text>

            <Text style={styles.sec1}>RADIOACTIVITY</Text>
            <Text>
              Nuclear Weapons, Radiation, Radioactivity from Nuclear-Fuel or
              Nuclear Waste or Nuclear Radiation caused by combustion of fuel
              and Nuclear Fission which self-ignites. Explosion by Radioactivity
              Nuclear material or dangerous objects are used in a Nuclear
              Explosion.
            </Text>
            <Text style={styles.sec1}>
              SEXUALLY TRANSMITTED DISEASES (STDs)
            </Text>
            <Text>
              Any investigation, test or treatment arising directly or
              indirectly from Sexually Transmitted Diseases, including Venereal
              Diseases, Immune Deficiency Syndrome (AIDs), any AIDs-related
              condition or infection by Human Immune Deficiency Virus (HIV).
            </Text>
            <Text style={styles.sec1}>SONIC BANGS</Text>
            <Text>
              Loss, destruction, or damage directly occasioned by pressure waves
              caused by aircraft and other aerial devices traveling at sonic or
              supersonic speeds.
            </Text>
            <Text style={styles.sec1}>SUICIDE</Text>
            <Text>
              This Insurance does not cover suicide or attempting to commit
              suicide, self-inflicted accidents, attempting to cause accidents
              to him/herself, or arranging for any third party to undertake such
              an act.
            </Text>

            <Text style={styles.sec1}>TOUR OPERATOR & AIRLINE FAILURE</Text>
            <Text>
              Any claim that results from the tour operator, airline, or any
              other company, firm, or person not being able or not being willing
              to carry out any part of their obligation to the Insured.
            </Text>

            <Text style={styles.sec1}>TRAVELLING AGAINST WHO ADVICE</Text>
            <Text>
              The Insured travel to a country, specific area, or event when the
              World Health Organization (WHO) or regulatory authority in a
              country to/from which you are traveling has advised against all,
              or all but essential travel.
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
export default Page9;
