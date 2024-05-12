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
import tbl1 from "../img/tableOfBenefits.png";
import tbl2 from "../img/tableOfBenefits2.png";
import tbl3 from "../img/tableOfBenefits3.png";
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

const Page11 = () => {
  const currentDate = format(new Date(), "dd MMMM, yyyy");

  return (
    <>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Image src={logoImage} style={styles.logo}></Image>
          <View style={styles.body}>
            <Text style={styles.sec1}>SECTION V: BENEFITS</Text>
            <Image src={tbl1} style={styles.benf}></Image>
            <View style={styles.borders}>
              <Image src={tbl2}></Image>
            </View>
            <Image src={tbl3} style={styles.benf}></Image>
          </View>
          <View style={styles.date}>
            <Text>Print Date : {currentDate}</Text>
          </View>
        </View>
      </Page>
    </>
  );
};

export default Page11;
